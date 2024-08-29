import React from "react";

import {
  CHARACTERS_LIST_ID,
  LIST_ITEM_ROLE,
  mockCharactersData,
  mockErrorMessage,
} from "./constants";
import {
  characters,
  mockCharacters,
  mockReturnData,
  mockReturnDataError,
} from "./mock";
import { MockedProvider } from "@apollo/client/testing";
import {
  act,
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";

import { useCharactersPagination } from "@/src/hooks/useCharactersPagination";

import CharactersSection from "@/src/components/CharactersSection";
import { CharactersList } from "@/src/components/CharactersSection/CharactersList";
import ScrollButtons from "@/src/components/ScrollButtons.tsx";

jest.mock("@/src/hooks/useCharactersPagination");

const mockUseCharactersPagination =
  useCharactersPagination as jest.MockedFunction<
    typeof useCharactersPagination
  >;

mockUseCharactersPagination.mockReturnValue(mockReturnData);

describe("Characters", () => {
  afterEach(() => {
    cleanup();
  });

  // list
  it("should render a characters list and should have a length equal 2", () => {
    render(<CharactersList items={mockCharactersData} />);

    const list = screen.getByTestId(CHARACTERS_LIST_ID);

    expect(list).toBeInTheDocument();
    expect(list.children).toHaveLength(2);
    expect(list).toMatchSnapshot();
  });

  it("items should have the right value of  prop 'name'", () => {
    render(<CharactersList items={mockCharactersData} />);

    const items = screen.getAllByRole(LIST_ITEM_ROLE);
    const charactersNames = items.map((item) => item.textContent);

    expect(charactersNames).toEqual(["Rick Sanchez", "Morty Smith"]);
  });

  // component
  test("renders CharactersSection component", async () => {
    const { container } = render(
      <MockedProvider mocks={mockCharacters} addTypename={false}>
        <CharactersSection charactersData={[]} count={2} />
      </MockedProvider>
    );

    expect(await screen.findByText("Rick Sanchez")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test("loads more characters on scroll", () => {
    render(
      <CharactersSection charactersData={mockReturnData.items} count={2} />
    );

    fireEvent.scroll(window, { target: { scrollY: 1000 } });

    expect(mockReturnData.getMoreCharacters).toHaveBeenCalled();
  });

  test("displays end message when no more characters", () => {
    mockUseCharactersPagination.mockReturnValue({
      ...mockReturnData,
      hasMore: false,
    });

    render(
      <CharactersSection charactersData={mockReturnData.items} count={2} />
    );

    expect(screen.getByText("Nothing more to show")).toBeInTheDocument();
  });

  test("displays error message on query error", async () => {
    mockUseCharactersPagination.mockReturnValue(mockReturnDataError);
    const errorMocks = [
      {
        request: {
          query: characters,
          variables: { page: 1 },
        },
        error: new Error(mockErrorMessage),
      },
    ];

    render(
      <MockedProvider mocks={errorMocks} addTypename={false}>
        <CharactersSection charactersData={[]} count={2} />
      </MockedProvider>
    );

    await waitFor(() => {
      expect(screen.getByRole("info-message")).toBeInTheDocument();
    });
  });

  it("scroll buttons should be in the document", async () => {
    const sectionRef = { current: document.createElement("div") };

    render(
      <div ref={sectionRef}>
        <ScrollButtons sectionRef={sectionRef} />
      </div>
    );

    act(() => {
      fireEvent.scroll(window, { target: { scrollY: 1000 } });
    });

    expect(screen.getByTestId("scroll-buttons")).toBeInTheDocument();

    await waitFor(
      () => {
        expect(screen.getByTestId("btn-top")).toBeInTheDocument();
        expect(screen.getByTestId("btn-bottom")).toBeInTheDocument();
      },
      { timeout: 1000 }
    );
  });
});

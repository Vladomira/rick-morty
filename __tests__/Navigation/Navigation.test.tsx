import { Links } from "./constants";
import { formattedLink, setupNav } from "./helpers";
import DashboardLayout from "@/app/dashboard/DashboardLayout";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import mockRouter from "next-router-mock";

import { MemoryRouterProvider } from "next-router-mock/MemoryRouterProvider";

jest.mock("next/router", () => require("next-router-mock"));

describe("Navigation", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders a heading", () => {
    const { heading } = setupNav();

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Rick and Morty");
  });

  it("links should have proper text", () => {
    const { homeLink, locationLink, searchLink } = setupNav();

    expect(homeLink).toHaveTextContent(Links.HOME);
    expect(locationLink).toHaveTextContent(Links.LOCATION);
    expect(searchLink).toHaveTextContent(Links.SEARCH);
  });

  it("links should have attrgibute href", () => {
    const { homeLink, locationLink, searchLink, container } = setupNav();

    expect(homeLink).toHaveAttribute("href", "/");

    expect(locationLink).toHaveAttribute("href", formattedLink(Links.LOCATION));
    expect(searchLink).toHaveAttribute("href", formattedLink(Links.SEARCH));
    expect(container).toMatchSnapshot();
  });

  describe("routes changing", () => {
    afterEach(() => {
      cleanup();
    });

    it("should change the route path to '/locations", () => {
      render(<DashboardLayout />, {
        wrapper: MemoryRouterProvider,
      });
      fireEvent.click(screen.getByTestId(Links.LOCATION));

      expect(mockRouter.asPath).toBe(formattedLink(Links.LOCATION));
    });
    it("should change the route path to '/search", () => {
      render(<DashboardLayout />, {
        wrapper: MemoryRouterProvider,
      });
      const searchLink = screen.getByTestId(Links.SEARCH);
      fireEvent.click(searchLink);

      expect(mockRouter.asPath).toBe(formattedLink(Links.SEARCH));
    });
  });
});

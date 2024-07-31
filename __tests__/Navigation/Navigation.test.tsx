import { cleanup } from "@testing-library/react";
import { Links } from "./constants";
import { setupNav } from "./helpers";

describe("Navigation", () => {
  afterEach(() => {
    cleanup();
  });
  it("renders a heading", () => {
    const { heading } = setupNav();
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Rick and Morty");
  });
  it("a heading should have proper classes", () => {
    const { heading, container } = setupNav();
    expect(heading).toHaveClass("header__title shadow-table");
    expect(container).toMatchSnapshot();
  });
  it("nav has 3 child", () => {
    const { nav, container } = setupNav();
    expect(nav).toBeInTheDocument();
    expect(nav.children).toHaveLength(3);
    expect(container).toMatchSnapshot();
  });
  it("links should have proper text", () => {
    const { nav } = setupNav();
    const homeLink = nav.children[0];
    const locationLink = nav.children[1];
    const searchLink = nav.children[2];
    expect(homeLink).toHaveTextContent(Links.HOME);
    expect(locationLink).toHaveTextContent(Links.LOCATION);
    expect(searchLink).toHaveTextContent(Links.SEARCH);
  });
  it("links should have attrgibute href", () => {
    const { nav, container } = setupNav();
    const homeLink = nav.children[0];
    const locationLink = nav.children[1];
    const searchLink = nav.children[2];
    expect(homeLink).toHaveAttribute("href", "/");

    expect(locationLink).toHaveAttribute(
      "href",
      `/${Links.LOCATION.toLowerCase()}`
    );
    expect(searchLink).toHaveAttribute(
      "href",
      `/${Links.SEARCH.toLowerCase()}`
    );
    expect(container).toMatchSnapshot();
  });
});

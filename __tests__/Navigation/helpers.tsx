import { Links, NAV_TEST_ID } from "./constants";
import Navigation from "@/app/dashboard/Navigation";
import { render, screen } from "@testing-library/react";

export const setupNav = () => {
  const { container } = render(<Navigation />);
  const heading = screen.getByRole("heading", { level: 1 });
  const nav = screen.getByTestId(NAV_TEST_ID);

  const homeLink = screen.getByTestId(Links.HOME);
  const locationLink = screen.getByTestId(Links.LOCATION);
  const searchLink = screen.getByTestId(Links.SEARCH);

  return { container, heading, nav, homeLink, locationLink, searchLink };
};

export const formattedLink = (str: string) => `/${str.toLowerCase()}`;

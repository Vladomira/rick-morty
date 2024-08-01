import DashboardLayout from "@/app/dashboard/DashboardLayout";
import { render, screen } from "@testing-library/react";
import { NAV_TEST_ID } from "./constants";

export const setupNav = () => {
  const { container } = render(<DashboardLayout />);
  const heading = screen.getByRole("heading", { level: 1 });
  const nav = screen.getByTestId(NAV_TEST_ID);

  return { container, heading, nav };
};

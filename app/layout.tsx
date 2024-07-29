import DashboardLayout from "./dashboard/DashboardLayout";
import { Children } from "../src/@types/components";

import "../styles/globals.css";
import { ApolloWrapper } from "@/src/service/apollo-provider";
import Footer from "@/src/components/Footer";
import { ErrorBoundary } from "react-error-boundary";
import Error from "./dashboard/error";

export const metadata = {
  title: "Rick and Morty",
  description: "App for people who love cartoons",
};

export default function RootLayout({ children }: Children) {
  return (
    <html lang="en">
      <ApolloWrapper>
        <body>
          <main className="w-screen h-full sm:min-w-min  md:min-w-min lg:min-w-min">
            <DashboardLayout />
            <ErrorBoundary FallbackComponent={Error}>{children}</ErrorBoundary>
            <Footer />
          </main>
        </body>
      </ApolloWrapper>
    </html>
  );
}

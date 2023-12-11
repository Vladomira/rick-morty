import DashboardLayout from "./dashboard/DashboardLayout";
import { Children } from "../src/types/common";

import "../styles/globals.css";
import { ApolloWrapper } from "@/src/service/apollo-provider";

export const metadata = {
   title: "Rick and Morty",
   description: "App for people who love cartoons",
};

export default function RootLayout({ children }: Children) {
   return (
      <html lang="en">
         <ApolloWrapper>
            <body>
               <main className="w-screen sm:min-w-min  md:min-w-min lg:min-w-min">
                  <DashboardLayout />
                  {children}
               </main>
            </body>
         </ApolloWrapper>
      </html>
   );
}

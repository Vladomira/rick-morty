import Head from "next/head";
import React, { ReactNode } from "react";

type Title = {
   title: string;
   children: ReactNode;
};

export default function MainContainer({ title, children }: Title) {
   return (
      <>
         <Head>
            {/* change Head 
             You're using `next/head` inside the `app` directory, please migrate to the Metadata API*/}
            <title>{title}</title>
         </Head>
         <>{children}</>
      </>
   );
}

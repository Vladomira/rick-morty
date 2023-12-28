import React from "react";
import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "@/src/constants/social-links";

function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0  bg-black pb-4 z-10">
      <div className="w-[100%] h-[1px] bg-primaryYellow" />
      <div className="flex justify-center pt-5 px-[30px] m-auto">
        <ul className="flex  ">
          {socialLinks.map(({ name, link }) => (
            <li
              key={name}
              className="text-primaryYellow mb-1 last:mb-0 mr-4 last:mr-0"
            >
              <Link href={link} className="flex">
                <Image
                  src={`/assets/social/${name.toLowerCase()}.svg`}
                  alt={"github"}
                  width={20}
                  height={20}
                  className="mr-1"
                />
                {name}
              </Link>
            </li>
          ))}{" "}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;

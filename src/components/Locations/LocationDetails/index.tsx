"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { FullLocationData, LocationdetailsProps } from "@/src/types/Locations";
import { location } from "@/src/service/queries.graphql";
import LocationDetailsItem from "./LocationDetailsItem";
import BackgroundPortal from "./Portal";
import TitleBox from "./TitleBox";
import CloseButton from "./CloseButton";

const toggleButtonImages = {
  opened: "/assets/tech/opened-eyes.jpg",
  closed: "/assets/tech/closed-eyes1.jpg",
};
export function LocationDetails({
  setIsOpen,
  locationId,
}: LocationdetailsProps) {
  const { data }: FullLocationData = useSuspenseQuery(location, {
    variables: { id: locationId },
  });
  const [closeImg, setCloseImg] = useState(toggleButtonImages.opened);

  return (
    <motion.div
      className={"backdrop"}
      initial={{ y: -300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -300, opacity: 0 }}
      transition={{ ease: "linear", duration: 2, y: { duration: 0.9 } }}
    >
      <div className={"modal"}>
        <div className="content-outer-box">
          <BackgroundPortal />
          <CloseButton
            setCloseImg={setCloseImg}
            closeImg={closeImg}
            setIsOpen={setIsOpen}
            toggleButtonImages={toggleButtonImages}
          />

          <TitleBox
            type={data.location.type}
            name={data.location.name}
            dimension={data.location.dimension}
          />
          <div className="list-wrapper ">
            <div className=" residents__list">
              {data.location?.residents?.length > 0 &&
                data.location?.residents?.map((resident) => {
                  return (
                    <LocationDetailsItem
                      resident={resident}
                      key={resident.id}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

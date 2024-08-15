"use client";

import React, { useState } from "react";

import CloseButton from "./CloseButton";
import LocationDetailsItem from "./LocationDetailsItem";
import TitleBox from "./TitleBox";
import { getLocationQuery } from "@/src/service/queries/queries.graphql";
import { LocationData, LocationdetailsProps } from "@/src/types/Locations";
import { useSuspenseQuery } from "@apollo/client";
import { motion } from "framer-motion";

const toggleButtonImages = {
  opened: "/assets/tech/green.jpeg",
  closed: "/assets/tech/red.jpeg",
};
export function LocationDetails({
  setIsOpen,
  locationId,
}: LocationdetailsProps) {
  const { data }: LocationData = useSuspenseQuery(getLocationQuery, {
    variables: { id: locationId },
  });
  const [closeImg, setCloseImg] = useState(toggleButtonImages.opened);

  return (
    <motion.div
      className={`backdrop`}
      initial={{ y: -300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -300, opacity: 0 }}
      transition={{ ease: "linear", duration: 2, y: { duration: 2.5 } }}
    >
      <div className={"modal "}>
        <div className="content-outer-box ">
          <div className="bg-portal" />
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
            residentsQuantity={data.location?.residents?.length}
          />
          <div className="list-wrapper ">
            {data.location?.residents?.length > 0 ? (
              <ul className=" residents__list">
                {data.location?.residents?.map((resident) => (
                  <LocationDetailsItem resident={resident} key={resident.id} />
                ))}
              </ul>
            ) : (
              <p className="font-bold text-2xl drop-shadow-nav text-center ">
                No residents
              </p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

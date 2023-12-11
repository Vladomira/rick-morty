"use client"
import React, { useState } from "react"

import LocationList from "./components/LocationList"
import {
  CharactersStatistics,
  LocationForStatistics,
} from "../../types/CharactersData"
import { sortLocations } from "../../helpers/sort"
import Table from "./components/Table"

export default function LocationsTable({
  items,
}: {
  items: CharactersStatistics[]
}) {
  const locationCount = items.reduce(
    (acc: { [key: string]: number }, { location }) => {
      const { name } = location

      if (acc[name] === undefined) {
        acc[name] = 1
      } else {
        acc[name] += 1
      }

      return acc
    },
    {}
  )
  const locationInfo: LocationForStatistics[] = Object.keys(locationCount).map(
    (name) => {
      return {
        name: name,
        count: locationCount[name],
        id: name,
      }
    }
  )
  const [locationsInfo, setLocationsInfo] =
    useState<LocationForStatistics[]>(locationInfo)

  const handleChange = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const { name } = e.currentTarget
    switch (name) {
      case "rising":
        setLocationsInfo((prev) => sortLocations(prev, "asc"))
        break

      case "descending":
        setLocationsInfo((prev) => sortLocations(prev, "desc"))

        break
    }
  }

  return (
    <Table
      nameTitle="Locations"
      numberTitle="Number of characters"
      handleChange={handleChange}
      // children={<LocationList dataArr={locationsInfo} />}
    >
      <LocationList dataArr={locationsInfo} />
    </Table>
  )
}

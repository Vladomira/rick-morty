"use client";
import { Suspense } from "react";
import Fallback from "@/src/components/Fallback";
import { SearchPanel } from "@/src/components/Search";

export default function Search() {
  return (
    <Suspense fallback={<Fallback />}>
      <section
        className="statistics__section "
        style={{ minHeight: "calc(100vh - 53px)" }}
      >
        <SearchPanel />
      </section>
    </Suspense>
  );
}

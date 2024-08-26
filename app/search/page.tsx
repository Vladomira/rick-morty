import { Suspense } from "react";

import Fallback from "@/src/components/Fallback";
import { SearchPanel } from "@/src/components/Search";

async function Search() {
  return (
    <Suspense fallback={<Fallback />}>
      <section className="search__section bg-image-position">
        <SearchPanel />
      </section>
    </Suspense>
  );
}
export default Search;

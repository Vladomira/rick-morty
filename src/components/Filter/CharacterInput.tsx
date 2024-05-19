import { usePathname, useRouter, useSearchParams } from "next/navigation";

function CharacterInput({
  value,
  setValue,
}: {
  value: string;
  setValue: (prop: string) => void;
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch() {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("query", value);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
    setValue("");
  }

  const onKeyDownEvent = (e: { key: string }) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="input__wrapper mx-auto ">
      <input
        className="input relative"
        type="text"
        value={value}
        placeholder="Rick"
        onChange={(e: { target: { value: string } }) =>
          setValue(e.target.value)
        }
        onKeyDown={onKeyDownEvent}
      />
      <button className="input__button" onClick={handleSearch}>
        Show
      </button>
    </div>
  );
}

export default CharacterInput;

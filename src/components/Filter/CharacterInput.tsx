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

  function handleSearch(value: string) {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("query", value);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
    setValue("");
  }

  return (
    <div className="input__wrapper mx-auto ">
      <input
        className="input relative"
        type="text"
        value={value}
        placeholder="Rick"
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="input__button" onClick={() => handleSearch(value)}>
        Show
      </button>
    </div>
  );
}

export default CharacterInput;

"use client";
import { useRouter } from "next/navigation";

function CharacterLocationButton({ id }: { id: string }) {
  const router = useRouter();

  return (
    <button
      type="button"
      className="character__btn bg-primaryYellow mr-2 "
      onClick={() => {
        id && localStorage.setItem("id", id);
        router.push("/locations");
      }}
    >
      Open location
    </button>
  );
}

export default CharacterLocationButton;

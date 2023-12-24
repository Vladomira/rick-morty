"use client";
import { useRouter } from "next/navigation";

function CharacterButton({ id }: { id: string }) {
  const router = useRouter();
  return (
    <button
      type="button"
      className="character__btn bg-primaryYellow mr-2"
      onClick={() => {
        localStorage.setItem("id", id);
        router.push("/locations");
      }}
    >
      Open location
    </button>
  );
}

export default CharacterButton;

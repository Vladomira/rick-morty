import { CloseBtnProps } from "@/src/@types/components";
import Image from "next/image";

function CloseButton({
  setCloseImg,
  closeImg,
  setIsOpen,
  toggleButtonImages,
}: CloseBtnProps) {
  return (
    <button
      type="button"
      className="absolute right-1 top-1 z-10 h-[58px] w-[59px] flex justify-end rounded-full shadow-greyShadow "
      onMouseEnter={() => setCloseImg(toggleButtonImages.closed)}
      onMouseLeave={() => setCloseImg(toggleButtonImages.opened)}
      onClick={setIsOpen}
    >
      {closeImg === toggleButtonImages.closed && (
        <p className="absolute text-green-400 drop-shadow-nav  font-bold -bottom-6 left-0">
          Close
        </p>
      )}

      <Image
        className="h-[55px] rounded-full border-2 border-black"
        src={closeImg}
        alt={"close"}
        width={55}
        height={55}
      />
    </button>
  );
}

export default CloseButton;

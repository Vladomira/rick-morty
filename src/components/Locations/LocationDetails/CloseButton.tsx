import { CloseBtnProps } from "@/src/types/components";
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
      className="close__button"
      onMouseEnter={() => setCloseImg(toggleButtonImages.closed)}
      onMouseLeave={() => setCloseImg(toggleButtonImages.opened)}
      onClick={setIsOpen}
    >
      {closeImg === toggleButtonImages.closed && (
        <p className="close__button-text">Close</p>
      )}

      <Image
        className="close__button-img"
        src={closeImg}
        alt={"close"}
        width={55}
        height={55}
      />
    </button>
  );
}

export default CloseButton;

import Image from "next/image";

const yellow = "rgb(252, 252, 6)";

export const paginationItemStyles = {
  color: yellow,
  border: `2px solid ${yellow}`,
  fontSize: "18px",

  "&.MuiPaginationItem-outlined": {
    backgroundColor: "#166534",

    "&:hover, &:focus": {
      backgroundColor: "rgba(255,24,240,1)",
      boxShadow: "0px 5px 10px 2px rgba(34, 60, 80, 1) inset",
    },
  },
  "&.Mui-selected": {
    backgroundColor: "#4ade80",
    boxShadow: "0px 5px 10px 2px rgba(34, 60, 80, 1) inset",
  },
};

export const arrows = {
  left: () => (
    <Image
      src={"/assets/tech/arrows/arrow-down.svg"}
      alt={"arrow"}
      className={"rotate-90 opacity-100"}
      width={16}
      height={16}
    />
  ),
  right: () => (
    <Image
      src={"/assets/tech/arrows/arrow-down.svg"}
      alt={"arrow"}
      className={"-rotate-90"}
      width={16}
      height={16}
    />
  ),
};

import { locationImagesArr } from "../constants/locations-imgs";

export const createBackground = (
  bgImg: string | undefined,
  windowWidth = 1920
) => {
  let img: string = "url(/assets/space/space3.webp)";

  const foundLocation = locationImagesArr(windowWidth).find(
    (location) => location.url === bgImg
  );

  if (foundLocation) {
    img = `url('/assets/locations/${bgImg}.webp')`;
  }

  return img;
};

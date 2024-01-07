import { locationImagesArr } from "../constants/locations-imgs";

export const createBackground = (
  bgImg: string | undefined,
  windowWidth = 1920
) => {
  let img: string = "url(/assets/space/space2.jpg)";

  const foundLocation = locationImagesArr(windowWidth).find(
    (location) => location.url === bgImg
  );

  if (foundLocation) {
    img = `url('/assets/locations/${bgImg}.jpg')`;
  }

  return img;
};

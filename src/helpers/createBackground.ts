import { locationImagesArr } from "../constants/locations-imgs";

export const createBackground = (bgImg: string | undefined) => {
  let img: string = "url(/assets/space/space2.jpg)";

  const foundLocation = locationImagesArr.find(
    (location) => location.url === bgImg
  );

  if (foundLocation) {
    img = `url('/assets/locations/${bgImg}.jpg')`;
  }

  return img;
};

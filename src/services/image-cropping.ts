import noImage from "../assets/no-image-placeholder.webp";

export const getCroppedImageUrl = (url: string) => {
  if (!url) return noImage;
  const divider = "media/";
  const index = url.indexOf(divider) + divider.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

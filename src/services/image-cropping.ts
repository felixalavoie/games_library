export const getCroppedImageUrl = (url: string) => {
  const divider = "media/";
  const index = url.indexOf(divider) + divider.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

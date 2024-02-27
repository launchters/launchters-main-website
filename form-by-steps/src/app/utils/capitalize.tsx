export const capitalizeFirstLetter = (str: string) => {
  let prev = str.trim().toLowerCase();
  return prev.charAt(0).toUpperCase() + prev.slice(1);
};

export const capitalizeEachWord = (str?: string) =>
  (str || "")
    .split(" ")
    .map((word) => capitalizeFirstLetter(word.trim().toLowerCase()))
    .join(" ");

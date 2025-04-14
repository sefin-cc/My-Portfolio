// utils/scrollToHash.ts
export const scrollToHash = (hash: string) => {
  if (!hash) return;
  const element = document.querySelector(hash);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

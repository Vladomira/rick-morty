export const isButtonDisabled = (
  type: string,
  currentPage: number,
  totalPageCount: number
) => {
  return (
    (type === "previous" && currentPage === 1) ||
    (type === "next" && currentPage === totalPageCount)
  );
};

export const getButtonStyles = (
  type: string,
  currentPage: number,
  totalPageCount: number
) => {
  const disabled = isButtonDisabled(type, currentPage, totalPageCount);
  return {
    opacity: disabled ? 0.5 : 1,
    cursor: disabled ? "not-allowed" : "pointer",
  };
};

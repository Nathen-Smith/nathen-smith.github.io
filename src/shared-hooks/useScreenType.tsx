import { useMediaQuery } from "react-responsive";

const useScreenType = () => {
  const is3Cols = useMediaQuery({ minWidth: 1536 });
  const is2Cols = useMediaQuery({ minWidth: 1280 });
  const is1Cols = useMediaQuery({ minWidth: 800 });

  if (is3Cols) {
    return "3-cols";
  }
  if (is2Cols) {
    return "2-cols";
  }
  if (is1Cols) {
    return "1-cols";
  }
  return "mobile";
};

export default useScreenType;

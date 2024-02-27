import { useState } from "react";
import { $TSFixMeLater } from "../models";
import { useEffectOnce } from "./useEffectOnce";

function useResize() {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = (_e: $TSFixMeLater) => {
    setScreenSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffectOnce(() => {
    window.addEventListener("resize", handleResize);

    // Clean Up listeners
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return screenSize;
}

export default useResize;

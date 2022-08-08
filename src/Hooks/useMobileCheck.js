import React, { useState, useEffect } from "react";

export default function useMobileCheck() {
  const [isMobile, setIsMobile] = useState(false);
  const checkResize = () => {
    setIsMobile(() => {
      return window?.innerWidth < 600;
    });
  };

  useEffect(() => {
    window.addEventListener("resize", checkResize);

    return () => () => {
      window.removeEventListener("resize", checkResize);
    };
  });

  useEffect(() => {
    window?.innerWidth < 600
      ? setIsMobile(() => true)
      : setIsMobile(() => false);
  }, []);
  return isMobile;
}

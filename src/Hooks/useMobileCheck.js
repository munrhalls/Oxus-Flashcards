import React, { useState, useEffect } from "react";

export default function useMobileCheck() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window?.innerWidth < 600
      ? setIsMobile(() => true)
      : setIsMobile(() => false);
  }, []);
  return isMobile;
}

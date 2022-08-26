import React from "react";

export default function Loader({ children, active }) {
  return (
    <>{active ? <div className="Loader">Loading...</div> : <>{children} </>}</>
  );
}

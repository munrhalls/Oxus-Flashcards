import React from "react";

export default function Loader({ children, active }) {
  return (
    <>
      {active ? (
        <div className="Loader">
          <div className="Loader__symbol --rotating"></div>
          <h1 className="Loader__text">Loading...</h1>
        </div>
      ) : (
        <>{children} </>
      )}
    </>
  );
}

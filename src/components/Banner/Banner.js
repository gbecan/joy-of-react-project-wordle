import React from "react";

function Banner({ success, children }) {
  return (
    <div className={success ? "happy banner" : "sad banner"}>{children}</div>
  );
}

export default Banner;

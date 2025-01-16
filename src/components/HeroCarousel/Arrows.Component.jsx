import React from "react";

export function NextArrow(props) {
  return (
    <>
      <div
        className={ props.className + ` ${props.isDark? "white_arrow": "dark_arrow"}` }
        style={{ ...props.style }}
        onClick={ props.onClick }
      ></div>
    </>
  );
}

export function PrevArrow(props) {
  return (
    <>
      <div
        className={ props.className  + ` ${props.isDark? "white_arrow": "dark_arrow"}` }
        style={{ ...props.style }}
        onClick={ props.onClick }
      ></div>
    </>
  );
}

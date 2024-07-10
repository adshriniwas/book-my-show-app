import React from "react";
import Navbar from "../components/Navbar/Navbar.Component";

const DefaultLayoutHoc =
  (Component) =>
  ({ ...props }) => {
    return (
      <>
        <Navbar />
        <Component {...props} />
        <div>footer</div>
      </>
    );
  };

export default DefaultLayoutHoc;

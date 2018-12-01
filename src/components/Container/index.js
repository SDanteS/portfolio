import React from "react";
const Container = ({ children }) => (
  <div
    className="container"
    style={{
      maxWidth: 1280,
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around"
    }}
  >
    {children}
  </div>
);

export default Container;

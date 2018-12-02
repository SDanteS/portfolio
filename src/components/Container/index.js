import React from "react";
const Container = ({ children }) => (
  <div
    className="container"
    style={{
      maxWidth: 1280,
      height: "100vh",
      flexDirection: "column"
    }}
  >
    {children}
  </div>
);

export default Container;

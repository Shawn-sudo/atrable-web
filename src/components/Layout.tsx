import React from "react";
import AppBar from "./AppBar";
import Footer from "./Footer";

type Props = {
  children?: React.ReactNode;
};

function Layout(props: Props) {
  return (
    <>
      <AppBar />
      <div
        style={{
          minHeight: "100vh",
          marginTop: 55,
        }}
      >
        {props.children}
      </div>
      <Footer />
    </>
  );
}

export default Layout;

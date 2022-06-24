import React from "react";
import AppBar from "./AppBar";
import Footer from "./Footer";

//styles
const pageStyles = {
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',sans-serif",
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
};

type Props = {
  children?: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div style={pageStyles}>
      <AppBar />
      <div
        style={{
          minHeight: "100vh",
          marginTop: 55,
        }}
      >
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;

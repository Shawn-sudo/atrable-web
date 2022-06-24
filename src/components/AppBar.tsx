import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const AppBar = () => {
  return (
    <div
      style={{
        backgroundColor: "rgba(248, 248, 255, 0.72)",
        height: 55,
        width: "100%",
        display: "flex",
        position: "fixed",
        top: 0,
        backdropFilter: "blur(20px) saturate(180%)",
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
        alignItems: "center",
        justifyContent: "space-between",
        zIndex: 10,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Link to="/">
          <StaticImage
            src="../images/appIconRounded.png"
            alt="logo"
            height={40}
            style={{ margin: 5 }}
          />
        </Link>
      </div>
      <div
        style={{
          height: 55,
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        {/* <Link
          to="/school"
          style={
            pathName.startsWith("/school") ? selectedActionButtonStyle : null
          }
          className="navButton"
        >
          <div style={{ marginTop: 10 }}>School</div>
        </Link>
        <Link
          to="/app"
          style={pathName.startsWith("/app") ? selectedActionButtonStyle : null}
          className="navButton"
        >
          <div style={{ marginTop: 10 }}>App</div>
        </Link>
        <Link
          to="/music"
          style={
            pathName.startsWith("/music") ? selectedActionButtonStyle : null
          }
          className="navButton"
        >
          <div style={{ marginTop: 10 }}>Music</div>
        </Link>
        <Link
          to="/logs"
          style={
            pathName.startsWith("/logs") ? selectedActionButtonStyle : null
          }
          className="navButton"
        >
          <div style={{ marginTop: 10 }}>Logs</div>
        </Link> */}
      </div>
    </div>
  );
};

export default AppBar;

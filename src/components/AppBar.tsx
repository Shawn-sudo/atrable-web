import { Link } from "gatsby";
import React from "react";
import logo from "../assets/icon2_rounded.svg";

function AppBar() {
  return (
    <div className="app-bar">
      <Link
        to="/"
        style={{
          color: "black",
          textDecoration: "none",
          borderRadius: 15,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <img src={logo} alt="logo" height={40} style={{ margin: 5 }} />
          <h2 style={{ margin: 0, alignSelf: "center" }}>Atrable</h2>
        </div>
      </Link>
      <div
        style={{
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
}

export default AppBar;

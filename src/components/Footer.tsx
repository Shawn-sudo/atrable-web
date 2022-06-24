import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import "../App.css";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "var(--primary-color-darker)",
        color: "white",
      }}
    >
      <div className="horizontal-margin">
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          <div
            style={{
              display: "flex",
            }}
          >
            <StaticImage
              src="../images/appIconRounded.png"
              alt="logo"
              height={100}
              width={100}
            />
            <div style={{ margin: 15 }}>
              <h1
                style={{
                  alignSelf: "center",
                  margin: 0,
                }}
              >
                Atrable
              </h1>
              <p
                style={{
                  margin: 0,
                  marginLeft: 2.5,
                  color: "var(--hint-color)",
                }}
              >
                Audio Required!
              </p>
            </div>
          </div>
        </Link>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <Link
            to="https://seihyun.atrable.com/logs/atrable"
            style={{ color: "white", textDecoration: "none" }}
          >
            <h3>Developing Story</h3>
          </Link>
          <Link
            to="/privacy_policy"
            style={{ color: "white", textDecoration: "none" }}
          >
            <h3>Privacy Policy</h3>
          </Link>
          <Link
            to="/terms_of_use"
            style={{ color: "white", textDecoration: "none" }}
          >
            <h3>Terms of Use</h3>
          </Link>
        </div>

        <p>
          todo: Download on the App Store: if the use's device is either iOS or
          iPadOS, open the link. Else, show a qr code that lead to the link.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

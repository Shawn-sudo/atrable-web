import { Link } from "gatsby";
import React from "react";
import logo from "../assets/icon2_rounded.svg";
import downloadOnTheAppStore from "../assets/external/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg";
import downloadOnGooglePlay from "../assets/external/google-play-badge.png";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "var(--primary-color-darker)",
        color: "white",
      }}
    >
      <div className="horizontal-margin" style={{ padding: 20 }}>
        <div
          style={{
            display: "flex",
          }}
        >
          <Link
            to="/"
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            <div
              style={{
                display: "flex",
              }}
            >
              <img src={logo} alt="logo" height={100} width={100} />
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
                    color: "var(--hint-color-light)",
                  }}
                >
                  Vlog & Chat
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <a
            href="https://seihyun.atrable.com/logs/atrable"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white", textDecoration: "none" }}
          >
            <h3>Developing Story</h3>
          </a>
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
        <div style={{ display: "flex", justifyContent: "end" }}>
          <a href={"https://apps.apple.com/us/app/atrable/id1630551248"}>
            <img
              src={downloadOnTheAppStore}
              alt="Download on Apple App Store"
              height={50}
              style={{ margin: 10 }}
            />
          </a>
          <a href={"https://play.google.com/apps/testing/com.atrable.atrable"}>
            <img
              src={downloadOnGooglePlay}
              alt="Get it on Google Play (Beta)"
              height={70}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Link } from "gatsby";
import React from "react";
import { UAParser } from "ua-parser-js";
import "../App.css";

// UAParser.DEVICE;
const getOS = new UAParser().getOS();

const Footer = () => {
  console.log(getOS);
  return (
    <footer
      style={{
        backgroundColor: "var(--primary-color-darker)",
        color: "white",
      }}
    >
      <div className="horizontal-margin">
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
              <img
                src="/assets/appIconRounded.png"
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
        </div>
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
        <div style={{ display: "flex", justifyContent: "end" }}>
          <a
            href={"https://apps.apple.com/us/app/atrable/id1630551248"}
            onClick={() => {
              if (getOS.name != "iOS") {
                console.log("todo: show the qr code");
              }
            }}
          >
            <img
              src="/assets/external/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg"
              alt="Download on the App Store"
              height={50}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

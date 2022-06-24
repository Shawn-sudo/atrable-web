import React from "react";
import Layout from "../../components/Layout";
import "./index.css";

const GetAtrable = () => {
  return (
    <Layout>
      <main>
        <div className="App">
          {/* <header> */}
          <img
            src="assets/appIconRounded.png"
            className="App-logo"
            alt="logo"
            height={100}
          />
          <h2>Get Atrable</h2>
          {/* </header> */}
          <div style={{ height: 75 }}></div>
          <a
            className="button google-style-button"
            style={{ textDecoration: "none" }}
            href="https://play.google.com/store/apps/details?id=PACKAGEIDHERE"
          >
            Get on Google Play
          </a>
          <div style={{ height: 25 }}></div>
          <a
            className="button black-button"
            style={{ textDecoration: "none" }}
            href="https://apps.apple.com/us/app/atrable/id1630551248"
          >
            Get on Apple Appstore
          </a>
          <div style={{ height: 50 }}></div>
          <a
            className="link"
            style={{ fontSize: 25, fontWeight: "bold" }}
            href="https://seihyun.atrable.com/logs/atrable"
            target="_blank"
            rel="noopener noreferrer"
          >
            About Atrable
          </a>
        </div>
      </main>
    </Layout>
  );
};

export default GetAtrable;

import * as React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";

const appScreenshot_feed1 = "../images/app_screenshots/IMG_7623.png";
const appScreenshot_recorder =
  "../images/app_screenshots/Simulator Screen Shot - iPhone 13 Pro Max - 2022-07-20 at 21.39.56.png";
const appScreenshot_myProfile1 = "../images/app_screenshots/IMG_7624.png";
const appScreenshot_myProfile2 = "../images/app_screenshots/IMG_7625.png";
const appScreenshot_friendsProfile = "../images/app_screenshots/IMG_7626.png";

const staticImageStyle = {
  margin: "5vmin",
  maxWidth: "35vmin",
  overflow: "visible",
};
const staticImageImgStyle = {
  margin: 0,
  borderRadius: 20,
  boxShadow: "var(--shadow-big)",
};

function IndexPage() {
  return (
    <Layout>
      <title>Atrable: Audio Diaries</title>
      {/* or Travel stories with audio */}
      {/* or Stories of traveling through life */}
      <main className="horizontal-margin">
        {/* Audio based social media, Atrable */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <StaticImage
            src={appScreenshot_feed1}
            alt="Atrable is based on audio"
            style={{ ...staticImageStyle, alignItems: "center" }}
            imgStyle={{
              ...staticImageImgStyle,
              alignItems: "center",
            }}
          />
          <div style={{ margin: "5vmin" }}>
            <h1 style={{ textAlign: "center" }}>
              Audio based social media, Atrable
            </h1>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <a
                href="https://get.atrable.com"
                className="Button colored-background"
                style={{ margin: "3vmin" }}
              >
                Get Atrable
              </a>
              <p
                style={{
                  color: "var(--hint-color-dark)",
                  marginTop: "auto",
                  marginBottom: "auto",
                }}
              >
                Learn More ↓
              </p>
            </div>
          </div>
        </div>

        {/* Audio: candid */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <StaticImage
            src={appScreenshot_recorder}
            alt="My Profile"
            style={staticImageStyle}
            imgStyle={staticImageImgStyle}
          />

          <div style={{ margin: "5vmin" }}>
            <h1 style={{ textAlign: "center" }}>
              Record your stories with audio
            </h1>
            <p style={{ textAlign: "start", maxWidth: 500 }}>
              Just like a diary, record your experiences with audio.
            </p>
            <p style={{ textAlign: "start", maxWidth: 500 }}>
              Unlike photos, no visible thing is shown. Don't care about
              superficial stuff and focus on what truly they are.
            </p>
          </div>
        </div>

        {/* Selectively chat about the diary */}

        {/* Audio: vibes */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
            }}
          >
            <StaticImage
              src={appScreenshot_myProfile1}
              alt="My Profile"
              style={{
                ...staticImageStyle,
                marginTop: 35,
                marginBottom: 65,
                marginLeft: 45,
                marginRight: 0,
              }}
              imgStyle={staticImageImgStyle}
            />
            <StaticImage
              src={appScreenshot_myProfile2}
              alt="My past posts"
              style={{
                ...staticImageStyle,
                marginTop: 35,
                marginBottom: 65,
                marginLeft: 0,
                marginRight: 65,
              }}
              imgStyle={staticImageImgStyle}
            />
            {/* TODO */}
          </div>
          <div style={{ margin: "5vmin" }}>
            <h1 style={{ textAlign: "center" }}>Feel the vibes with audio</h1>
            <p style={{ textAlign: "start", maxWidth: 500 }}>
              Audio records vibe of the moment. Sounds of everything{" "}
              {/* (bell
              ringing, people chattering, windows opening, and keyboards typing) */}
              form a beautiful vibe. Feel those while listening to your and
              others' posts.
            </p>
          </div>
        </div>

        {/* Meet your friends through audio */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              margin: "5vmin",
            }}
          >
            <StaticImage
              src={appScreenshot_friendsProfile}
              alt="My past posts"
              style={staticImageStyle}
              imgStyle={staticImageImgStyle}
            />
          </div>
          <div style={{ margin: "5vmin" }}>
            <h1 style={{ textAlign: "center" }}>
              Meet your friends through audio
            </h1>
            <p style={{ textAlign: "start", maxWidth: 500 }}>
              On traditional photo based social media (Instagram, Snapchat,
              BeReal, vsco, ...), my friends only share their cool photos. With
              those photos, I couldn't really know who they are. Using audio, we
              get to know each other better.
            </p>
          </div>
        </div>
        <div style={{}}>
          <div style={{ margin: "5vmin" }}>
            <h1 style={{ textAlign: "center" }}>People love Atrable 🤩</h1>
            <p style={{ textAlign: "center" }}>I mean, I hope so</p>
          </div>
        </div>

        {/* More: Developing Story */}
        <a
          href="https://seihyun.atrable.com/logs/atrable"
          target="_blank"
          rel="noopener noreferrer"
          className="Button notcolored-background"
          style={{
            textDecoration: "none",
            display: "flex",
            flexWrap: "wrap",
            width: "fit-content",
          }}
        >
          <strong>Developing Story</strong>
          <div
            style={{
              marginLeft: 15,
              marginRight: 15,
            }}
          >
            <strong>→</strong>
          </div>
        </a>

        {/* More: Atrable Developer */}
        <a
          href="https://seihyun.atrable.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="Button notcolored-background"
          style={{
            textDecoration: "none",
            display: "flex",
            justifyContent: "space-evenly",
            width: "fit-content",
          }}
        >
          <strong>More about the Developer</strong>
          <div
            style={{
              marginLeft: 15,
              marginRight: 15,
            }}
          >
            <strong>→</strong>
          </div>
        </a>
      </main>
    </Layout>
  );
}

export default IndexPage;

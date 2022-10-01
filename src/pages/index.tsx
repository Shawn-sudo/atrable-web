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
  maxWidth: "32vmin",
  overflow: "visible",
};
const staticImageImgStyle = {
  margin: 0,
  borderRadius: 20,
  boxShadow: "var(--shadow-big)",
};

let currentPage: string;

function IndexPage() {
  React.useEffect(() => {
    const descriptionsScrollView =
      document.getElementById("index-descriptions")!;

    function playAsScroll() {
      let middleLineOffset = descriptionsScrollView.clientHeight / 2;
      let nextOne_offsetToRevealTop: number = 0;

      const children = descriptionsScrollView?.children;

      for (var i = 0; i < children.length; i++) {
        const child = children[children.length - 1 - i];
        const offsetToRevealFully = child.getBoundingClientRect().bottom;

        if (
          offsetToRevealFully < middleLineOffset &&
          middleLineOffset < nextOne_offsetToRevealTop
        ) {
          if (currentPage != child.id) {
            currentPage = child.id;
            console.log("page changed: " + currentPage);
          }
          break;
        }

        nextOne_offsetToRevealTop = offsetToRevealFully;
      }
    }

    document.addEventListener("scroll", playAsScroll);
    return () => {
      document.addEventListener("scroll", playAsScroll);
    };
  });

  return (
    <Layout>
      <title>Atrable: Audio Diaries</title>
      <main className="horizontal-margin">
        <div id="index-descriptions">
          {/* Audio based social media, Atrable */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
            id="description-0"
          >
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

          {/* Record your stories with audio */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
            id="description-1"
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
              {/* Hi there, this page contains audio. So yea just like a diary, record your experience with audio */}
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
            id="description-2"
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
            </div>
            <div style={{ margin: "5vmin" }}>
              <h1 style={{ textAlign: "center" }}>Feel the vibes with audio</h1>
              <p style={{ textAlign: "start", maxWidth: 500 }}>
                Audio records the moment vividly.
                {/* Audio records the moment vividly. Sounds of everything, so if I just be quiet, ..., 
              you can hear of myself walking, and some cars are passing by. With audio like this, you can imagine 
              what is going on, as if you are reading a book. 
              */}
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
            id="description-3"
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
              {/* This is the social part of Atrable. 
            On the picture next to me, there's a profile of Not_David. 
            Not_David is my friend, who keeps his journal even though no one made him to do.
            Atrable is kinda inspired by that, although the project itself started like 2 years ago.
            Yea not for the app itself, but for wordings, yea it was definitely inspired by him. 
            I mean I know that it feels really cool to keep a diary, but it's kinda annoying to do so.
            With Atrable, you can keep track on your journal only by recording what's in your mind.
            */}
            </div>
          </div>

          <div style={{}} id="description-4">
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
        </div>
      </main>
    </Layout>
  );
}

export default IndexPage;

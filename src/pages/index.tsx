import * as React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";

const appScreenshot_home =
  "../images/app_screenshots/Simulator Screen Shot - iPhone 11 Pro Max - 2022-10-08 at 21.39.56.png";
const appScreenshot_recorder =
  "../images/app_screenshots/Simulator Screen Shot - iPhone 13 Pro Max - 2022-07-20 at 21.39.56.png";
const appScreenshot_directMessageChatroom =
  "../images/app_screenshots/Simulator Screen Shot - iPhone 11 Pro Max - 2022-10-08 at 22.59.04.png";
const appScreenshot_postSharingPage =
  "../images/app_screenshots/Simulator Screen Shot - iPhone 11 Pro Max - 2022-10-08 at 23.19.04.png";
const appScreenshot_myProfile = "../images/app_screenshots/IMG_7625.png";

const appScreenshot_chat = "../images/app_screenshots/IMG_8882.PNG";

const staticImageStyle: React.CSSProperties = {
  margin: "5vmin",
  maxWidth: "32vmin",
  overflow: "visible",
};
const staticImageImgStyle: React.CSSProperties = {
  margin: 0,
  borderRadius: "2.5vmin",
  boxShadow: "var(--shadow-big)",
};

export default function IndexPage() {
  return (
    <Layout>
      <title>Atrable: Vlog & Chat</title>
      <main>
        {/* Audio based social media, Atrable */}
        <div style={{ height: 50 }} />
        <div
          style={{
            margin: "5vmin",
            textAlign: "center",
          }}
        >
          {/* 네 이야기를 기록해봐 */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              margin: 20,
            }}
          >
            <h1 style={{ margin: 0, marginLeft: 5, marginRight: 5 }}>
              It's your story.
            </h1>
            <h1 style={{ margin: 0, marginLeft: 5, marginRight: 5 }}>
              Record it.
            </h1>
          </div>

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
              style={{ margin: 30 }}
            >
              Get Atrable
            </a>
            <p
              style={{
                color: "var(--hint-color)",
                marginRight: 30,
                marginTop: "auto",
                marginBottom: "auto",
              }}
            >
              Learn More ↓
            </p>
          </div>
        </div>

        <div
          className="horizontal-margin"
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <div style={{ width: "100vw", maxWidth: 1500 }}>
            <div
              style={{
                margin: "auto",
                overflowX: "scroll",
                overscrollBehaviorX: "contain",
                display: "flex",
              }}
            >
              <div>
                <h1
                  style={{
                    fontSize: 100,
                    marginTop: 100,
                    marginLeft: "10vw",
                    marginRight: "10vw",
                    marginBottom: 0,
                    color: "var(--secondary-color)",
                  }}
                >
                  VLOG
                </h1>
                <div style={{ width: 300, marginLeft: "10vw", padding: 10 }}>
                  <h2>Your life is a travel. </h2>
                  <p>
                    Record those happy / sad / exciting / or depressing moments
                    on Atrable.
                  </p>
                </div>
              </div>
              <div>
                <div
                  style={{
                    display: "flex",
                  }}
                >
                  <VlogViewer src="https://firebasestorage.googleapis.com/v0/b/atrable-story.appspot.com/o/users%2FgEqPbl8UcWUhSexFg4G5Qmgcd4M2%2Fatrable%2Fprivate%2Fpost_imports%2F2022-09-23_19%3A17%3A41.356837.mp4?alt=media&token=afb6c7d9-a2fe-49f5-ad2c-6d6cee8f5944" />
                  <VlogViewer src="https://firebasestorage.googleapis.com/v0/b/atrable-story.appspot.com/o/users%2FgEqPbl8UcWUhSexFg4G5Qmgcd4M2%2Fatrable%2Fprivate%2Fpost_imports%2F2022-10-14_12%3A29%3A39.289197.mp4?alt=media&token=6b54ade3-53e7-4904-8d0a-10a706823e7d" />
                  <VlogViewer src="https://firebasestorage.googleapis.com/v0/b/atrable-story.appspot.com/o/users%2FgEqPbl8UcWUhSexFg4G5Qmgcd4M2%2Fatrable%2Fprivate%2Fpost_imports%2F2022-11-27_22%3A11%3A27.457471.mp4?alt=media&token=1c7017e2-3bed-4431-801e-f723db3554fb" />
                  <VlogViewer src="https://firebasestorage.googleapis.com/v0/b/atrable-story.appspot.com/o/users%2FgEqPbl8UcWUhSexFg4G5Qmgcd4M2%2Fatrable%2Fprivate%2Fpost_imports%2F2022-12-04_11%3A05%3A34.632438.mp4?alt=media&token=590030b9-97cc-4834-a8ed-fd4a82845773" />
                  <VlogViewer src="https://firebasestorage.googleapis.com/v0/b/atrable-story.appspot.com/o/users%2FgEqPbl8UcWUhSexFg4G5Qmgcd4M2%2Fatrable%2Fprivate%2Fpost_imports%2F2022-10-21_22%3A47%3A36.863227.mp4?alt=media&token=d0f87828-8502-4160-8052-d96e4884e202" />
                  <VlogViewer src="https://firebasestorage.googleapis.com/v0/b/atrable-story.appspot.com/o/users%2FgEqPbl8UcWUhSexFg4G5Qmgcd4M2%2Fatrable%2Fprivate%2Fpost_imports%2F2022-07-05_09%3A45%3A47.139718.mp4?alt=media&token=f9c07069-1a23-4d12-b6d6-2b5cc6467b0c" />
                </div>
                <p
                  style={{
                    marginLeft: 50,
                    color: "var(--hint-color)",
                    fontStyle: "italic",
                  }}
                >
                  Vlogs from{" "}
                  <a href="https://www.atrable.com/u/shawn">Shawn L</a>, who
                  made Atrable
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
          id="description-2"
        >
          <StaticImage
            src={appScreenshot_chat}
            alt="Direct Message Chatroom"
            style={staticImageStyle}
            imgStyle={staticImageImgStyle}
          />
          <div style={{ margin: "5vmin", maxWidth: 500 }}>
            <h1
              style={{
                color: "var(--primary-color)",
                fontSize: 100,
                marginBottom: 0,
                textAlign: "center",
              }}
            >
              Chat
            </h1>
            <div
              style={{
                padding: 10,
              }}
            >
              <p>Talk about the Vlogs that you recorded.</p>
            </div>
          </div>
        </div>

        <h1 style={{ margin: "auto", textAlign: "center" }}>
          Get Atrable on{" "}
          <a
            href="https://get.atrable.com"
            style={{ color: "var(--primary-color)" }}
          >
            get.atrable.com
          </a>
        </h1>

        {/* <div
          style={{
            backgroundColor: "var(--primary-color)",
          }}
        >
          <h2>New Features</h2>
        </div>

        <h2>Developing</h2>
        <p>
          We're developing these features. They are not out there yet, but
          you'll meet them soon.
        </p> */}

        {/* <main className="horizontal-margin"> */}
        <div id="index-descriptions">
          {/* New on Atrable */}
          {/* Specific visibility settings */}

          {/* More: Developing Story, Atrable Developer */}
          <a
            href="https://get.atrable.com"
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
            Get Atrable →
          </a>
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
            More about the Developer →
          </a>
        </div>
      </main>
    </Layout>
  );
}

const VlogViewer = (props: { src: string }) => {
  return (
    <div
      style={{
        marginLeft: 25,
        marginRight: 25,
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 30,
        overflow: "clip",
        backgroundColor: "black",
        isolation: "isolate", //for border radius to be applied on Safari
        flexShrink: 0,
        height: 400,
      }}
    >
      <video
        src={props.src}
        autoPlay
        muted
        loop
        playsInline
        width={300}
        style={{}}
      />
    </div>
  );
};

export const Head = () => (
  <>
    <meta name="apple-itunes-app" content="app-id=1630551248" />
    <meta
      name="description"
      content="Atrable helps you record audio diaries and chat about it with your friends."
    />
  </>
);

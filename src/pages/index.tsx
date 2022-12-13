import * as React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";

import vlog_1 from "../contents/videos/2022-09-23_19_17_41.356837.mp4";
import vlog_2 from "../contents/videos/2022-10-14_12_29_39.289197.mp4";
import vlog_3 from "../contents/videos/2022-11-27_22_11_27.457471.mp4";
import vlog_4 from "../contents/videos/2022-12-04_11_05_34.632438.mp4";
import vlog_5 from "../contents/videos/2022-07-05_09_45_47.139718.mp4";

const appScreenshot_chat = "../contents/app_screenshots/IMG_8882.PNG";

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
                  <VlogViewer src={vlog_1} />
                  <VlogViewer src={vlog_2} />
                  <VlogViewer src={vlog_3} />
                  <VlogViewer src={vlog_4} />
                  <VlogViewer src={vlog_5} />
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

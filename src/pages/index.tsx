import * as React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import PostViewer from "../components/PostViewer";

const appScreenshot_home =
  "../images/app_screenshots/Simulator Screen Shot - iPhone 11 Pro Max - 2022-10-08 at 21.39.56.png";
const appScreenshot_recorder =
  "../images/app_screenshots/Simulator Screen Shot - iPhone 13 Pro Max - 2022-07-20 at 21.39.56.png";
const appScreenshot_directMessageChatroom =
  "../images/app_screenshots/Simulator Screen Shot - iPhone 11 Pro Max - 2022-10-08 at 22.59.04.png";
const appScreenshot_postSharingPage =
  "../images/app_screenshots/Simulator Screen Shot - iPhone 11 Pro Max - 2022-10-08 at 23.19.04.png";

const staticImageStyle: React.CSSProperties = {
  margin: "5vmin",
  maxWidth: "32vmin",
  overflow: "visible",
};
const staticImageImgStyle: React.CSSProperties = {
  margin: 0,
  borderRadius: "3vmin",
  boxShadow: "var(--shadow-big)",
};

function IndexPage() {
  return (
    <Layout>
      <title>Atrable: Stories with audio</title>
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
            <div
              style={{
                margin: "5vmin",
                textAlign: "center",
                minHeight: "30vh",
              }}
            >
              <h1>
                It's your story, record it.
                {/* Record your stories */}
                {/* 네 이야기를 기록해봐 */}
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

          {/* Audio works the best */}
          {/* <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              marginBottom: 100,
            }}
            id="description-1"
          >
            <div style={{ margin: "5vmin", maxWidth: 500 }}>
              <h1 style={{ textAlign: "center" }}>Audio works the best</h1>
              <p>for recording your stories.</p>
            </div>
            <PostViewer postId="testing123" />
            <PostViewer postId="testing123" />
            <PostViewer postId="testing123" />
            <PostViewer postId="testing123" />
            <PostViewer postId="testing123" />
          </div> */}

          {/* Chat about it */}
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
                justifyContent: "space-around",
                maxWidth: 900,
                marginBottom: 100,
              }}
            >
              <StaticImage
                src={appScreenshot_home}
                alt="Home Page"
                style={{
                  ...staticImageStyle,
                  margin: "0.5vmin",
                }}
                imgStyle={staticImageImgStyle}
              />
              <StaticImage
                src={appScreenshot_recorder}
                alt="Audio / Video Recorder"
                style={{
                  ...staticImageStyle,
                  margin: "0.5vmin",
                }}
                imgStyle={staticImageImgStyle}
              />
              <StaticImage
                src={appScreenshot_postSharingPage}
                alt="Post sharing page"
                style={{
                  ...staticImageStyle,
                  margin: "0.5vmin",
                }}
                imgStyle={staticImageImgStyle}
              />
            </div>
            <div style={{ margin: "5vmin", maxWidth: 500 }}>
              <h1 style={{ textAlign: "center" }}>Record your stories</h1>
              <p>With audio, save your memories vividly.</p>
              {/* <p>Talk about the diary through direct messages.</p> */}
            </div>
          </div>

          {/* Chat about it */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
            id="description-2"
          >
            <StaticImage
              src={appScreenshot_directMessageChatroom}
              alt="Direct Message Chatroom"
              style={staticImageStyle}
              imgStyle={staticImageImgStyle}
            />
            <div style={{ margin: "5vmin", maxWidth: 500 }}>
              <h1 style={{ textAlign: "center" }}>Chat about it</h1>
              <p>Talk about it through direct messages.</p>
            </div>
          </div>

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
            Developing Story →
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

export default IndexPage;

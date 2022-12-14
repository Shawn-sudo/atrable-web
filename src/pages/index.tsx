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
          <div style={{ width: "100vw" }}>
            <div
              style={{
                margin: "auto",
                overflowX: "scroll",
                overscrollBehaviorX: "contain",
                display: "flex",
              }}
            >
              <div
                style={{
                  width: "calc(50vw - 10vw - 10vw - 700px)",
                  flexShrink: 0,
                }}
              />
              <div
                style={{
                  marginLeft: "10vw",
                  marginRight: "10vw",
                }}
              >
                <h1
                  style={{
                    fontSize: 100,
                    marginTop: 100,
                    marginBottom: 0,
                    color: "var(--secondary-color)",
                  }}
                >
                  VLOG
                </h1>
                <div style={{ width: 300, padding: 10 }}>
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
                  <a
                    href="https://www.atrable.com/u/shawn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Shawn L
                  </a>
                  , who made Atrable
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
                maxWidth: 300,
                textAlign: "center",
              }}
            >
              <p>Talk with friends about the Vlogs that you recorded.</p>
            </div>
          </div>
        </div>

        <h1 style={{ textAlign: "center", margin: 100 }}>
          Get Atrable on{" "}
          <a
            href="https://get.atrable.com"
            style={{ color: "var(--primary-color)" }}
          >
            get.atrable.com
          </a>
        </h1>

        <div
          style={{
            backgroundColor: "var(--primary-color)",
          }}
        >
          <div
            className="horizontal-margin"
            style={{ padding: 50, paddingBottom: 0 }}
          >
            <h1 style={{ color: "white" }}>Updates on Atrable</h1>
          </div>
          <div
            style={{
              width: "100vw",
            }}
          >
            <div
              style={{
                margin: "auto",
                overflowX: "scroll",
                overscrollBehaviorX: "contain",
                display: "flex",
              }}
            >
              <div style={{ width: "calc(50vw - 700px)", flexShrink: 0 }} />
              <div style={{ width: 30, flexShrink: 0 }} />
              <FeatureCard
                title="Reply to a Diary"
                subtitle="Diary + Chat (Oct 2022)"
                body={
                  <p>
                    You can reply to the uploader about their diaries. You can
                    also send your diaries to your friends.
                  </p>
                }
              />
              <FeatureCard
                title="Diary Visibility"
                subtitle="Diary (Sep 2022)"
                body={
                  <p>
                    You can choose whom to be able to view your diary (public /
                    only friends / private).
                  </p>
                }
              />
              <FeatureCard
                title="Emoji Reaction for Diary"
                subtitle="Diary (Jul 2022)"
                body={<p>You can quickly react to a diary using emojis.</p>}
              />
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "var(--primary-color)",
          }}
        >
          <div
            className="horizontal-margin"
            style={{ padding: 50, paddingBottom: 0 }}
          >
            <h1 style={{ color: "white" }}>In Development</h1>
            {/* <p style={{ color: "white" }}>
              We're developing these features. They are not out there yet, but
              you'll meet them soon.
            </p> */}
          </div>
          <div style={{ width: "100vw", margin: "auto" }}>
            <div
              style={{
                margin: "auto",
                overflowX: "scroll",
                overscrollBehaviorX: "contain",
                display: "flex",
              }}
            >
              <div style={{ width: "calc(50vw - 700px)", flexShrink: 0 }} />
              <div style={{ width: 30, flexShrink: 0 }} />
              <FeatureCard
                title="End-to-end Encryption"
                subtitle="Chat"
                body={
                  <p>
                    Currently, your chat messages are only encrypted in-transit.
                    We're working hard to implement end-to-end encryption for
                    chats messages.
                  </p>
                }
              />
              <FeatureCard
                title="Diary Notification"
                subtitle="Diary"
                body={
                  <>
                    <p>
                      You'll be able to noitfy the selected ones of your friends
                      of your new diary.
                    </p>
                    <p>
                      Some Thoughts: If every of your friends are notified of
                      your new diary, you'll likely to upload what{" "}
                      <strong>your friends</strong> would like and care, not
                      what <strong>you</strong> care. We're going to let you
                      choose whom to be notified.
                    </p>
                  </>
                }
              />
              <FeatureCard
                title="Check Replies of a Diary"
                subtitle="Diary"
                body={
                  <p>
                    Currently, you can reply to a diary, but you cannot check
                    the replies on the <code>Diary Details</code> page. We'll
                    implement this soon.
                  </p>
                }
              />
            </div>
          </div>
        </div>

        <div
          className="horizontal-margin"
          style={{
            padding: 50,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <div style={{ maxWidth: 500 }}>
            <h1>Motivation of Atrable Project</h1>
            <p>
              How do you get closer to your friends? I've got an answer for you:
              you share your experiences with them, you relate to the stories
              that they share, then you'll get closer to them.
            </p>
            <p>
              None of the social media that I knew was focused on letting us
              share our stories; they were focused on some other stuffs like
              ads, AR lenses, being real, …. I thought I could make a social
              networking site that actually focuses on helping us getting closer
              to others, so I made one.
            </p>
            <p>
              On Atrable, you are required to record audio to upload a diary.
              With audio, people would more focus on the stories itself.
            </p>
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
          <StaticImage
            src="../contents/images/IMG_8891.jpg"
            alt="Me developing Atrable"
            style={staticImageStyle}
            imgStyle={staticImageImgStyle}
          />
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

const FeatureCard = (props: {
  title: string;
  subtitle?: string;
  body?: React.ReactNode;
}) => {
  return (
    <div
      style={{
        margin: 20,
        width: "60vw",
        maxWidth: 500,
        borderRadius: 30,
        backgroundColor: "white",
        flexShrink: 0,
        alignSelf: "flex-start",
      }}
    >
      <div
        style={{
          padding: 30,
        }}
      >
        <h1>{props.title}</h1>
        <h4 style={{ color: "var(--hint-color)" }}>{props.subtitle}</h4>
        {props.body}
      </div>
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

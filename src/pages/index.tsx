import * as React from "react";
import Layout from "../components/Layout";
import appScreenshot_feed1 from "../images/app_screenshots/IMG_7623.png";
import appScreenshot_recorder from "../images/app_screenshots/Simulator Screen Shot - iPhone 13 Pro Max - 2022-07-20 at 21.39.56.png";
import appScreenshot_myProfile1 from "../images/app_screenshots/IMG_7624.png";
import appScreenshot_myProfile2 from "../images/app_screenshots/IMG_7625.png";
import appScreenshot_friendsProfile from "../images/app_screenshots/IMG_7626.png";

const IndexPage = () => {
  return (
    <Layout>
      <title>Atrable: Audio Required!</title>
      <main className="horizontal-margin">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <img
            src={appScreenshot_feed1}
            alt="Atrable is based on audio"
            style={{
              maxHeight: "calc(75vh - 150px)",
              borderRadius: 20,
              margin: "5vmin",
              boxShadow: "var(--shadow-big)",
            }}
          />
          <div style={{ margin: 50 }}>
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
                style={{
                  margin: "3vmin",
                }}
              >
                Get Atrable
              </a>
              <p
                style={{
                  color: "var(--primary-color)",
                  marginTop: "auto",
                  marginBottom: "auto",
                }}
              >
                Learn More ↓
              </p>
            </div>
          </div>
        </div>
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
            <img
              src={appScreenshot_recorder}
              alt="My Profile"
              style={{
                maxHeight: "calc(75vh - 150px)",
                borderRadius: 20,
                boxShadow: "var(--shadow-big)",
              }}
            />
          </div>
          <div style={{ margin: 50 }}>
            <h1 style={{ textAlign: "center" }}>No need to be fun</h1>
            <p style={{ textAlign: "center" }}>
              Just like a diary, record your experiences with audio.{" "}
            </p>
          </div>
        </div>
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
            <img
              src={appScreenshot_myProfile1}
              alt="My Profile"
              style={{
                maxHeight: "calc(75vh - 100px)",
                maxWidth: "50vw",
                borderRadius: 20,
                boxShadow: "var(--shadow-big)",
              }}
            />
            <img
              src={appScreenshot_myProfile2}
              alt="My past posts"
              style={{
                maxHeight: "calc(75vh - 100px)",
                maxWidth: "50vw",
                borderRadius: 20,
                boxShadow: "var(--shadow-big)",
              }}
            />
          </div>
          <div style={{ marginTop: 50 }}>
            <h1 style={{ textAlign: "center" }}>Feel your past with audio</h1>
            <p style={{ textAlign: "start", maxWidth: 500 }}>
              Audio records vibe of the moment. The sound of bell ringing,
              people chattering, windows opening, and keyboards typing, they all
              together form a beautiful vibe. Feel those when you're viewing
              your past posts.
            </p>
          </div>
        </div>
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
            <img
              src={appScreenshot_friendsProfile}
              alt="My past posts"
              style={{
                maxHeight: "calc(75vh - 100px)",
                maxWidth: "50vw",
                borderRadius: 20,
                boxShadow: "var(--shadow-big)",
              }}
            />
          </div>
          <div style={{ marginTop: 50 }}>
            <h1 style={{ textAlign: "center" }}>See your friends' past</h1>
            <p style={{ textAlign: "start", maxWidth: 500 }}>
              This is actually the reason Atrable is made. On Instagram and
              Facebook, I couldn't really see how my friends have been living
              before meeting me, cause they upload only their happiest moment. I
              could never know who they are with those posts. Requiring audio, I
              want to know my friends' past vividly and relate with them better.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default IndexPage;

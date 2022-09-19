import * as React from "react";
import Layout from "../components/Layout";
import appScreenshot_feed1 from "../images/app_screenshots/IMG_7623.png";
import appScreenshot_recorder from "../images/app_screenshots/Simulator Screen Shot - iPhone 13 Pro Max - 2022-07-20 at 21.39.56.png";
import appScreenshot_myProfile1 from "../images/app_screenshots/IMG_7624.png";
import appScreenshot_myProfile2 from "../images/app_screenshots/IMG_7625.png";
import appScreenshot_friendsProfile from "../images/app_screenshots/IMG_7626.png";

function IndexPage() {
  return (
    <Layout>
      <title>Atrable: Audio Required!</title>
      <main className="horizontal-margin">
        {/* Audio based social media, Atrable */}
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
              margin: "5vmin",
              borderRadius: 20,
              boxShadow: "var(--shadow-big)",
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
                  color: "var(--hint-color)",
                  marginTop: "auto",
                  marginBottom: "auto",
                }}
              >
                Learn More ↓
              </p>
            </div>
          </div>
        </div>

        {/* No need to be fun */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <img
            src={appScreenshot_recorder}
            alt="My Profile"
            style={{
              maxHeight: "calc(75vh - 150px)",
              width: "fit-content",
              margin: "5vmin",
              borderRadius: 20,
              boxShadow: "var(--shadow-big)",
            }}
          />

          <div style={{ margin: "5vmin" }}>
            <h1 style={{ textAlign: "center" }}>No need to be fun</h1>
            <p style={{ textAlign: "center" }}>
              Just like a diary, record your experiences with audio.
            </p>
          </div>
        </div>

        {/* Feel your past with audio */}
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
          <div style={{ margin: "5vmin" }}>
            <h1 style={{ textAlign: "center" }}>Feel your past with audio</h1>
            <p style={{ textAlign: "start", maxWidth: 500 }}>
              Audio records vibe of the moment. The sound of everything (bell
              ringing, people chattering, windows opening, and keyboards typing)
              all together form a beautiful vibe. Feel those while listening to
              your past posts.
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

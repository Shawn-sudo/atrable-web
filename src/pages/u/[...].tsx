import React, { useEffect, useState } from "react";
import { query, where, limit, getDocs } from "firebase/firestore";
import Layout from "../../components/Layout";
import { userProfileCollection } from "../../components/firebase";
import defaultProfilePhoto from "../../assets/DefaultPhoto.png";
import { Router, useParams } from "@reach/router";
import { Link } from "gatsby";

export default function ProfilePage() {
  return (
    <Router basepath="/u">
      <ProfileViewer path="/:displayId" />
    </Router>
  );
}

function ProfileViewer(props: { path: string }) {
  const params = useParams();
  const displayId: string = params?.displayId;
  const [displayName, setDisplayName]: [string | undefined, any] = useState();
  const [profilePhoto, setProfilePhoto]: [string | undefined, any] = useState();
  useEffect(() => {
    getProfile();
  }, []);

  async function getProfile() {
    try {
      const q = query(
        userProfileCollection,
        where("displayId", "==", displayId),
        limit(1)
      );
      const querySnapshot = await getDocs(q);
      if (querySnapshot.docs.length < 1) return;
      const profileData_raw = querySnapshot.docs[0].data();
      setDisplayName(profileData_raw["displayName"] ?? null);
      setProfilePhoto(profileData_raw["photoURL"] ?? null);
    } catch (e) {
      console.log(`error: ${e}`);
    }
  }

  return (
    <Layout>
      <title>
        {displayName} (@{displayId}) | Atrable
      </title>
      <main className="horizontal-margin-narrow">
        <div
          style={{
            backgroundColor: "var(--highlight-color)",
            margin: 20,
            padding: 20,
            borderRadius: 30,
            display: "flex",
          }}
        >
          {typeof profilePhoto == "string" ? (
            <img
              src={profilePhoto ?? defaultProfilePhoto}
              alt={`${displayName}'s profile photo`}
              style={{
                borderRadius: typeof profilePhoto != "undefined" ? 30 : 50,
                height: 100,
                width: 100,
                objectFit: "cover",
                boxShadow: "var(--shadow-big)",
              }}
            />
          ) : profilePhoto === null ? (
            // No profile photo: show the default one
            <img
              src={defaultProfilePhoto}
              alt={`${displayName}'s profile photo`}
              style={{
                borderRadius: 50,
                height: 100,
                width: 100,
                objectFit: "cover",
                boxShadow: "var(--shadow-big)",
              }}
            />
          ) : (
            // Loading
            <div
              style={{
                backgroundColor: "white",
                borderRadius: 30,
                height: 100,
                width: 100,
                objectFit: "cover",
                boxShadow: "var(--shadow-big)",
              }}
            />
          )}

          <div style={{ margin: 20 }}>
            <h1 style={{ margin: 0 }}>{displayName} </h1>
            <div>@{displayId}</div>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "var(--error-color)",
            margin: 20,
            padding: 10,
            borderRadius: 30,
            textAlign: "center",
          }}
        >
          <p>
            Get Atrable app to see{" "}
            {typeof displayName != "undefined" ? `${displayName}'s` : "the"}{" "}
            diaries
          </p>
          <Link to="/" className="Button notcolored-background">
            What is Atrable?
          </Link>
          <a
            href="https://get.atrable.com"
            className="Button colored-background"
          >
            Get Atrable
          </a>
        </div>
      </main>
    </Layout>
  );
}

export const Head = () => (
  <>
    <meta name="apple-itunes-app" content="app-id=1630551248" />
  </>
);

import React, { useEffect, useState } from "react";
import { query, where, limit, getDocs } from "firebase/firestore";
import Layout from "../../components/Layout";
import { userProfileCollection } from "../../components/firebase";
import defaultProfilePhoto from "../../images/DefaultPhoto.png";
import { Router, useParams } from "@reach/router";

function ProfilePage() {
  return (
    <Router basepath="/u">
      <ProfileViewer path="/:displayId" />
    </Router>
  );
}

function ProfileViewer(props: { path: string }) {
  const params = useParams();
  let displayId = params?.displayId;
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
      setDisplayName(profileData_raw["displayName"]);
      setProfilePhoto(profileData_raw["photoURL"]);
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
            borderRadius: 20,
            display: "flex",
          }}
        >
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
          <div style={{ margin: 20 }}>
            <h1 style={{ margin: 0 }}>{displayName} </h1>
            <div>@{displayId}</div>
          </div>
        </div>
        <p style={{ textAlign: "center" }}>
          Open the app to see{" "}
          {typeof displayName != "undefined" ? `${displayName}'s` : "the"}{" "}
          diaries
        </p>
      </main>
    </Layout>
  );
}

export default ProfilePage;

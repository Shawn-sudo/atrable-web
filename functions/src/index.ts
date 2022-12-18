import * as functions from "firebase-functions";
import "firebase/firestore";
import { renderProfilePage } from "./profile/render";
import { renderToString } from "react-dom/server";
import { getDocs, limit, query, where } from "firebase/firestore";
import { userProfileCollection } from "./firebase/firebase";

exports.testing = functions.https.onRequest(async (req, res) => {
  try {
    const req_url = new URL(req.url, `http://${req.hostname}`);
    const req_url_split = req_url.pathname.split("/");
    if (req_url_split[0] == "testing") {
      const userProfile = await getProfile(req_url_split[1]);
      if (!userProfile) {
        throw "404";
      }
      const profilePage = renderToString(
        renderProfilePage({ profile_name: userProfile?.displayName })
      );
      res.status(200).send(
        `
        <!DOCTYPE HTML>
        <html>
          <head>
          </head>
          <body style="margin:0">
            <div id="app">${profilePage}</div>
          </body>
        </html>
        `
      );
    } else {
      throw "404";
    }
  } catch (e) {
    res.status(404).send(
      `
        <!DOCTYPE HTML>
        <html>
          <head>
          </head>
          <body style="margin:0">
            <h1>Page Not Found</h1>
          </body>
        </html>
        `
    );
  }
});

async function getProfile(displayId: string): Promise<UserProfile | null> {
  try {
    const q = query(
      userProfileCollection,
      where("displayId", "==", displayId),
      limit(1)
    );
    const querySnapshot = await getDocs(q);
    if (querySnapshot.docs.length < 1) throw "404";
    const profileData_raw = querySnapshot.docs[0].data();
    const displayName_raw = profileData_raw["displayName"];
    const photoURL_raw = profileData_raw["photoURL"];
    return new UserProfile({
      displayName:
        typeof displayName_raw == "string" ? displayName_raw : undefined,
      displayId: displayId,
      profilePhotoURL:
        typeof photoURL_raw == "string" ? photoURL_raw : undefined,
    });
  } catch (e) {
    console.log(`error: ${e}`);
    return null;
  }
}

// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

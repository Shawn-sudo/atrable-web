import { Link } from "gatsby";
import React from "react";
import Layout from "../components/Layout";

const PrivacyPolicy = () => {
  return (
    <>
      <title>Privacy Policy | Atrable</title>
      <Layout>
        <main className="horizontal-margin">
          <h1>Terms of Use</h1>
          <p>
            More of crazy law stuff would be put here later on. For now, our
            Terms of Use states these:
          </p>

          <ol>
            <li style={{ fontWeight: "bold" }}>Privacy</li>
            <dl>
              We collect your personal information! (quite scary huh). It
              includes
            </dl>
            <ul>
              <li>your name</li>
              <li>your username</li>
              <li>your email</li>
              <li>
                your password (hashed with salt) (not joking, that's how you
                properly protect the original passwords from bad hackers)
              </li>
              <li>
                your voice, if you share a post or send a voice message that
                contains your voice
              </li>
              <li>
                your face, if you set profile photo, share a post, or send a
                message that contains your face
              </li>
            </ul>
            <dl>
              Your name and username are saved when you set up your profile.
              Depending on the situation, changing your profile photo may also
              save your face if it includes your face. The profile created can
              be accessed by anyone using Atrable.
            </dl>
            <dl>
              Your email and password are collected when you create an account.
              If you use Social login (like pressing "Continue with Apple"
              thingy), password wouldn't be collected. Email would be used to
              identify your account and to notify you when there's an update on
              policies. Password would be used to protect your account from
              others. Don't reuse passwords.
            </dl>
            <dl>
              Your voice and face are collected when you share a post or send a
              message that contians those.
            </dl>
            <dl>
              For more information, check our{" "}
              <Link to="/privacy_policy">Privacy Policy</Link>
            </dl>
            <li style={{ fontWeight: "bold" }}>About the name "Atrable"</li>
            <dl>
              "Atrable" is a random app name Seihyun Lee came up with to make an
              website. He wanted to have a .com domain, and "Atrable" was the
              only name he came up with which .com domain hasn't been taken. The
              company "Atrable" is not registered yet, but it would be
              registered as soon as possible if many people starts using Atrable
              app.
            </dl>
            <li style={{ fontWeight: "bold" }}>Third parties</li>
            <dl>
              <a
                href="https://firebase.google.com/docs/auth"
                style={{ fontWeight: "bold", textDecoration: "none" }}
              >
                Firebase Authentication
              </a>{" "}
              (made by Google) is used to authenticate your access to our
              service.
            </dl>
            <dl>
              <a
                href="https://firebase.google.com/docs/firestore"
                style={{ fontWeight: "bold", textDecoration: "none" }}
              >
                Cloud Firestore
              </a>{" "}
              (made by Google) is used to store every data, including but not
              limited to your profile, your posts, your friend relationships,
              and your chats with your friends.
            </dl>
            <dl>
              <a
                href="https://firebase.google.com/docs/storage"
                style={{ fontWeight: "bold", textDecoration: "none" }}
              >
                Cloud Storage for Firebase
              </a>{" "}
              (made by Google) is used to save your uploaded audio, photo, and
              video files.
            </dl>
            <dl>
              Your data would inevitably be shared with these third parties
              (it's actually only Google). If you trust Google, nice. If you
              don't like Google, well so sad.
            </dl>
            <li style={{ fontWeight: "bold" }}>Age Requirements</li>
            <dl>
              For all countries not listed below, 13 is the minimum age to
              manage your own Atrable Account.
            </dl>
            <ul>
              <li>South Korea: 14+</li>
              <li>Vietnam: 15+</li>
              <li>Aruba: 16+</li>
              <li>Caribbean Netherlands: 16+</li>
              <li>Curaçao: 16+</li>
              <li>Sint Maarten: 16+</li>
              <li>Austria: 14+</li>
              <li>Bulgaria: 16+</li>
              <li>Croatia: 16+</li>
              <li>Cyprus: 14+</li>
              <li>Czech Republic: 15+</li>
              <li>France: 15+</li>
              <li>Germany: 16+</li>
              <li>Greece: 15+</li>
              <li>Hungary: 16+</li>
              <li>Ireland: 16+</li>
              <li>Italy: 14+</li>
              <li>Lithuania: 14+</li>
              <li>Luxembourg: 16+</li>
              <li>Netherlands: 16+</li>
              <li>Poland: 16+</li>
              <li>Romania: 16+</li>
              <li>San Marino: 16+</li>
              <li>Serbia: 15+</li>
              <li>Slovakia: 16+</li>
              <li>Slovenia: 16+</li>
              <li>Spain: 14+</li>
              <li>Chile: 14+</li>
              <li>Colombia: 14+</li>
              <li>Peru: 14+</li>
              <li>Venezuela: 14+</li>
            </ul>

            <dl>
              If you're under the age required to manage your own Atrable
              Account, wait until you reach the age! If you cannot wait, you
              must have your parent or legal guardian's permission to use an
              Atrable Account. Have your parent or legal guardian read these
              terms with you. If you're a parent or legal guardian, and you
              allow your child to use Atrable, then these terms apply to you and
              you're responsible for your child's activity on Atrable.
            </dl>

            <li style={{ fontWeight: "bold" }}>When we change our policies</li>
            <dl>
              We'll notify you before we change our policies. We wouldn't
              necessarily notify you if the change only includes fixing typo. We
              save your email address on our server to do so. You'll have the
              opportunity to review the changed policies before you choose to
              continue using Atrable.
            </dl>
          </ol>
        </main>
      </Layout>
    </>
  );
};

export default PrivacyPolicy;

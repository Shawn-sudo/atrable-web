import { Link } from "gatsby";
import React from "react";
import Layout from "../components/Layout";

const TermsOfUse = () => {
  return (
    <>
      <title>Terms of Use | Atrable</title>
      <Layout>
        <main className="horizontal-margin">
          <h1>Terms of Use</h1>
          <p>
            More law stuff would be put here later on. For now, our Terms of Use
            states these:
          </p>

          <ol>
            <li style={{ fontWeight: "bold" }}>Privacy</li>
            <dl>We collect your personal information. It includes</dl>
            <ul>
              <li>your name</li>
              <li>your username</li>
              <li>your email</li>
              <li>
                your password (hashed with salt) (that's how you properly
                protect the original passwords from bad hackers)
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
              If you share these personal data with us, we would save those on
              our server, but we don't analyze it. We aren't really interested
              in you.
            </dl>
            <dl>
              <strong>Profile: </strong>
              Your name and username are saved when you set up your profile. If
              your profile photo contains your face, your face would be saved on
              our server. Profiles can be accessed by anyone using Atrable.
            </dl>
            <dl>
              <strong>Authentication: </strong>
              Your email and password are collected when you create an account.
              If you use Social login (like pressing "Continue with Apple"
              thingy), password wouldn't be collected. Email is used to identify
              your account and to notify you when there's an update on policies.
              Password is used to protect your account from others. Don't reuse
              passwords.
            </dl>
            <dl>
              <strong>Post and Chat: </strong>
              Your voice and face are saved in our server when you share a post
              or send a message that contains those.
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
              registered as soon as possible if people start using Atrable.
            </dl>
            <li style={{ fontWeight: "bold" }}>
              Don't abuse or harm others or yourself.
            </li>
            <dl>
              For example, don't mislead, defraud, bully, harasse, or stalk
              others.
            </dl>
            <li style={{ fontWeight: "bold" }}>
              Don't abuse, harm, interfere with, or disrupt our services.
            </li>
            <li style={{ fontWeight: "bold" }}>
              Service Providers (Third parties)
            </li>
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
              <a
                href="https://firebase.google.com/docs/functions"
                style={{ fontWeight: "bold", textDecoration: "none" }}
              >
                Cloud Functions for Firebase
              </a>{" "}
              (made by Google) is used to notify you on some actions (like new
              messages from your friend / your friend shared you a post / ... )
              and count the number of the reactions of posts.
            </dl>
            <dl>
              Your data is transferred to the service providers listed above.
            </dl>
            <dl>
              Just fyi,{" "}
              <a href="https://support.google.com/googleplay/android-developer/answer/10787469?hl=en#sharing&zippy=%2Cdata-sharing">
                Google doesn't count "transferring data to service providers" as
                "sharing data with third party"
              </a>
              , so our Google Play Data Safety page does not say that we share
              your data with third party.
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
              terms with you. If you're a parent or legal guardian, and if you
              allow your child to use Atrable, these terms apply to you and
              you're responsible for your child's activity on Atrable.
            </dl>

            <li style={{ fontWeight: "bold" }}>When we change our policies</li>
            <dl>
              We'll notify you before we change our policies. We save your email
              address on our server to do so. You'll have an opportunity to
              review the changed policies before you choose to continue using
              Atrable. We wouldn't necessarily notify you if the change only
              includes fixing typo.
            </dl>
          </ol>
        </main>
      </Layout>
    </>
  );
};

export default TermsOfUse;

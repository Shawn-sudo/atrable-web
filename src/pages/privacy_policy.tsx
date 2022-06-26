import React from "react";
import Layout from "../components/Layout";
import privacyPolicyHTML from "../components/privacy_policy";

const PrivacyPolicy = () => {
  return (
    <>
      <title>Privacy Policy | Atrable</title>
      <Layout>
        <main className="horizontal-margin">
          <div dangerouslySetInnerHTML={{ __html: privacyPolicyHTML }} />
        </main>
      </Layout>
    </>
  );
};

export default PrivacyPolicy;

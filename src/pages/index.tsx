import * as React from "react";
import Button from "../components/Button";
import Layout from "../components/Layout";

const IndexPage = () => {
  return (
    <Layout>
      <main className="horizontal-margin">
        <title>Atrable: Audio Required!</title>
        <Button
          onPressed={() => {
            console.log("hiiii");
          }}
          highlighted
        >
          Testing a button
        </Button>
      </main>
    </Layout>
  );
};

export default IndexPage;

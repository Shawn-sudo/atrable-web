import * as React from "react";
import Button from "../components/Button";
import Layout from "../components/Layout";

const IndexPage = () => {
  return (
    <Layout>
      <main>
        <title>Home Page</title>
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

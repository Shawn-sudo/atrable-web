import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <title>Page Not found (404) | Atrable</title>
      <main className="horizontal-margin">
        <h1>Page not found</h1>
        <h3>404</h3>
        <p>
          So sad . . . <Link to="/">Go home</Link>
        </p>
      </main>
    </Layout>
  );
};

export default NotFoundPage;

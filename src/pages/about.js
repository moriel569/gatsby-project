import React from "react";
import { Link } from "gatsby";

const AboutPage = () => {
  return (
    <main>
      <title>About Page</title>
      <h1>It's all about me</h1>
      <Link to="/">To Home Page</Link>
      <p>This web page was built with Gatsby</p>
    </main>
  );
};

export default AboutPage;

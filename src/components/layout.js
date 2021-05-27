import React from "react";
import { Link } from "gatsby";
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
} from "../styles/layout.module.css";

const Layout = ({ pageTitle, children }) => {
  return (
    <main className={container}>
      <title>{pageTitle}</title>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/">
              Home page
            </Link>{" "}
          </li>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/about">
              About page
            </Link>{" "}
          </li>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/say-hello">
              Hello page
            </Link>{" "}
          </li>
        </ul>
      </nav>
      <h1 className={heading}>{pageTitle}</h1>
      {children}
    </main>
  );
};

export default Layout;

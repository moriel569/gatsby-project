import React from "react";
import { Link } from "gatsby";
import Greeting from "../components/greeting";

const SayHello = () => {
  return (
    <div>
      <h1>Greetings to people</h1>
      <Link to="/">To Home page</Link>
      <Greeting name="Paul" />
      <Greeting name="Yauhen" />
      <Greeting name="Alena" />
    </div>
  );
};

export default SayHello;

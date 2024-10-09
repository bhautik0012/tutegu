import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Head from "./assets/Head";
import Logo from "./assets/Logo";
import Join from "./assets/join";
import Top from "./assets/Top";
import Number from "./assets/Number";
import Explore from "./assets/Explore";
import Enroll from "./assets/Enroll";
import Enroll2 from "./assets/Enroll2";
import Success from "./assets/success";
import Last from "./assets/Last";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Head />
      <Logo />
      <Join />
      {/* <Top /> */}
      <Number />
      <Explore />
      <Enroll />
      <Enroll2 />
      <Success />
      <Last />
    </>
  );
}

export default App;

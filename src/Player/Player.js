import React from "react";
import styling from "./Player.module.css";
import Sidebar from "./Sidebar/Sidebar";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";

export default function Player({ spotify }) {
  return (
    <div className={styling.Player}>
      <div className={styling.Player_Body}>
        <Sidebar />
        <Body spotify={spotify} />
      </div>
      <Footer />
    </div>
  );
}

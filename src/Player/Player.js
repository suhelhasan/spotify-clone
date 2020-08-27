import React from "react";
import styling from "./Player.module.css";
import Sidebar from "./Sidebar/Sidebar";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";
// import { useDataLayerValue } from "../Context/DataLayer";

export default function Player({ spotify }) {
  // const [{ current_song }, dispatch] = useDataLayerValue();

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

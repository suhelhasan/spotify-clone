import React from "react";
import styling from "./Player.module.css";
import Sidebar from "./Sidebar/Sidebar";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import { useDataLayerValue } from "../Context/DataLayer";

export default function Player({ spotify }) {
  const [{ suffle }] = useDataLayerValue();

  return (
    <div className={styling.Player}>
      <div className={styling.Player_Body}>
        <div className={suffle ? styling.showSideBar : styling.Sidebar}>
          <Sidebar />
        </div>
        <div className={styling.Body}>
          <Body spotify={spotify} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

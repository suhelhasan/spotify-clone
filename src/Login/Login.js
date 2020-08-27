import React from "react";
import styling from "./Login.module.css";
import icon from "../assets/spotify-icon.png";
import { loginUrl } from "../spotify/spotify";

export default function Login() {
  return (
    <div className={styling.Login}>
      <img src={icon} alt="logo" />
      <a href={loginUrl}>SIGN IN TO SPOTIFY</a>
    </div>
  );
}

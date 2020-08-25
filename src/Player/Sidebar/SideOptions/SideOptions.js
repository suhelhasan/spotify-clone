import React from "react";
import styling from "./SidebarOptions.module.css";

export default function SideOptions({ title, Icon, setIndex, currentIndex }) {
  if (Icon) {
    return (
      <div className={styling.SideOptions}>
        <Icon className={styling.sidebarOption_icon} />
        <h4>{title}</h4>
      </div>
    );
  }
  return (
    <div className={styling.SideOptions} onClick={() => setIndex(currentIndex)}>
      <p>{title}</p>
    </div>
  );
}

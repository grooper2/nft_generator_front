import React, { useState } from "react";
import { ReactComponent as ProjectIcon } from "../Assets/Icons/projects.svg";
import { ReactComponent as SettingsIcon } from "../Assets/Icons/settings.svg";
import { ReactComponent as LogOutIcon } from "../Assets/Icons/log-out.svg";
import { ReactComponent as LinkedInIcon } from "../Assets/Icons/linkedIn.svg";
import { ReactComponent as FacebookIcon } from "../Assets/Icons/facebook.svg";
import { ReactComponent as TwitterIcon } from "../Assets/Icons/twitter.svg";

export default function Navigation({activeItem}) {
  const [isActive, setIsActive] = useState(activeItem || '');
  return (
    <div className="navBar">
      <div className="navMenu">
        <div className="navMenu-icons">
          <div className={`${isActive === "activeItem1" ? "activeItem1" : ""}`} />
          <ProjectIcon
            onClick={() => setIsActive("activeItem1")}
            className="item"
          />
          <div className={`${isActive === "activeItem2" ? "activeItem2" : ""}`} />
          <SettingsIcon onClick={() => setIsActive("activeItem2")} className="item" />
          <div className={`${isActive === "activeItem3" ? "activeItem3" : ""}`} />
          <LogOutIcon onClick={() => setIsActive("activeItem3")} className="item" />
        </div>
      </div>
      <div className="navFooter">
        <div className="navFooter-item">
          <LinkedInIcon  className="item" />
          <FacebookIcon  className="item"/>
          <TwitterIcon  className="item"/>
        </div>
      </div>
    </div>
  );
}

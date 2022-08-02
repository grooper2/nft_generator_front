import React from "react";
import "./card.scss";
import { ReactComponent as CardBanner } from "./CardBanner.svg";
import { ReactComponent as MinusIcon } from "../../Assets/Icons/minus.svg"
import placeholder from "../../Assets/Images/placeHolder.png";

export default function Card({project}) {
  return (
    <div className="card" key={project.id}>
      <div className="removePlaceholder">
        <MinusIcon onClick={() => console.log('')} />
      </div>
      <div className="imgPlaceholder">
        <img src={placeholder} alt="projectName" />
      </div>
      <div className="card-content">
        <CardBanner />
        <div className="content-box">
          <div className="left-card-content">
            <h3>{project.projectTitle}</h3>
            <p>{project.dateCreated}</p>
          </div>
          <div className="right-card-content">
            <h3>{project.assets} Assets</h3>
            <p>{project.nfts} NFTS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

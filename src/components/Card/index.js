import React from "react";
import "./card.scss";
import { ReactComponent as CardBanner } from "./CardBanner.svg";
import { ReactComponent as MinusIcon } from "../../Assets/Icons/minus.svg"
import placeholder from "../../Assets/Images/placeHolder.png";

export default function Card(props) {
  return (
    <div className="card">
      <div className="removePlaceholder">
        <MinusIcon onClick={() => console.log('')}/>
      </div>
      <div className="imgPlaceholder">
        <img src={placeholder} alt="projectName" />
      </div>
      <div className="card-content">
        <CardBanner />
        <div className="content-box">
          <div className="left-card-content">
            <h3>Project Title</h3>
            <p>DD/MM/YYYY</p>
          </div>
          <div className="right-card-content">
            <h3>23 Assets</h3>
            <p>10000 NFTS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

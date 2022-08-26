import React, { useState } from "react";
import "./card.scss";

import { ReactComponent as CardBanner } from "./CardBanner.svg";
import { ReactComponent as MinusIcon } from "../../Assets/Icons/minus.svg";
import { ReactComponent as DeleteIcon } from "../../Assets/Icons/delete.svg";

import placeholder from "../../Assets/Images/placeHolder.png";

import Button from "../Buttons";

export default function Card({ project }) {
  const [isDeleting, setDeleting] = useState(false);
  return (
    <div className="card" key={project.id}>
      <div className="removePlaceholder" onClick={() => setDeleting(!isDeleting)}>
        {isDeleting ? (
          <DeleteIcon />
        ) : (
          <MinusIcon />
        )}
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
      {isDeleting && (
        <div className="overlay">
          <div className="overlay-content">
            <h4 style={{ color: "#000" }}>
              Are you sure you want to remove this project? You are going to
              lose all your NFT's and Assets
            </h4>
            <div className="btnRow">
              <Button className="closeBtn">Delete</Button>
              <Button className="primaryBtn" onClick={() => setDeleting(false)}>
                cancel
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

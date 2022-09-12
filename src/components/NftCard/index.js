import React from "react";
import "./nft_card.scss";

import placeholder from "../../Assets/Images/placeHolder.png";

export default function Nft_Card({ isOpen, setToggle }) {
  return (
    <div className="bg_card">
      <div className="nft_card" onClick={() => setToggle(true)}>
        <div className="nft_img_Placeholder">
          <img src={placeholder} alt="projectName" />
        </div>
        <div className="nft_card-content">
          <div className="nft_cardBanner">
            <div className="nft_content-box">
              <h4>NFT Name</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

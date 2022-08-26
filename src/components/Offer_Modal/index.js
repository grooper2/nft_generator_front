import React, { useEffect, useState } from "react";
import "./offerModal.scss";

import Button from "../Buttons";

export default function OfferModal(props) {
  if (!props.show) {
    return null;
  }
  return (
    <div className="modal-offers" onClick={props.onClose}>
      <div
        className="modal-offers-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-offers-header">
          <h3 className="modal-offers-title">Offers</h3>
        </div>
        <div className="modal-offers-body">
          <div className="modal-offers-columns">
            <h4>100 NFT's Free</h4>
            <hr></hr>
            <p>
              Generate 100 NFT’s for free once a month. This option will be
              available after 30 days since the first time you generate. This
              NFT's will include a watermark.
            </p>
            <br />
            <Button type="button" className="outlineBtn">
              Select this offer
            </Button>
          </div>
          <div className="modal-offers-columns">
            <h4>100 NFT's Free</h4>
            <hr></hr>
            <p>
              Generate 1000 NFT’s for £50. This option will always be available
              at any time.
            </p>
            <br />
            <Button type="button" className="outlineBtn">
              Select this offer
            </Button>
          </div>
          <div className="modal-offers-columns">
            <h4>100 NFT's Free</h4>
            <hr></hr>
            <p>
              Generate 10000 NFT’s for £399. This option will always be
              available at any time.
            </p>
            <br />
            <Button type="button" className="outlineBtn">
              Select this offer
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

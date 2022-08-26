import React, { useEffect, useState } from "react";
import "./expandModal.scss";

import placeholder from "../../Assets/Images/placeHolder.png";
import Button from "../Buttons";

export default function ExpandModal(props) {
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);

  if (!props.show) {
    return null;
  }

  const onChangeWidth = (e) => {
    setWidth(e.target.value);
  };
  const onChangeHeight = (e) => {
    setHeight(e.target.value);
  };

  return (
    <div className="modal-expand" onClick={props.onClose}>
      <div
        className="modal-expand-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-expand-header">
          <h4 className="modal-expand-title">NFT Name</h4>
        </div>
        <div className="modal-expand-body">
          <div className="img_placeholder-expand">
            <img src={placeholder} alt="nftName" />
          </div>
          <div className="img_metadata">
            <div className="metadata">
              <code>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </code>
            </div>
          </div>
        </div>
        <div className="modal-expand-footer">
          <Button type="button" className="closeBtn" onClick={props.onClose}>
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}

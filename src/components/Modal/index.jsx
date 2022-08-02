import React from "react";
import "./modal.scss";

import Slider from "../Inputs/Slider";
import Button from "../Buttons";

export default function Modal(props) {

  if (!props.show) {
    return null;
  }

  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h4 className="modal-title">Create project</h4>
        </div>
        <div className="modal-body">
          this is modal body
          <div className="inputContainer">
            <div className="sliderContainer">
              <input type="text" className="sliderInput" />
              <Slider type={"width"} />
            </div>
            <div className="sliderContainer">
              <input type="text" className="sliderInput" />
              <Slider type={"height"} />
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <Button type="button" onClick={props.onClose}>
            Close
          </Button>
          <Button type="button" onClick={props.onClose}>
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import "./modal.scss";

import Slider from "../Inputs/Slider";
import Button from "../Buttons";

export default function Modal(props) {
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
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h4 className="modal-title">Create project</h4>
        </div>
        <div className="modal-body">
          <div className="inputTitle-container">
            <input
              type="text"
              name="ProjectTitle"
              id="ProjectTitle"
              placeholder="Cyber Chefs"
            />
            <label htmlFor="ProjectTitle">Project Title</label>
          </div>
          <div className="inputContainer">
            <div className="sliderContainer">
              <div className="input-label">
                <p>Width (px)</p>
              </div>
              <input
                type="number"
                className="sliderInput"
                value={width}
                disabled
              />
              <Slider onChange={onChangeWidth} type={"width"} />
            </div>
            <div className="sliderContainer">
              <div className="input-label">
                <p>Height (px)</p>
              </div>
              <input
                type="number"
                className="sliderInput"
                value={height}
                disabled
              />
              <Slider onChange={onChangeHeight} type={"height"} />
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <Button type="button" className="closeBtn" onClick={props.onClose}>
            Close
          </Button>
          <Button type="button" className="saveBtn" onClick={props.onClose}>
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}

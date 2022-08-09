import React, { useState, useEffect } from "react";
import "./slider.scss";

export default function Slider({onChange, type}) {

  return (
    <div className="slider-container">
      <input type="range" step='20' className="range" min="100"  max={type === 'width' ? '1920' : '1080'} onChange={onChange}/>
    </div>
  );
}

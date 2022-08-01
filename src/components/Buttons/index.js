import React from "react";
import "./button.scss"

export default function PrimaryButton (props) {
    return <button className="primaryBtn" {...props}>{props.children}</button>
}
import React from "react";
import Navigation from "./navigation";
import "./navbar.scss";

export default function Layout(props) {
  return (
    <>
      <div className="pageLayout" bg={props.background}>
        <Navigation
          activeItem={props.activeItem}
          navColor={props.navColor}
          navBackground={props.navBackground}
        />
      </div>
      <div className="pageBody">{props.children}</div>
    </>
  );
}

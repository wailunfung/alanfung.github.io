import React from "react";
import navStyles from "./nav.module.scss";

const NavButton = ({ toggle, isActive }) => {
  return (
    <button aria-label="Menu" className={navStyles.navButton} onClick={() => toggle(!isActive)} >
      <div className={`${navStyles.buttonBar} ${isActive ? navStyles.buttonActive : ''}`} />
    </button>
  )
}

export default NavButton
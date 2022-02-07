import React from "react";

function MenuContainer({link, icon}) {
  return (
    <a href={link}>
      <span className="bottomMenu__icon">{icon}</span>
    </a>
  );
}

export default MenuContainer;

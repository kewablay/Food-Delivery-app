import React from "react";

function SectionTitle({ title }) {
  return (
    <div className="sectionTitle">
      <h3>{title}</h3>
      <p>View all<span class="sectionTitle__icon">></span></p>
    </div>
  );
}

export default SectionTitle;

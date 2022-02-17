import React from 'react';
import ArrowDropDownCircleRoundedIcon from "@mui/icons-material/ArrowDropDownCircleRounded";

function CategoryCard({image, title, isActive}) {
  return (
    <div className={`categoriesList__card ${isActive && `active`}`}>
      <div className="card__img">
        <img src={image} alt="" />
      </div>
      <p className="card__title">{title}</p>
      <ArrowDropDownCircleRoundedIcon className="cat-icon" />
    </div>
  );
}

export default CategoryCard;
  
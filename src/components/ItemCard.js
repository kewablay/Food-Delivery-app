import React from "react";
import { Favorite, AddRounded } from "@mui/icons-material";

function ItemCard({ image, title, price }) {
  return (
    <div className="itemContainer__itemCard">
      <div className="isFavourite">
        <Favorite />
      </div>
      <div className="itemCard__img">
        <img src={image} alt="" />
      </div>
      <div className="itemCard__content">
        <div className="content__title">
          <h3>{title}</h3>
        </div>
        <div className="content__bottom">
          <h3 className="bottom__price">
            <span>$</span> {price}
          </h3>
          <div className="bottom__addToCart">
            <i className="addtoCart">
              <AddRounded />
            </i>
          </div>
        </div>
        <i className="content__buy">Purchase</i>
      </div>
    </div>
  );
}

export default ItemCard;

import React, { useContext } from "react";

import Card from "../ui/ Card";
import FavouritesContext from "../../store/favourites-context";

import classes from "./MeetupItem.module.css";

const MeetupItem = ({ image, title, adress, description, id }) => {
  const favouritesCtx = useContext(FavouritesContext);

  const itemIsFavourite = favouritesCtx.itemIsFavourite(id);

  const toggleFavouritesStatusHandler = () => {
    if (itemIsFavourite) {
      favouritesCtx.removeFavourite(id);
    } else {
      favouritesCtx.addFavourite({
        id: id,
        title: title,
        description: description,
        image: image,
        adress: adress,
      });
    }
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{adress}</address>
          <p>{description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavouritesStatusHandler}>
            {itemIsFavourite ? "Remove From Favourites" : "To Favourites"}
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;

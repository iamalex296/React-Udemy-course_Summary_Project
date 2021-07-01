import React from "react";

import classes from "./MeetupItem.module.css";

const MeetupItem = ({ image, title, adress, description }) => {
  return (
    <li className={classes.item}>
      <div className={classes.image}>
        <img src={image} alt={title} />
      </div>
      <div className={classes.content}>
        <h3>{title}</h3>
        <address>{adress}</address>
        <p>{description}</p>
      </div>
      <div className={classes.actions}>
        <button>To Favourites</button>
      </div>
    </li>
  );
};

export default MeetupItem;
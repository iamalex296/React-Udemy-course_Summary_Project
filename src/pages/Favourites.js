import React, { useContext } from "react";

import FavouriteContext from "../store/favourites-context";
import MeetupList from "../components/meetups/MeetupList";

const Favourites = () => {
  const favouritesCtx = useContext(FavouriteContext);

  let content;

  if (favouritesCtx.totalFavourites === 0) {
    content = <p>You got no favourites yet. Start adding some?</p>;
  } else {
    content = <MeetupList meetups={favouritesCtx.favourites} />;
  }

  return (
    <section>
      <h1>My Favourites</h1>
      {content}
    </section>
  );
};

export default Favourites;

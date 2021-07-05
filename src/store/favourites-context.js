import { createContext, useState } from "react";

const FavouritesContext = createContext({
  favourites: [],
  total: 0,
  addFavourite: (favouriteMeetup) => {},
  removeFavourite: (meetupId) => {},
  itemIsFavourite: (meetupId) => {},
});

export const FavouritesContextProvider = (props) => {
  const [userFavourites, setUsetFavourites] = useState([]);

  const addFavouriteHandler = (favouriteMeetup) => {
    setUsetFavourites((prevUserFavourites) => {
      return prevUserFavourites.concat(favouriteMeetup);
    });
  };

  const removeFavouriteHandler = (meetupId) => {
    setUsetFavourites((prevUserFavourites) => {
      return prevUserFavourites.filter((meetup) => meetup.id !== meetupId);
    });
  };

  const itemIsFavouriteHandler = (meetupId) => {
    return userFavourites.some((meetup) => meetup.id === meetupId);
  };

  const context = {
    favourites: userFavourites,
    totalFavourites: userFavourites.length,
    addFavourite: addFavouriteHandler,
    removeFavourite: removeFavouriteHandler,
    itemIsFavourite: itemIsFavouriteHandler,
  };
  return (
    <FavouritesContext.Provider value={context}>
      {props.children}
    </FavouritesContext.Provider>
  );
};

export default FavouritesContext;

import React from "react";
import { Link } from "react-router-dom";
import css from "./FavoritePage.module.css";
import FavoriteList from "../../components/FavoriteList/FavoriteList";
import { selectFavoriteCars } from "../../redux/selectors";
import { useSelector } from "react-redux";

const FavoritePage = () => {
  const favoriteCars = useSelector(selectFavoriteCars);

  return favoriteCars?.length > 0 ? (
    <FavoriteList />
  ) : (
    <div>
      <h1>There will be your favotite cars,go to Catalog and choose one!</h1>
      <Link to="/catalog" className={css.link}>
        Catalog page
      </Link>
    </div>
  );
};

export default FavoritePage;

import React from "react";
import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div>
      <h1 className={css.title}>There is no suck page!</h1>
      <h3 className={css.direction}>You can go back to the Home page</h3>
      <Link to="/" className={css.link}>
        Home Page
      </Link>
    </div>
  );
};

export default NotFoundPage;

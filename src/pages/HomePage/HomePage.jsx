import React from "react";
import css from "./HomePage.module.css";
import image from "./../../assets/images/taycan.webp";

const HomePage = () => {
  return (
    <div>
      <img src={image} className={css.imgHome} alt="car" loading="lazy" />
      <h2 className={css.title}>Cars for rent</h2>
      <p className={css.text}>Unleash Your Style - Your Exotic, Our Selection!</p>
    </div>
  );
};

export default HomePage;

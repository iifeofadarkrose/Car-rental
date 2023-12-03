import React from "react";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Loader from "../Loader/Loader";
import css from "./Layout.module.css";
import Header from "../Header/Header";

const SharedLayout = () => {
  return (
    <>
      <Header />
      <main className={css.mainStyle}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;

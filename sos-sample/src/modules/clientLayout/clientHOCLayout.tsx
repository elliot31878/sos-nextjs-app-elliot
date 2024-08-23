"use client";

import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { routeNames } from "@/constant/routeNames";
import { useRouter } from "next/navigation";
import { AppBar } from "../appBar/appBar";
import store from "./@reduxStore";

import styles from "./cl.module.scss";

const ClientHOCLayout: React.FC<React.PropsWithChildren<unknown>> = React.memo(
  ({ children }) => {
    const routerNavigation = useRouter();
    useEffect(() => {
      if (window.location.pathname === "/")
        routerNavigation.push(routeNames.HOME);
    }, [routerNavigation]);

    return (
      <main className={styles["cl-main"]}>
        <Provider store={store}>
          <AppBar />
          {children}
        </Provider>
      </main>
    );
  }
);

export default ClientHOCLayout;

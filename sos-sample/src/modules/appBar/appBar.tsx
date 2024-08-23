import { APP_BAR_ITEMS, SOS_LINK } from "@/constant/appbar-items";
import { useLoaderImage } from "@/hooks/useLoaderImage";
import { Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import styles from "./appbar.module.scss";
import { useLocation } from "@/hooks/useLocation";

import { useNavigate } from "@/hooks/useNavigate";

export const AppBar = React.memo(() => {
  const loader = useLoaderImage();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <header className={styles["app-bar"]}>
      {APP_BAR_ITEMS.map((item) => {
        switch (item.type) {
          case "contained":
          case "text":
            return (
              <Button
                onClick={() => {
                  if (item.route) {
                    navigate(item.route);
                  }
                }}
                className={`
                 ${
                   styles[
                     item.type === "text" ? "app-bar__typo" : "app-bar__button"
                   ]
                 }
                 ${
                   styles[
                     item.route === pathname ? "app-bar__typo--active" : ""
                   ]
                 }
                `}
                variant={item.type}
              >
                {item.text}
              </Button>
            );

          case "icon":
            return (
              <Image
                loader={loader}
                width={100}
                height={70}
                src={SOS_LINK}
                alt="SOS"
              />
            );
        }
      })}
    </header>
  );
});

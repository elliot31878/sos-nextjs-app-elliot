"use client";

import React, { useEffect } from "react";
import { routeNames } from "@/constant/routeNames";
import { useRouter } from "next/navigation";
const ClientHOCLayout: React.FC<React.PropsWithChildren<unknown>> = React.memo(
  ({ children }) => {
    const routerNavigation = useRouter();
    useEffect(() => {
      if (window.location.pathname === "/")
        routerNavigation.push(routeNames.HOME);
    }, [routerNavigation]);

    return <main className="cl-main">{children}</main>;
  }
);

export default ClientHOCLayout;

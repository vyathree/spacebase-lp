"use client";
import { FunctionComponent, PropsWithChildren, useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const LayoutClientProviders: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 600,
      easing: "ease-out-sine",
    });
  });
  return <>{children}</>;
};

export default LayoutClientProviders;

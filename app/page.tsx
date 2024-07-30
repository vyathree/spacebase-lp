"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import BuildingVariants from "./components/BuildingVariants";
import EconomyAndTokens from "./components/EconomyAndTokens";
import Footer from "./components/Footer";
import GameWorld from "./components/GameWorld";
import GenreAndMechanics from "./components/GenreAndMechanics";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LearnMore from "./components/LearnMore";
import Socials from "./components/Socials";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 2000);
  }, []);

  return (
    <>
      {!loaded && (
        <div className="z-50 fixed top-0 w-full h-full bg-gray-500 bg-opacity-90 bg-blend-multiply flex items-center justify-center">
          <Image
            quality={100}
            data-aos="zoom-out-up"
            src={"/assets/animated_logo.gif"}
            alt="SpaceBase animated logo"
            width={200}
            height={200}
            loading="eager"
            className="mt-12 w-24 h-24 md:w-36 md:h-36 lg:w-52 lg:h-52 object-contain"
          />
        </div>
      )}{" "}
      <div className="flex flex-col overflow-x-hidden">
        <div className="relative pb-14 md:pb-28">
          <Header />
          <Hero />
          <Image
            quality={100}
            alt=""
            src="/assets/Page-02.png"
            fill
            className="z-[-2] bg-black"
            loading="eager"
          />
        </div>
        <div className="relative -mt-1">
          <Image
            quality={100}
            alt=""
            src="/assets/Mid BG.png"
            fill
            className="z-[-3] object-cover h-full object-top bg-gray-500"
            loading="eager"
          />
          <GenreAndMechanics />
          <GameWorld />
          <BuildingVariants />
          <EconomyAndTokens />
        </div>
        <div className="relative -mt-1">
          <Image
            quality={100}
            alt=""
            src="/assets/Footer BG.png"
            fill
            className="z-[-2]"
            loading="eager"
          />
          <LearnMore />
          <Socials />
          <Footer />
        </div>
      </div>
    </>
  );
}

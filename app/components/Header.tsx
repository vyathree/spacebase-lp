"use client";
import MenuIcon from "@/src/icons/MenuIcon";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import MobileMenu from "./header/MobileMenu";
import NavigationLink from "./header/NavigationLink";

const Header = () => {
  const [show, setShow] = useState(false);
  const [hash, setHash] = useState("");
  const pointerElementRef = useRef<HTMLDivElement>(null);

  const handleHashChange = (newHash: string) => {
    setHash(newHash);
    changePointerPosition(newHash);
  };

  useEffect(() => {
    setHash(window.location.hash);
  }, []);

  useEffect(() => {
    changePointerPosition(hash);
  }, [hash]);

  const changePointerPosition = (hash: string) => {
    if (hash && pointerElementRef.current) {
      const selectedElement = document.querySelector(
        `a[href='${hash}']`
      ) as HTMLAnchorElement;
      if (selectedElement) {
        const left = selectedElement.offsetLeft;
        pointerElementRef.current!.style.setProperty("left", `${left}px`);
        pointerElementRef.current!.style.setProperty(
          "width",
          `${selectedElement.offsetWidth}px`
        );
      }
    }
  };

  return (
    <>
      {/* Header shadow */}
      <div className="bg-gradient-to-b from-gray-900 to-transparent h-24 absolute top-0 w-full" />
      <nav className="md:hidden relative z-10 container custom-max-width-xl py-2">
        <button className="cursor-pointer p-2" onClick={() => setShow(true)}>
          <MenuIcon />
        </button>
        <MobileMenu open={show} onClose={() => setShow(false)} />
      </nav>
      <nav className="relative w-full grid grid-cols-[1fr_auto_1fr] container custom-max-width-xl justify-between h-16 items-center max-md:hidden">
        <Link href="/" className="text-white">
          <Image
            quality={100}
            src="/logo.png"
            alt="SpaceBase logo"
            width={160}
            height={90}
          />
        </Link>
        <div className="flex flex-row gap-16 relative">
          <NavigationLink
            selected={hash === "#game-overview"}
            handleChangeHash={handleHashChange}
            href="#game-overview"
          >
            Game Overview
          </NavigationLink>
          <NavigationLink
            handleChangeHash={handleHashChange}
            selected={hash === "#game-world"}
            href="#game-world"
          >
            Game World
          </NavigationLink>
          <NavigationLink
            selected={hash === "#building-variants"}
            handleChangeHash={handleHashChange}
            href="#building-variants"
          >
            Building Variants
          </NavigationLink>
          <NavigationLink
            handleChangeHash={handleHashChange}
            href="#economy"
            selected={hash === "#economy"}
          >
            Economy
          </NavigationLink>
          <div
            className="h-[2px] w-[calc(100%+80px)] -ml-10 absolute bottom-[-12px] z-0"
            id="header-bottom-line"
          >
            <Image
              quality={100}
              src="/assets/Header Line Menu.png"
              alt=""
              sizes="(max-width: 768px) 100vw,"
              fill
              className="object-contain"
            />
          </div>
          {hash && (
            <div
              ref={pointerElementRef}
              className="absolute z-10 transition-all duration-300 bg-white w-14 h-[2px] bottom-[-12px]"
            />
          )}
        </div>
        <div className="flex flex-row gap-3 justify-end">
          <NavigationLink color="blue" href="/about">
            About
          </NavigationLink>
          <NavigationLink color="blue" href="/subscribe">
            Subscribe
          </NavigationLink>
        </div>
      </nav>
    </>
  );
};

export default Header;

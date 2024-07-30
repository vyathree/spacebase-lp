import Image from "next/image";

const Footer = () => {
  return (
    <div className="relative w-dvw h-28 flex items-center justify-center">
      <Image quality={100} src="/assets/Footer Text Box.png" alt="" fill />
      <p className="text-white text-sm lg:text-2xl">
        © 2024 SpaceBase - All rights reserved • Leal
      </p>
    </div>
  );
};

export default Footer;

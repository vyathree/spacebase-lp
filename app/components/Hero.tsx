import Button from "@/src/components/Button"
import Image from "next/image"

const Hero = () => {
  return (
    <div
      className="flex flex-col items-center container custom-max-width-xl text-center text-xl 
      md:text-3xl lg:text-4xl xl:text-[55px]"
    >
      <Image
        quality={100}
        data-aos="zoom-out-up"
        src={"/assets/animated_logo.gif"}
        alt="SpaceBase animated logo"
        width={320}
        height={320}
        className="mt-2 w-24 h-24 md:w-36 md:h-36 lg:w-80 lg:h-80 object-contain"
      />

      <p className="text-white" data-aos="fade-in" data-aos-delay="200">
        SpaceBase blends the frontier of decentralized finance
      </p>
      <p className="text-orange-700" data-aos="fade-in" data-aos-delay="500">
        with the thrill of intergalactic colonization
      </p>

      <p
        className="text-white text-sm xl:text-lg text-center w-[70%] mt-10"
        data-aos="fade-in"
        data-aos-delay="800"
      >
        It’s not just a DEX and Launchpad but an odyssey into a gamified
        universe. As users add liquidity, they aren’t merely participants in a
        financial ecosystem but also pioneers, establishing their space colonies
        tile-by-tile. Every liquidity pool becomes a part of their dominion, set
        against a mesmerizing backdrop of space-themed isometric pixel art.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
        <Button data-aos="zoom-in-left" data-aos-delay="900">
          Cta button
        </Button>
        <Button color="secondary" data-aos="zoom-in-right" data-aos-delay="900">
          Button
        </Button>
      </div>
    </div>
  )
}

export default Hero

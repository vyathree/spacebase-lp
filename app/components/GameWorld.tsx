import Image from "next/image";

const GameWorld = () => {
  return (
    <div
      id="game-world"
      className="container custom-max-width-xl items-center flex flex-col gap-4 pb-4 pt-10 md:pt-20"
    >
      <h3 className="text-2xl md:text-4xl lg:text-6xl text-white mb-4">
        Game&nbsp;
        <span className=" text-orange-600">World</span>
      </h3>

      <div
        className="relative px-5 py- w-full h-full overflow-hidden"
        data-aos="zoom-in-up"
        data-aos-delay="300"
      >
        <Image
          quality={100}
          src="/assets/Frame 3.png"
          sizes="(max-width: 768px) 100vw,"
          alt=""
          fill
          className="z-[-1] sticky top-0"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-5">
          <Image
            quality={100}
            src="/assets/gameworld_screen.webp"
            sizes="(max-width: 768px) 100vw,"
            alt=""
            className="w-full h-full object-contain"
            width={600}
            height={600}
          />

          <ul className="text-white list-disc px-6 py-4 lg:py-8 lg:px-10 text-base lg:text-3xl">
            <li>
              The game world is the place where players can interact with each
              other and the world around them.
            </li>
            <li>
              It can be a physical space, like a board game, or a virtual space,
              like a video game.
            </li>
            <li>
              Game worlds are often designed to be immersive and engaging, and
              they can provide players with a sense of escape from the real
              world.
            </li>
            <li>
              They can also be educational, teaching players about different
              cultures, historical events, or even scientific concepts.
            </li>
            <li>
              In short, game worlds are a fun and exciting way to learn and
              explore.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GameWorld;

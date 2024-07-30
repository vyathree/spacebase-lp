import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { PaginationOptions } from "swiper/types";
import SlideItem from "./genre-and-mechanics/SlideItem";
import "./genre-and-mechanics/styles.css";

const GenreAndMechanics = () => {
  const pagination: PaginationOptions = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return (
        '<span class="' +
        className +
        '">' +
        '<img class="active" src="/assets/Active Point.png"/>' +
        '<img class="non-active" src="/assets/Non-active Point.png"/>' +
        "</span>"
      );
    },
  };
  return (
    <div
      id="game-overview"
      className="relative flex flex-col container custom-max-width-xl items-center gap-5 w-full mb-4 pb-14"
    >
      <p
        data-aos="fade-up"
        className="text-white text-xl md:text-3xl lg:text-5xl text-center"
      >
        Genre &<br />
        <span className="text-orange-600 text-2xl md:text-4xl lg:text-6xl">
          Mechanics
        </span>
      </p>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="md:aspect-[1283/377] mb-3"
      >
        <SwiperSlide className="relative">
          <SlideItem
            title="Title Content"
            description="SpaceBase blends the frontier of decentralized finance with the
              thrill of intergalactic colonization. It’s not just a DEX and
              Launchpad but an odyssey into a gamified universe. As users add
              liquidity, they aren’t merely participants in a financial
              ecosystem but also pioneers, establishing their space colonies
              tile-by-tile. Every liquidity pool becomes a part of their
              dominion, set against a mesmerizing backdrop of space-themed
              isometric pixel art."
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideItem
            title="Title Content"
            description="SpaceBase blends the frontier of decentralized finance with the
              thrill of intergalactic colonization. It’s not just a DEX and
              Launchpad but an odyssey into a gamified universe. As users add
              liquidity, they aren’t merely participants in a financial
              ecosystem but also pioneers, establishing their space colonies
              tile-by-tile. Every liquidity pool becomes a part of their
              dominion, set against a mesmerizing backdrop of space-themed
              isometric pixel art."
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideItem
            title="Title Content"
            description="SpaceBase blends the frontier of decentralized finance with the
              thrill of intergalactic colonization. It’s not just a DEX and
              Launchpad but an odyssey into a gamified universe. As users add
              liquidity, they aren’t merely participants in a financial
              ecosystem but also pioneers, establishing their space colonies
              tile-by-tile. Every liquidity pool becomes a part of their
              dominion, set against a mesmerizing backdrop of space-themed
              isometric pixel art."
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideItem
            title="Title Content"
            description="SpaceBase blends the frontier of decentralized finance with the
              thrill of intergalactic colonization. It’s not just a DEX and
              Launchpad but an odyssey into a gamified universe. As users add
              liquidity, they aren’t merely participants in a financial
              ecosystem but also pioneers, establishing their space colonies
              tile-by-tile. Every liquidity pool becomes a part of their
              dominion, set against a mesmerizing backdrop of space-themed
              isometric pixel art."
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default GenreAndMechanics;

import Image from "next/image";
import BuildingVariantsItem from "./building-variants/BuildingVariantsItem";

const BuildingVariants = () => {
  return (
    <div
      id="building-variants"
      className="flex flex-col md:grid md:grid-cols-2 md:grid-rows-2 w-full container custom-max-width-xl gap-x-6 xl:gap-x-16 gap-y-6 pb-4 pt-14 md:pt-28"
    >
      <div className="flex flex-col md:flex-row gap-3 items-center">
        <div className="flex flex-col" data-aos="fade-in" data-aos-delay="100">
          <h3 className="text-xl md:text-3xl lg:text-5xl text-white mb-4">
            Building
            <br />
            <span className="text-2xl md:text-4xl lg:text-6xl text-orange-600">
              Variants
            </span>
          </h3>
          <p className="text-white text-xs md:text-sm lg:text-xl pr-4">
            Resources, when harvested or teleburned, can be converted into
            tradable ERC20 tokens and vice-versa. Players can utilize these
            resources for constructing various facilities, including mining
            outposts, human habitats, and animal habitats. The production yield
            of Liquidity Centers can be enhanced by the buildings that surround
            it, offering a strategic layer to construction decisions. Economy
            and Tokenomics
          </p>
        </div>
        <Image
          src="/assets/buildings/7.gif"
          alt=""
          width={400}
          height={400}
          className="w-full object-contain lg:mt-32"
        />
      </div>
      <BuildingVariantsItem
        building1="/assets/buildings/1.gif"
        building2="/assets/buildings/4.gif"
        title="Food"
        data-aos="fade-in"
        data-aos-delay="200"
        building1Title="Greenhouse"
        building2Title="Habitat"
      />
      <BuildingVariantsItem
        building1="/assets/buildings/2.gif"
        building2="/assets/buildings/5.gif"
        title="Power"
        data-aos="fade-in"
        data-aos-delay="300"
        building1Title="Coal Burning"
        building2Title="Turbine"
      />
      <BuildingVariantsItem
        building1="/assets/buildings/3.gif"
        building2="/assets/buildings/6.gif"
        title="Utility"
        data-aos="fade-in"
        data-aos-delay="400"
        building1Title="Research Center"
        building2Title="Trading Center"
      />
    </div>
  );
};

export default BuildingVariants;

"use client";
import { FunctionComponent, useEffect, useState } from "react";
import {
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
} from "recharts";
import {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";

const pieColor = {
  0: "#6b3835",
  1: "#542b2f",
  2: "#542b2f",
  3: "#2c5f98",
  4: "#311a24",
};

const EconomyAndTokens = () => {
  const [showChart, setShowChart] = useState(false);
  const data = [
    {
      name: "CEX Reserve",
      value: 5,
      description:
        "These funds are reserved to reward the hard work of the team and to fuel marketing efforts to promote the project.",
    },
    {
      name: "Team and Marketing Reserve",
      value: 5,
      description:
        "To raise initial capital, a portion is reserved for presale participants.",
    },
    {
      name: "Emission Reserve",
      value: 10,
      description:
        "For staking rewards, liquidity mining, and other promotional activities which require token emissions.",
    },
    {
      name: "Presale",
      value: 80,
      description:
        "To raise initial capital, a portion is reserved for presale participants.",
    },
  ];

  useEffect(() => {
    setShowChart(true);
  }, []);

  const CustomTooltip: FunctionComponent<TooltipProps<ValueType, NameType>> = ({
    active,
    payload,
    cursor,
    ...props
  }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="text-white bg-gray-800 px-6 py-3 rounded-md">
          {/* <h6>
            {data.name}: {data.value}%
          </h6> */}
          <p className="text-base lg:text-xl text-orange-600 ">{data.name}:</p>
          <p className="text-base lg:text-xl !leading-4">{data.description}</p>
        </div>
      );
    }
    return null;
  };

  const RADIAN = Math.PI / 180;

  const CustomLabel = ({
    x,
    y,
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    value,
    ...props
  }: any) => {
    // Override fill color based on data or other logic
    const radius = innerRadius + (outerRadius - innerRadius) * 0.47;
    const outerX = cx + radius * 2.7 * Math.cos(-midAngle * RADIAN);
    const outerY = cy + radius * 2.7 * Math.sin(-midAngle * RADIAN);
    const innerX = cx + radius * Math.cos(-midAngle * RADIAN);
    const innerY = cy + radius * Math.sin(-midAngle * RADIAN);
    return (
      <>
        <text
          x={value > 35 ? innerX : outerX}
          y={value > 35 ? innerY : outerY}
          dy={10}
          textAnchor="middle"
          fill={"white"}
          className="text-3xl xl:text-5xl"
        >
          {value}%
        </text>
        <circle
          cx={cx}
          cy={cy}
          r={outerRadius}
          fill="none"
          style={{
            filter: "drop-shadow(rgba(255, 255, 255, 0.3) 0px 0px 7px)",
          }}
          stroke="#2c5f98"
          strokeWidth={2}
        />
      </>
    );
  };
  return (
    <div
      id="economy"
      className="flex flex-col items-center container custom-max-width-xl pb-6 pt-14 md:pt-28"
      data-aos="fade-in"
    >
      <h3 className="text-white text-xl md:text-3xl lg:text-5xl">
        Economy & <span className="text-orange-600">Tokenomics</span>
      </h3>
      <p className="text-center text-white text-lg mb-6 mt-2">
        $Space total supply: 1 000 000 000 (1 Billion)
      </p>
      <div className="flex flex-col xl:flex-row w-full items-center gap-5  pb-6">
        {showChart && (
          <ResponsiveContainer width="100%" height={350}>
            <PieChart className="[&>svg]:overflow-visible ">
              <Pie
                dataKey="value"
                isAnimationActive={true}
                data={data}
                labelLine={false}
                stroke="#2c5f98"
                label={<CustomLabel />}
                className="overflow-visible "
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={pieColor[index as 0 | 1 | 2 | 3 | 4]}
                  />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} offset={35} />
            </PieChart>
          </ResponsiveContainer>
        )}
        <div
          className="relative px-6 py-4 shrink-0 w-full h-full max-w-[818px] max-h-[390px] overflow-hidden"
          data-aos="zoom-in-up"
          data-aos-delay="300"
        >
          <div className="overflow-y-auto w-full h-full max-w-[818px] max-h-[377px] custom-scrollbar">
            <p className="text-white text-xs md:text-sm lg:text-xl">
              <span className="text-sm md:text-lg lg:text-2xl text-orange-600">
                1. Liquidity Stakes and Returns:
              </span>{" "}
              Players stake liquidity for specific trading pairs to earn a
              portion of trading fees, relative to their share. As the backbone
              of the SpaceBase ecosystem, liquidity stakes determine not just
              returns but also in-game territorial influence through the
              Liquidity Centers. <br />
              <span className="text-sm md:text-lg lg:text-2xl text-orange-600">
                2. ERC20 Integration:
              </span>{" "}
              The game seamlessly integrates with the ERC20 token standard.
              Resources harvested in-game can be teleburned to transform into
              tradable ERC20 tokens. This allows players to leverage external
              decentralized exchanges or other platforms. Conversely, players
              can burn these tokens to secure in-game assets, providing
              liquidity and ensuring token circulation. <br />
              <span className="text-sm md:text-lg lg:text-2xl text-orange-600">
                3. Building Expenditures:
              </span>{" "}
              New constructions, like mining outposts, habitats, and Liquidity
              Centers, act as economic sinks. Players spend in-game resources or
              tokens to build and upgrade these structures, stimulating the
              game&apos;s internal economy and generating demand for resources.{" "}
              <br />
              <span className="text-sm md:text-lg lg:text-2xl text-orange-600">
                4. Strategic Resource Management:
              </span>{" "}
              Terrains with varying biomes offer diverse resources, introducing
              a strategic element to land acquisition and bartering.
              Resource-rich lands can be more sought after, potentially acting
              as hotspots for player interactions, trades, or disputes. <br />
              <span className="text-sm md:text-lg lg:text-2xl text-orange-600">
                5. Power Generation Methods:
              </span>{" "}
              Certain terrains, like underwater zones, offer unique
              power-generation methods. By harnessing water-specific power
              sources like tidal turbines or osmotic power generators, players
              can further diversify their resource portfolios and income
              streams. <br />
              <span className="text-sm md:text-lg lg:text-2xl text-orange-600">
                6. Game-to-Real-World Economy:
              </span>{" "}
              The integration with the Base Layer 2 Network and the use of valid
              signatures allow players to transition between the game&apos;s
              economy and the real-world crypto market smoothly. This
              interoperability provides genuine financial incentives, driving
              player engagement and commitment. <br />
              <span className="text-sm md:text-lg lg:text-2xl text-orange-600">
                7. Inflation and Deflation Mechanisms:
              </span>{" "}
              As the total ecosystem liquidity grows, early liquidity providers
              get diminishing tile radius and bonuses for the same stakes. This
              mechanism acts as a soft inflation control, rewarding early
              adopters and encouraging them to maintain their positions. <br />
              <span className="text-sm md:text-lg lg:text-2xl text-orange-600">
                8. Security & Transactional Integrity:
              </span>{" "}
              Employing a blend of on-chain and off-chain models ensures low
              transaction fees, reduced need for continuous user approvals, and
              heightened security. Players do not have to grant full
              transactional approval or rely on centralized custodial wallets,
              ensuring the security of their assets. <br />
              <span className="text-sm md:text-lg lg:text-2xl text-orange-600">
                9. Future Projections:
              </span>{" "}
              Anticipated updates, such as player character upgrades or PvP
              elements, could introduce additional sinks or economic incentives,
              further enriching the in-game economy and maintaining long-term
              player interest.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EconomyAndTokens;

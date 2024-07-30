import Image from "next/image";
import { FunctionComponent } from "react";

interface Props {
  title: string;
  description: string;
}

const SlideItem: FunctionComponent<Props> = ({ description, title }) => {
  return (
    <>
      <Image
        quality={100}
        src={"/assets/Frame 1.png"}
        alt=""
        fill
        className="w-full h-full object-fill md:!object-contain"
      />
      <div
        className="w-full h-full z-10 top-0 left-0 flex
   flex-col justify-center items-start px-10 xl:px-20 py-10 xl:py-20"
      >
        <h3 className="text-orange-600 text text-xl lg:text-[3rem] mb-4">
          {title}
        </h3>
        <p className="text-xs lg:text-lg xl:text-xl text-white text-start md:w-[300px] lg:w-[550px]">
          {description}
        </p>
      </div>
    </>
  );
};

export default SlideItem;

import Image from "next/image"
import { relative } from "path"
import { FunctionComponent, HTMLAttributes } from "react"

type Props = HTMLAttributes<HTMLDivElement> & {
  title: string
  building1: string
  building1Title: string
  building2: string
  building2Title: string
}

const BuildingVariantsItem: FunctionComponent<Props> = ({
  title,
  building1,
  building2,
  building1Title,
  building2Title,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-white text-xl md:text-3xl lg:text-5xl">{title}</h4>
      <div
        className="relative grid grid-cols-2 justify-around gap-14 px-10 aspect-[605/271] max-w-[605px] max-h-[271px]"
        {...props}
      >
          <Image
            quality={100}
            src="/assets/Frame 2.png"
            className="self-center"
            fill
            alt=""
            sizes="(max-width: 900px) 100vw,"
          />
        <div className="relative w-full">
          <Image
            src={building1}
            alt=""
            fill
            className="-mt-10 z-[1] object-contain object-bottom"
            unoptimized
          />
          <p className="absolute text-white bottom-3 left-1/2 -translate-x-1/2 text-sm lg:text-xl">
            {building1Title}
          </p>
        </div>

        <div className="relative w-full">
          <Image
            src={building2}
            alt=""
            fill
            className="-mt-10 z-[1] object-contain object-bottom"
            unoptimized
          />
          <p className="absolute text-white bottom-3 left-1/2 -translate-x-1/2  sm:text-sm lg:text-xl">
            {building2Title}
          </p>
        </div>
      </div>
    </div>
  )
}
export default BuildingVariantsItem

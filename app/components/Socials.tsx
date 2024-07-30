import Image from "next/image";
import Link from "next/link";

const Socials = () => {
  return (
    <div className="flex flex-row gap-6 justify-center pt-10 mb-16 container custom-max-width-xl">
      <Link href="#social" data-aos="zoom-in-up">
        <Image
          quality={100}
          src="/assets/Discord Icon.png"
          alt="Discord Icon"
          width={96}
          height={96}
        />
      </Link>
      <Link href="#social" data-aos="zoom-in-up" data-aos-delay="100">
        <Image
          quality={100}
          src="/assets/X Icon.png"
          alt=""
          width={96}
          height={96}
        />
      </Link>
      <Link href="#social" data-aos="zoom-in-up" data-aos-delay="200">
        <Image
          quality={100}
          src="/assets/Twitch Icon.png"
          alt=""
          width={96}
          height={96}
        />
      </Link>
      <Link href="#social" data-aos="zoom-in-up" data-aos-delay="300">
        <Image
          quality={100}
          src="/assets/Youtube Icon.png"
          alt=""
          width={96}
          height={96}
        />
      </Link>
    </div>
  );
};

export default Socials;

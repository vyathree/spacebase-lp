import Button from "@/src/components/Button";

const LearnMore = () => {
  return (
    <div className="flex flex-col items-center gap-3 pb-6 pt-14 md:pt-28">
      <h3
        className="text-orange-600 text-xl md:text-3xl lg:text-5xl"
        data-aos="fade-in"
      >
        Learn More
      </h3>
      <p
        data-aos="fade-in"
        data-aos-delay="100"
        className="text-white text-base lg:text-2xl"
      >
        Want to join us? Get in the Discord!
      </p>
      <Button data-aos="fade-in" data-aos-delay="150">
        Join the party
      </Button>
    </div>
  );
};

export default LearnMore;

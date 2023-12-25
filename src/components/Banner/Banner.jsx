import BannerText from "./BannerText/BannerText";
import Space from "./Space/Space";

const Banner = () => {
  return (
    <section className="m-0 flex align-center justify-around flex-col md:flex-row overflow-hidden bg-black mx-auto">
      <BannerText />
      <Space />
    </section>
  );
};

export default Banner;

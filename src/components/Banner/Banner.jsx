import BannerText from "./BannerText/BannerText";
import Space from "./Space/Space";

const Banner = () => {
  return (
    <div className="m-0 flex align-center justify-around overflow-hidden bg-black">
      <BannerText />
      <Space />
    </div>
  );
};

export default Banner;

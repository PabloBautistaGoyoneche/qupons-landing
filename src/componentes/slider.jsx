import "./css/slider.css";
import banner_landing_1 from "../assets/img/banner-landing-1.png";
import banner_landing_2 from "../assets/img/banner-landing-2.png";

const Slider = () => {
  return (
    <>
      <div className="slider">
        <img className="banner-computadora" src={banner_landing_1} />
        <img className="banner-tablets-celulares" src={banner_landing_2} />
      </div>
    </>
  );
};

export default Slider;

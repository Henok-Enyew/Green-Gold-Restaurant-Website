import { NavLink } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Hero() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enables automatic scrolling
    autoplaySpeed: 3000,
  };
  return (
    <div className="relative  h-screen">
      <div className="absolute inset-0 bg-[url('/img/bg-desktop.jpg')] bg-cover bg-center bg-fixed"></div>
      <div className="absolute inset-0 bg-black bg-opacity-60">
        <div className="py-36 sm:py-48 z-30 text-center px-2">
          <Slider {...settings}>
            <div>
              <p
                className="animate-slide font-thin text-lg text-white mb-4 sm:text-xl "
                data-aos="fade-up"
                data-aos-duration="800"
              >
                Green Gold Resturant
              </p>
              <p
                className="font-semibold text-5xl text-primary max-w-2xl mx-auto mb-6"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Where Every Bite and Sip Brings a Smile!
              </p>
              <p
                className="font-extralight text-gray-300 text-2xl  sm:text-3xl lg:text-2xl mb-24 sm:mb-48 lg:mb-32  pt-4"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                Delicious food, refreshing juices – all made to brighten your
                day
              </p>
            </div>
            <div>
              <p
                className="amharic-text animate-slide font-thin text-lg text-white mb-4 sm:text-xl "
                data-aos="fade-up"
                data-aos-duration="800"
              >
                ግሪን ጎልድ ሬስቶራንት
              </p>
              <p
                className="amharic-text font-semibold text-5xl text-primary max-w-2xl mx-auto mb-6 tracking-wider"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                በፈገግታ እሚመገቡበት እና እሚጎነጩበት ቦታ!
              </p>
              <p
                className="amharic-text font-extralight text-gray-300 text-2xl  sm:text-3xl lg:text-2xl mb-24 sm:mb-48 lg:mb-32   pt-4"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                ጣፋጭ ምግብ, ጥኡም ጁስ - ቀኖትን ለማሳመር
              </p>
            </div>
          </Slider>
          <NavLink
            to={"/menu"}
            className="uppercase border-[1px] border-primary-bold  px-6 py-2 text-primary text-lg sm:text-3xl lg:text-xl font-extralight transition-all duration-300 hover:bg-primary-bold hover:text-gray-900"
            data-aos="fade-down"
            // data-aos-offset="100"
            data-aos-once="true"
            data-aos-duration="1400"
          >
            Our Menu
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Hero;

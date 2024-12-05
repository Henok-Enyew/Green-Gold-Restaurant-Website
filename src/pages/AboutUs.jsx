import Footer from "../components/Footer";

function AboutUs() {
  return (
    <div>
      <div className="min-h-screen bg-bg-primary pt-24 w-full">
        <p className="text-3xl text-white text-center font-extralight pb-10">
          About us
        </p>
        <div className="flex flex-col pb-16 lg:pb-0 gap-y-8 lg:flex-row mx-auto gap-x-4 w-fit ">
          <img
            src="img/about-us-1.jpg"
            alt=""
            className="w-80 sm:w-[420px] opacity-75 lg:w-80"
          />
          <div className="w-80 shadow-md shadow-black sm:w-[420px] lg:w-80">
            <p className="text-center text-primary text-lg mt-8 mb-6 font-extralight sm:text-2xl lg:text-xl ">
              Traditional and Modern Foods
            </p>
            <p className="text-center px-3 py-5 text-gray-200 font-extralight sm:text-xl sm:leading-10 lg:leading-7 lg:text-base">
              We are dedicated to serving delicious, high-quality meals crafted
              with the freshest ingredients. Whether you&apos;re here for a
              quick bite, a cozy coffee, or a memorable dining experience, our
              team is committed to making every visit special. Discover a menu
              inspired by tradition and innovation, tailored to satisfy every
              palate. Join us for an unforgettable culinary journey!
            </p>
          </div>
          <img
            src="img/about-us-2.jpg"
            alt=""
            className="w-80 opacity-75 sm:w-[420px] lg:w-80"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;

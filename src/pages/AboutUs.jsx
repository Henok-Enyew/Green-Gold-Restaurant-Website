import Footer from "../components/Footer";

function AboutUs() {
  return (
    <div>
      <div className="min-h-screen bg-bg-primary pt-24 w-full">
        <p className="text-3xl text-white text-center font-extralight pb-10">
          About us
        </p>
        <div className="flex mx-auto gap-x-4 w-fit ">
          <img
            src="src/assets/about-us-1.jpg"
            alt=""
            className="w-80 opacity-75"
          />
          <div className="w-80 shadow-md shadow-black">
            <p className="text-center text-primary text-lg mt-8 mb-6 font-extralight ">
              Traditional and Modern Foods
            </p>
            <p className="text-center px-3 text-gray-200 font-extralight">
              We are dedicated to serving delicious, high-quality meals crafted
              with the freshest ingredients. Whether you&apos;re here for a
              quick bite, a cozy coffee, or a memorable dining experience, our
              team is committed to making every visit special. Discover a menu
              inspired by tradition and innovation, tailored to satisfy every
              palate. Join us for an unforgettable culinary journey!
            </p>
            <p></p>
          </div>
          <img
            src="src/assets/about-us-2.jpg"
            alt=""
            className="w-80 opacity-75"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;

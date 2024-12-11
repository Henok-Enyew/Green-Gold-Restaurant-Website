function Coffee() {
  return (
    <div className="relative  h-screen ">
      <img
        src="img/floating-coffee.png"
        alt="floating coffee"
        data-aos="fade-right"
        className="absolute -bottom-16 lg:left-0 -left-3 z-40 lg:w-48 w-24"
      />
      <img
        src="img/floating-coffee-1.png"
        alt="floating coffee"
        data-aos="fade-left"
        className="absolute lg:-bottom-8  -bottom-10 -right-4 z-40 lg:w-48 w-24"
      />
      <div className="absolute inset-0 bg-[url('/img/Coffe-Background.jpg')] bg-cover bg-center bg-fixed"></div>
      <div className="absolute inset-0 bg-black  bg-opacity-70 py-12 ">
        <p className="text-center text-primary text-3xl sm:text-4xl font-extralight mb-12 px-3">
          Coffee That Warms Your Soul
        </p>
        <div className="lg:w-2/3 w-5/6 border-[1px] border-primary flex  flex-col-reverse lg:flex-row mx-auto bg-bg-primary backdrop-blur-sm bg-opacity-35 overflow-hidden">
          <img
            src="img/Coffee-girl.jpg"
            alt="Coffee Girl"
            className="lg:w-[45%] w-full h-64 sm:h-[420px] object-top object-cover"
          />
          <div data-aos="fade-up" className="lg:px-10 px-2 lg:py-12 py-4">
            <h3 className="text-center text-primary text-lg sm:text-3xl font-extralight mb-6">
              We Have A Sweet Coffee
            </h3>
            <p className="text-center text-white lg:text-lg text-md  sm:text-2xl font-extralight my-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
              aliquid alias tempore temporibus laborum. Maxime quibusdam
              consectetur laboriosam voluptatum quam cupiditate perferendis nisi
              numquam impedit amet, nihil neque expedita illum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Coffee;

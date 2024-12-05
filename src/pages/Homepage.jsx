import { NavLink } from "react-router-dom";
import CardSpecial from "./CardSpecial";
import Footer from "../components/Footer";

function Homepage() {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="relative  h-screen">
        <div className="absolute inset-0 bg-[url('/img/bg-desktop.jpg')] bg-cover bg-center bg-fixed"></div>
        <div className="absolute inset-0 bg-black bg-opacity-60">
          <div className="py-36 sm:py-48 z-30 text-center px-2">
            <p className="font-thin text-lg text-white mb-4 sm:text-xl ">
              Green Gold Resturant
            </p>
            <p className="font-semibold text-5xl text-primary max-w-2xl mx-auto mb-6">
              Where Every Bite and Sip Brings a Smile!
            </p>
            <p className="font-extralight text-gray-300 text-2xl  sm:text-3xl lg:text-2xl mb-24 sm:mb-48 lg:mb-32  pt-4">
              Delicious food, refreshing juices – all made to brighten your day
            </p>
            <NavLink
              to={"/menu"}
              className="uppercase border-[1px] border-primary-bold  px-6 py-2 text-primary text-lg sm:text-3xl lg:text-xl font-extralight transition-all duration-300 hover:bg-primary-bold hover:text-gray-900"
            >
              Our Menu
            </NavLink>
          </div>
        </div>
      </div>
      <div className="bg-custom-gradient w-full h-auto py-12 lg:px-36   pb-32 relative overflow-x-hidden">
        <img
          src="img/leaf.png"
          alt="Decorative Leaf"
          className="absolute top-0  lg:-right-20 -right-12 w-32 lg:w-60 -rotate-45 opacity-75 "
        />
        <img
          src="img/floating-juice.png"
          alt="Decorative Leaf"
          className="absolute top-1/3 lg:-left-20 -left-10 lg:w-60 w-32 -z-0 "
        />
        <img
          src="img/floating-carrot.png"
          alt="Decorative Leaf"
          className="absolute bottom-0 lg:-right-16 -right-12 lg:w-60 w-32 "
        />

        <p className="text-center text-primary text-3xl sm:text-4xl font-extralight mb-32">
          Our specials
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 justify-center lg:grid-cols-3 lg:gap-y-32 gap-y-24">
          <CardSpecial
            name={"Special Firfir ስፔሻል ፍርፍር"}
            imgSrc={"img/special-firfir.png"}
            price={100}
          />
          <CardSpecial
            imgSrc={"img/special-siga-firfir.png"}
            name={"Special Firfir ስፔሻል ፍርፍር"}
            price={100}
          />
          <CardSpecial
            imgSrc={"img/special-siga-firfir.png"}
            name={"Fruit Panch ፍሩት ፓንች"}
            price={100}
            // imgStyle="!w-32 "
          />

          <CardSpecial
            imgSrc={"img/special-siga-firfir.png"}
            name={"Special Siga Firfir ስፔሻል ስጋ ፍርፍር"}
            price={250}
          />
          <CardSpecial
            imgSrc={"img/special-siga-firfir.png"}
            name={"Special Siga Firfir ስፔሻል ስጋ ፍርፍር"}
            price={250}
          />

          <CardSpecial
            imgSrc={"img/avocado-juice.png"}
            name={"Avocado Juice አቮካዶ ጁስ"}
            price={100}
          />
        </div>
      </div>
      <div className="relative  h-screen ">
        <img
          src="img/floating-coffee.png"
          alt="floating coffee"
          className="absolute -bottom-16 lg:left-0 -left-3 z-50 lg:w-48 w-24"
        />
        <img
          src="img/floating-coffee-1.png"
          alt="floating coffee"
          className="absolute lg:-bottom-8  -bottom-10 -right-4 z-50 lg:w-48 w-24"
        />
        <div className="absolute inset-0 bg-[url('/img/Coffe-Background.jpg')] bg-cover bg-center bg-fixed"></div>
        <div className="absolute inset-0 bg-black bg-opacity-70 py-12 ">
          <p className="text-center text-primary text-3xl sm:text-4xl font-extralight mb-12 px-3">
            Coffee That Warms Your Soul
          </p>
          <div className="lg:w-2/3 w-5/6 border-[1px] border-primary flex  flex-col-reverse lg:flex-row mx-auto bg-bg-primary bg-opacity-35 overflow-hidden">
            <img
              src="img/Coffee-girl.jpg"
              alt="Coffee Girl"
              className="lg:w-[45%] w-full h-64 sm:h-[420px] object-top object-cover"
            />
            <div className="lg:px-10 px-2 lg:py-12 py-4">
              <h3 className="text-center text-primary text-lg sm:text-3xl font-extralight mb-6">
                We Have A Sweet Coffee
              </h3>
              <p className="text-center text-white lg:text-lg text-md  sm:text-2xl font-extralight my-6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Suscipit aliquid alias tempore temporibus laborum. Maxime
                quibusdam consectetur laboriosam voluptatum quam cupiditate
                perferendis nisi numquam impedit amet, nihil neque expedita
                illum.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;

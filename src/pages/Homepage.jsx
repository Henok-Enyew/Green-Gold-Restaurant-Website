import { NavLink } from "react-router-dom";
import CardSpecial from "./CardSpecial";
import Footer from "../components/Footer";

function Homepage() {
  return (
    <div className="w-full">
      <div className="relative  h-screen">
        <div className="absolute inset-0 bg-[url('/img/bg-desktop.jpg')] bg-cover bg-center bg-fixed"></div>
        <div className="absolute inset-0 bg-black bg-opacity-60">
          <div className="py-36 z-30 text-center">
            <p className="font-thin text-lg text-white mb-4 ">
              Green Gold Resturant
            </p>
            <p className="font-semibold text-5xl text-primary max-w-2xl mx-auto mb-6">
              Where Every Bite and Sip Brings a Smile!
            </p>
            <p className="font-extralight text-gray-300 text-2xl mb-32">
              Delicious food, refreshing juices – all made to brighten your day
            </p>
            <NavLink
              to={"/menu"}
              className="uppercase border-[1px] border-primary-bold mt-28 px-6 py-2 text-primary text-lg font-extralight transition-all duration-300 hover:bg-primary-bold hover:text-gray-900"
            >
              Our Menu
            </NavLink>
          </div>
        </div>
      </div>
      <div className="bg-custom-gradient h-auto py-12 px-36 pb-32 relative overflow-x-hidden">
        <img
          src="img/leaf.png"
          alt="Decorative Leaf"
          className="absolute top-0 -right-20 w-60 -rotate-45 opacity-75 "
        />
        <img
          src="img/floating-juice.png"
          alt="Decorative Leaf"
          className="absolute top-1/3 -left-20 w-60 "
        />
        <img
          src="img/floating-carrot.png"
          alt="Decorative Leaf"
          className="absolute bottom-0 -right-16 w-60 "
        />

        <p className="text-center text-primary text-3xl font-extralight mb-32">
          Our specials
        </p>
        <div className="grid lg:grid-cols-3 gap-y-32">
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
          className="absolute -bottom-16 left-0 z-50 w-48"
        />
        <img
          src="img/floating-coffee-1.png"
          alt="floating coffee"
          className="absolute -bottom-8  -right-8 z-50 w-48"
        />
        <div className="absolute inset-0 bg-[url('/img/Coffe-Background.jpg')] bg-cover bg-center bg-fixed"></div>
        <div className="absolute inset-0 bg-black bg-opacity-70 py-12">
          <p className="text-center text-primary text-3xl font-extralight mb-12">
            Coffee That Warms Your Soul
          </p>
          <div className="w-2/3 border-[1px] border-primary flex mx-auto bg-bg-primary bg-opacity-35">
            <img
              src="img/Coffee-girl.jpg"
              alt="Coffee Girl"
              className="w-[45%]"
            />
            <div className="px-10 py-12">
              <h3 className="text-center text-primary text-lg font-extralight mb-6">
                We Have A Sweet Coffee
              </h3>
              <p className="text-center text-white text-lg font-extralight my-6">
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

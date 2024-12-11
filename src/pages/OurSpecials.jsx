import CardSpecial from "./CardSpecial";

function OurSpecials() {
  return (
    <div className=" bg-bg-primary w-full h-auto py-12 lg:px-36   pb-32 relative overflow-x-hidden">
      <img
        src="img/leaf.png"
        alt="Decorative Leaf"
        data-aos="fade-down-left"
        className="absolute top-0  lg:-right-20 -right-12 w-32 lg:w-60 !-rotate-45 !opacity-75  "
      />
      <img
        src="img/floating-juice.png"
        alt="Decorative Leaf"
        data-aos="fade-right"
        className="absolute top-1/3 lg:-left-20 -left-10 lg:w-60 w-32 -z-0 "
      />
      <img
        src="img/floating-carrot.png"
        alt="Decorative Leaf"
        data-aos="fade-left"
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
  );
}

export default OurSpecials;

import { NavLink } from "react-router-dom";
import Card from "./Card";
import Footer from "../components/Footer";

function Menu() {
  return (
    <div className="bg-bg-primary min-h-screen relative  ">
      <img
        src="img/menu-bg.png"
        alt=""
        data-aos="fade-right"
        className="w-[1000px] absolute top-64 -right-48 lg:-right-[440px]  blur-sm z-0"
      />
      <img
        src="img/menu-bg-2.png"
        alt=""
        data-aos="fade-right"
        className="w-48 absolute -left-5 bottom-1/2  blur-[1px] z-0"
      />
      <img
        src="img/floating-tomato.png"
        alt=""
        data-aos="fade-left"
        className="w-48 absolute -right-16 bottom-60  blur-[1px] z-0"
      />
      <div className="pt-20 lg:mx-auto ml-2 lg:ml-36 text-sm flex items-center justify-start gap-x-3 overflow-x-scroll lg:overflow-hidden whitespace-nowrap">
        <NavLink to={"/menu"} className="tabs ">
          All
        </NavLink>
        <NavLink to={"/menu"} className="tabs ">
          Fasting Foods
        </NavLink>
        <NavLink to={"/menu"} className="tabs ">
          Non Fasting Foods
        </NavLink>
        <NavLink to={"/menu"} className="tabs ">
          Juice
        </NavLink>
        <NavLink to={"/menu"} className="tabs ">
          Hot Drinks
        </NavLink>
        <NavLink to={"/menu"} className="tabs ">
          Soft Drinks
        </NavLink>
        <NavLink to={"/menu"} className="tabs ">
          Alcohol Drinks
        </NavLink>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 grid-cols-1 mx-auto mt-12 gap-x-0 gap-y-6 z-50 w-3/4  px-4 py-2 mb-16">
        <Card name={"Shiro Feses - ሽሮ ፈሰስ"} price={100} />
        <Card name={"Shiro Feses - ሽሮ ፈሰስ"} price={100} />
        <Card name={"Shiro Feses - ሽሮ ፈሰስ"} price={100} />
        <Card name={"Shiro Feses - ሽሮ ፈሰስ"} price={100} />
        <Card name={"Shiro Feses - ሽሮ ፈሰስ"} price={100} />
        <Card name={"Shiro Feses - ሽሮ ፈሰስ"} price={100} />
        <Card name={"Shiro Feses - ሽሮ ፈሰስ"} price={100} />
        <Card name={"Shiro Feses - ሽሮ ፈሰስ"} price={100} />
        <Card name={"Shiro Feses - ሽሮ ፈሰስ"} price={100} />
        <Card name={"Shiro Feses - ሽሮ ፈሰስ"} price={100} />
        <Card name={"Shiro Feses - ሽሮ ፈሰስ"} price={100} />
        <Card name={"Shiro Feses - ሽሮ ፈሰስ"} price={100} />
        <Card name={"Shiro Feses - ሽሮ ፈሰስ"} price={100} />
        <Card name={"Shiro Feses - ሽሮ ፈሰስ"} price={100} />
        <Card name={"Shiro Feses - ሽሮ ፈሰስ"} price={100} />
      </div>
      <Footer />
    </div>
  );
}

export default Menu;

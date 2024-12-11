import { BsTelegram } from "react-icons/bs";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Signup() {
  return (
    <div className="min-h-screen lg:h-screen  w-full bg-bg-primary flex  items-center justify-center overflow-hidden">
      <div className=" w-full flex flex-col lg:w-1/2 lg:flex-row-reverse mx-auto shadow-2xl">
        <img
          src="img/signup.jpg"
          alt="Login form image Green Gold Restaurant"
          className=" w-full h-72 object-cover sm:h-[620px] lg:h-auto  lg:w-[340px]"
          data-aos="fade-left"
        />

        <div className="lg:w-1/2 px-3 py-4" data-aos="fade-right">
          <p className="text-center text-gray-100  text-2xl lg:text-xl font-extralight">
            Sign up{" "}
          </p>
          <form action="" className="w-full mt-5 px-4">
            <div className="text-gray-300 text-lg lg:text-base  font-extralight w-full">
              <label htmlFor="" className="block">
                Your Full Name
              </label>
              <input
                type="text"
                name=""
                id=""
                className="mt-1 bg-slate-200 bg-opacity-20  focus:bg-opacity-30 outline-none px-3 py-1  w-full"
              />
            </div>
            <div className="text-gray-300 font-extralight text-lg lg:text-base ">
              <label htmlFor="" className="block">
                Your Phone
              </label>
              <input
                type="tel"
                name=""
                id=""
                className="mt-1 bg-slate-200 bg-opacity-20 focus:bg-opacity-30 outline-none px-3 py-1 w-64  w-full"
              />
            </div>
            <div className="text-gray-300 font-extralight text-lg lg:text-base ">
              <label htmlFor="" className="block">
                Your email
              </label>
              <input
                type="email"
                name=""
                id=""
                className="mt-1 bg-slate-200 bg-opacity-20 focus:bg-opacity-30 outline-none px-3 py-1 w-full"
              />
            </div>
            <div className="text-gray-300 font-extralight text-lg lg:text-base ">
              <label htmlFor="" className="block">
                Your password
              </label>
              <input
                type="password"
                name=""
                id=""
                className="mt-1 bg-slate-200 bg-opacity-20 focus:bg-opacity-30 outline-none px-3 py-1  w-full"
              />
            </div>
            <button
              type="submit"
              //   className="text-center bg-gray-800 w-full py-2 text-gray-200 mt-3 outline-none"
              className="bg-slate-300 text-gray-900 w-full text-center py-2 mt-6 transition-all duration-300 hover:bg-slate-100 text-xl lg:text-base "
            >
              Sign up &rarr;
            </button>
            <p className="text-gray-200 text-center font-extralight mt-2 text-lg lg:text-base ">
              Or signup with{" "}
            </p>
            <div className="mt-3 flex items-center justify-center gap-x-3">
              <button className="text-gray-400 transition-all duration-300 hover:text-gray-200">
                <BsTelegram className="size-9 lg:size-8" />
              </button>
              <button className="text-gray-400 transition-all duration-300 hover:text-gray-200">
                <FaGoogle className="size-9 lg:size-8" />
              </button>
              <button className="text-gray-400 transition-all duration-300 hover:text-gray-200">
                <FaFacebook className="size-9 lg:size-8" />
              </button>
            </div>

            <p className="text-gray-300 mt-2 font-light text-lg lg:text-base ">
              Already have an account?{" "}
              <NavLink
                to={"/login"}
                className="underline underline-offset-4 text-primary"
              >
                Login
              </NavLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;

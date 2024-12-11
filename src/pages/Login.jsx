import { BsTelegram } from "react-icons/bs";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Login() {
  return (
    <div className="min-h-screen lg:h-screen w-full bg-bg-primary flex  items-center justify-center overflow-hidden">
      <div className="w-full flex flex-col lg:flex-row lg:w-1/2 mx-auto shadow-2xl">
        <img
          src="img/login.jpg"
          alt="Login form image Green Gold Restaurant"
          className="w-full h-72 object-cover sm:h-[620px] lg:h-auto  lg:w-[340px]"
          data-aos="fade-left"
        />

        <div className="lg:w-1/2 px-3 py-4" data-aos="fade-right">
          <p className="text-center text-gray-100 text-2xl lg:text-xl font-extralight">
            Login
          </p>
          <form action="" className="mt-5 px-4">
            <div className="text-gray-300 text-lg lg:text-base font-extralight">
              <label htmlFor="" className="block">
                Your email
              </label>
              <input
                type="email"
                name=""
                id=""
                className="mt-2 bg-slate-200 bg-opacity-20 focus:bg-opacity-30 outline-none px-3 py-2 w-full"
              />
            </div>
            <div className="text-gray-300 text-lg lg:text-base font-extralight mt-4">
              <label htmlFor="" className="block">
                Your password
              </label>
              <input
                type="password"
                name=""
                id=""
                className="mt-2 bg-slate-200 bg-opacity-20 focus:bg-opacity-30 outline-none px-3 py-2 w-full"
              />
            </div>
            <button
              type="submit"
              className="bg-slate-300 text-gray-900 w-full text-center py-2 mt-6 transition-all duration-300 hover:bg-slate-100 text-xl lg:text-base"
            >
              Login &rarr;
            </button>
            <p className="text-gray-200 text-center font-extralight mt-5 text-lg lg:text-base">
              Or signin with{" "}
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

            <p className="text-gray-300 mt-9 font-light text-lg lg:text-base ">
              Dont have an account?{" "}
              <NavLink
                to={"/signup"}
                className="underline underline-offset-4 text-primary"
              >
                Sign up
              </NavLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

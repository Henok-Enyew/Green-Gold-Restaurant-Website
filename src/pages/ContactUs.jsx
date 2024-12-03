import Footer from "../components/Footer";
import RestaurantMap from "../components/RestaurantMap";

function ContactUs() {
  return (
    <div className="w-full">
      <div className="relative  h-96">
        <div className="absolute inset-0 bg-[url('/img/Bahirdar.jpg')] bg-cover bg-center bg-fixed"></div>
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center">
          <p className="text-center text-white text-4xl ">
            {" "}
            Come find us Bahirdar - Abay Mado - Diaspora
          </p>
          <div className="text-gray-200 mt-3">
            <div className="flex items-center gap-3 mt-3">
              <svg
                className="fill-primary w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
              >
                <path d="M221.59,160.3l-47.24-21.17a14,14,0,0,0-13.28,1.22,4.81,4.81,0,0,0-.56.42l-24.69,21a1.88,1.88,0,0,1-1.68.06c-15.87-7.66-32.31-24-40-39.65a1.91,1.91,0,0,1,0-1.68l21.07-25a6.13,6.13,0,0,0,.42-.58,14,14,0,0,0,1.12-13.27L95.73,34.49a14,14,0,0,0-14.56-8.38A54.24,54.24,0,0,0,34,80c0,78.3,63.7,142,142,142a54.25,54.25,0,0,0,53.89-47.17A14,14,0,0,0,221.59,160.3ZM176,210C104.32,210,46,151.68,46,80A42.23,42.23,0,0,1,82.67,38h.23a2,2,0,0,1,1.84,1.31l21.1,47.11a2,2,0,0,1,0,1.67L84.73,113.15a4.73,4.73,0,0,0-.43.57,14,14,0,0,0-.91,13.73c8.87,18.16,27.17,36.32,45.53,45.19a14,14,0,0,0,13.77-1c.19-.13.38-.27.56-.42l24.68-21a1.92,1.92,0,0,1,1.6-.1l47.25,21.17a2,2,0,0,1,1.21,2A42.24,42.24,0,0,1,176,210Z"></path>
              </svg>
              <p>+251-904-927-815</p>
            </div>
            <div className="flex items-center gap-3 mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="fill-primary w-6 h-6"
                viewBox="0 0 256 256"
              >
                <path d="M224,50H32a6,6,0,0,0-6,6V192a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A6,6,0,0,0,224,50Zm-96,85.86L47.42,62H208.58ZM101.67,128,38,186.36V69.64Zm8.88,8.14L124,148.42a6,6,0,0,0,8.1,0l13.4-12.28L208.58,194H47.43ZM154.33,128,218,69.64V186.36Z"></path>
              </svg>
              <p>henokenyew86@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary bg-opacity-35 text-gray-900 py-12">
        <p className="text-center text-gray-900 text-2xl py-11">Get in Touch</p>
        <div className="flex gap-x-12 w-1/2 mx-auto items-center">
          <img src="img/form.png" alt="" className="w-full" />
          <form
            action=""
            className="form-contact flex flex-col gap-y-3 justify-center w-full "
          >
            <label htmlFor="name">Full Name</label>
            <input type="text" name="" id="" placeholder="Abebe Bikela" />
            <label htmlFor="email">Your Email</label>
            <input type="email" placeholder="greengold@gmail.com" />
            <label htmlFor="">Your message:</label>
            <textarea
              name=""
              id=""
              className="max-h-32 min-h-12 px-2 py-1 outline-1 outline-primary-bold "
              placeholder="Your message"
            ></textarea>
            <button
              type="submit"
              className="text-gray-800 bg-primary-bold px-3 py-1"
            >
              Send
            </button>
          </form>
        </div>
      </div>
      <div className="bg-bg-primary pt-8 ">
        <p className="text-center text-white text-2xl mb-11">Find us on Maps</p>
        <RestaurantMap />
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;

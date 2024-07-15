import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandYoutube,
  IconLocationFilled,
  IconMail,
  IconMapPin,
  IconPhone,
} from "@tabler/icons-react";
import SectionTitle from "./SectionTitle";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 lg:px-2 max-w-6xl py-20">
      <SectionTitle title="Contact us" />

      <div className="mt-10 shadow-xl rounded-md p-4 grid grid-cols-2 gap-8 lg:p-6 xl:p-10">
        <h1 className="text-2xl col-span-2 mb-5">Leave us a message</h1>
        <form className="  grid grid-cols-1 gap-5  col-span-2 lg:col-span-1">
          <input
            type="text"
            placeholder="Name"
            className="p-3 px-3 border border-gray-400 rounded-md outline-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 px-3 border border-gray-400 rounded-md outline-blue-500 my-2"
          />
          <textarea
            placeholder="Briefly describe your project"
            className="p-2 px-3 min-h-44 border border-gray-400 rounded-md outline-blue-500"
          ></textarea>
          <button className="bg-blue-600 w-fit min-w-40 px-8 py-2 rounded-md text-white font-semibold">
            Send
          </button>
        </form>
        <div className=" col-span-2 lg:col-span-1 flex flex-col gap-5">
          <a href="" className="flex gap-4 items-center">
            <IconMapPin size={32} className="text-blue-600" />
            <p>Ташкент, Мирзо-Улугбекский район, 5-й пр. Курган, 32 адрес</p>
          </a>
          <a href="tel:+998336600999" className="flex gap-4 items-center">
            <IconPhone size={32} className="text-blue-600" />
            <p>+998 33 66 00 999</p>
          </a>
          <a href="" className="flex gap-4 items-center">
            <IconMail size={32} className="text-blue-600" />
            <p>azizbek.b@udevs.io</p>
          </a>
          <a
            href="https://t.me/azizbekbakhodirov"
            className="flex gap-4 items-center"
          >
            <IconLocationFilled size={32} className="text-blue-600" />
            <p className="text-blue-600">t.me/azizbekbakhodirov</p>
          </a>
          <div className="flex items-center justify-start gap-5 text-blue-600">
            <a href="">
              <IconBrandYoutube />
            </a>
            <a href="">
              <IconBrandInstagram />
            </a>
            <a href="">
              <IconBrandFacebook />
            </a>
            <a href="">
              <IconBrandTwitter />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

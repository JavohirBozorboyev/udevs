import { Link } from "react-router-dom";
import Logo from "../../assets/Logo";
import {
  IconBrandInstagram,
  IconBrandTwitterFilled,
  IconBrandYoutubeFilled,
} from "@tabler/icons-react";

const AppFooter = () => {
  return (
    <div className="bg-sky-50 py-20 pb-8">
      <div className="container mx-auto max-w-6xl px-4 lg:px-2">
        <div className="flex items-center justify-center">
          <Logo />
        </div>
        <div className="mt-10 flex justify-between flex-wrap gap-5 items-start">
          <div className=" col-span-12 md:col-span-6 lg:col-span-4">
            <h1 className="text-xl font-semibold text-zinc-800">About us</h1>
            <div className="mt-10 grid grid-cols-1 gap-2">
              {aboutLink.map((item, i) => {
                return (
                  <Link
                    to={"/"}
                    key={i}
                    className="text-blue-600 hover:underline"
                  >
                    {item.title}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className=" col-span-12 md:col-span-6 lg:col-span-4">
            <h1 className="text-xl font-semibold text-zinc-800">Services</h1>
            <div className="mt-10 grid grid-cols-1 gap-2">
              {srvicesLink.map((item, i) => {
                return (
                  <Link
                    to={"/"}
                    key={i}
                    className="text-blue-600 hover:underline"
                  >
                    {item.title}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className=" col-span-12 md:col-span-6 lg:col-span-4">
            <h1 className="text-xl font-semibold text-zinc-800">Portfolio</h1>
            <div className="mt-10 grid grid-cols-1 gap-2">
              {portfolioLink.map((item, i) => {
                return (
                  <Link
                    to={"/"}
                    key={i}
                    className="text-blue-600 hover:underline"
                  >
                    {item.title}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <div className="border-t-2 mt-10 border-blue-200 flex items-center justify-between gap-5 flex-wrap pt-8">
          <p className="text-blue-500">© 2024 Udevs. All rights reserved</p>
          <div className="flex gap-4 items-center">
            <a
              href=""
              className="p-2 bg-blue-100 inline-block rounded-full text-blue-500 hover:scale-105 duration-300"
            >
              <IconBrandInstagram />
            </a>
            <a
              href=""
              className="p-2 bg-blue-100 inline-block rounded-full text-blue-500 hover:scale-105 duration-300"
            >
              <IconBrandTwitterFilled />
            </a>
            <a
              href=""
              className="p-2 bg-blue-100 inline-block rounded-full text-blue-500 hover:scale-105 duration-300"
            >
              <IconBrandYoutubeFilled />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppFooter;

const aboutLink = [
  {
    title: "Diriction",
    value: "#",
  },
  {
    title: "Command",
    value: "#",
  },
  {
    title: "Tools",
    value: "#",
  },
  {
    title: "Clients",
    value: "#",
  },
];

const srvicesLink = [
  {
    title: "Development of mobile applications",
    value: "#",
  },
  {
    title: "Development and implementation ERP systems",
    value: "#",
  },
  {
    title: "User interface, User experience design",
    value: "#",
  },
  {
    title: "IT consulting",
    value: "#",
  },
  {
    title: "Optimization IT consulting infrastructure",
    value: "#",
  },
];

const portfolioLink = [
  {
    title: "Delever",
    value: "#",
  },
  {
    title: "Sms.uz",
    value: "#",
  },
  {
    title: "Goodzone",
    value: "#",
  },
  {
    title: "Iman",
    value: "#",
  },
];

import SectionTitle from "../other/SectionTitle";
import MobileImg from "../../assets/smsuz_app.png";
import { IconMail } from "@tabler/icons-react";

const SmsSection = () => {
  return (
    <div>
      <div className="container mx-auto px-4 lg:px-2 max-w-6xl py-20">
        <SectionTitle title="Smsuz.uz" className={"font-extrabold"} />

        <div className="flex  flex-col-reverse lg:flex-row gap-5 lg:gap-10 xl:gap-20 mt-5">
          <div className=" lg:w-1/2">
            <span className="bg-blue-100 p-2 rounded-full text-blue-600 px-6 mb-10  lg:flex items-center gap-2 w-fit hidden">
              <IconMail />
              Delivery
            </span>
            <p className=" lg:text-xl">
              Smsuz.uz - It is a platform for bulk SMS messaging.
            </p>
            <h2 className="mt-8 text-zinc-800 text-2xl font-semibold">
              What we did?
            </h2>
            <div className="grid grid-cols-12 gap-2 lg:gap-5 mt-5">
              {platformData.map((item, i) => {
                return (
                  <div
                    key={i}
                    className="bg-blue-50 col-span-4 p-3 rounded-lg flex flex-col lg:gap-3"
                  >
                    <div>
                      <svg
                        width="59"
                        height="56"
                        viewBox="0 0 59 56"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className=""
                        dangerouslySetInnerHTML={{ __html: item.icon }}
                      ></svg>
                    </div>
                    <h1 className="text-xs sm:text-sm lg:text-lg  font-semibold text-zinc-800 ">
                      {item.title}
                    </h1>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="lg:w-1/2">
            <span className="bg-blue-100 p-2 rounded-full text-blue-600 px-6 mb-10  flex items-center gap-2 w-fit lg:hidden">
              <IconMail />
              Delivery
            </span>
            <img src={MobileImg} alt="" className="w-full rounded-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmsSection;

const platformData = [
  {
    title: "Website",
    icon: `<path d="M28 49C39.598 49 49 39.598 49 28C49 16.402 39.598 7 28 7C16.402 7 7 16.402 7 28C7 39.598 16.402 49 28 49Z" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8.40039 21H47.6004" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8.40039 35H47.6004" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M26.8332 7C22.9023 13.2991 20.8184 20.575 20.8184 28C20.8184 35.425 22.9023 42.7009 26.8332 49" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M29.167 7C33.0979 13.2991 35.1818 20.575 35.1818 28C35.1818 35.425 33.0979 42.7009 29.167 49" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>`,
  },
  {
    title: "Admin panel",
    icon: `<path d="M32.6667 18.6668C35.244 18.6668 37.3333 16.5775 37.3333 14.0002C37.3333 11.4228 35.244 9.3335 32.6667 9.3335C30.0893 9.3335 28 11.4228 28 14.0002C28 16.5775 30.0893 18.6668 32.6667 18.6668Z" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9.33301 14H27.9997" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M37.333 14H46.6663" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M18.6667 32.6668C21.244 32.6668 23.3333 30.5775 23.3333 28.0002C23.3333 25.4228 21.244 23.3335 18.6667 23.3335C16.0893 23.3335 14 25.4228 14 28.0002C14 30.5775 16.0893 32.6668 18.6667 32.6668Z" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9.33301 28H13.9997" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M23.333 28H46.6663" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M39.6667 46.6668C42.244 46.6668 44.3333 44.5775 44.3333 42.0002C44.3333 39.4228 42.244 37.3335 39.6667 37.3335C37.0893 37.3335 35 39.4228 35 42.0002C35 44.5775 37.0893 46.6668 39.6667 46.6668Z" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9.33301 42H34.9997" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M44.333 42H46.6663" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>`,
  },
  {
    title: "Crossplatform",
    icon: `<rect width="59" height="56" fill="#C4C4C4" fill-opacity="0.01"/>
  <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M43.0613 7.72724H23.4178V40.3493H43.0613V7.72724ZM23.4178 5C21.8079 5 20.5029 6.22106 20.5029 7.72724V40.3493C20.5029 41.8555 21.8079 43.0766 23.4178 43.0766H43.0613C44.6711 43.0766 45.9761 41.8555 45.9761 40.3493V7.72724C45.9761 6.22106 44.6711 5 43.0613 5H23.4178Z" fill="#1B5BF7"/>
  <path d="M6.32031 17.3781C6.32031 14.3656 8.93034 11.9236 12.15 11.9236H26.3878C29.6074 11.9236 32.2175 14.3656 32.2175 17.3781V44.5457C32.2175 47.558 29.6074 50.0001 26.3878 50.0001H12.15C8.93034 50.0001 6.32031 47.558 6.32031 44.5457V17.3781Z" fill="white" fill-opacity="0.01"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M26.3878 14.6508H12.15C10.5402 14.6508 9.23514 15.8719 9.23514 17.3781V44.5457C9.23514 46.0518 10.5402 47.2729 12.15 47.2729H26.3878C27.9976 47.2729 29.3027 46.0518 29.3027 44.5457V17.3781C29.3027 15.8719 27.9976 14.6508 26.3878 14.6508ZM12.15 11.9236C8.93034 11.9236 6.32031 14.3656 6.32031 17.3781V44.5457C6.32031 47.558 8.93034 50.0001 12.15 50.0001H26.3878C29.6074 50.0001 32.2175 47.558 32.2175 44.5457V17.3781C32.2175 14.3656 29.6074 11.9236 26.3878 11.9236H12.15Z" fill="#1B5BF7"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M24.2021 45.3847H14.9531V42.6575H24.2021V45.3847Z" fill="#1B5BF7"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M26.5404 27.1342C25.2701 28.8878 23.5016 31.3287 19.999 31.3287V28.6015C21.8401 28.6015 22.7955 27.438 24.2402 25.4488C24.2767 25.3985 24.3136 25.3477 24.3509 25.2961C25.6212 23.5426 27.3896 21.1016 30.8923 21.1016C34.3949 21.1016 36.1633 23.5426 37.4336 25.2961C37.471 25.3477 37.5078 25.3985 37.5443 25.4488C38.989 27.438 39.9444 28.6015 41.7855 28.6015C43.6266 28.6015 44.5821 27.438 46.0266 25.4488C46.0632 25.3985 46.1 25.3477 46.1373 25.2961C47.4077 23.5426 49.1761 21.1016 52.6787 21.1016V23.8288C50.8376 23.8288 49.8822 24.9923 48.4376 26.9816C48.4011 27.0318 48.3643 27.0827 48.327 27.1342C47.0565 28.8878 45.2882 31.3287 41.7855 31.3287C38.2829 31.3287 36.5145 28.8878 35.2441 27.1342C35.2068 27.0827 35.1699 27.0318 35.1334 26.9816C33.6888 24.9923 32.7334 23.8288 30.8923 23.8288C29.0511 23.8288 28.0957 24.9923 26.6511 26.9816C26.6146 27.0318 26.5777 27.0827 26.5404 27.1342Z" fill="#1B5BF7"/>`,
  },
];

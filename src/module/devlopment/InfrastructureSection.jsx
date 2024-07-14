import SectionTitle from "../other/SectionTitle";
import MobileImg from "../../assets/desktop.png";
import MobileImgBg from "../../assets/bg_pattern.png";
const InfrastructureSection = () => {
  return (
    <div className="bg-sky-50 py-20">
      <div className="container mx-auto px-4 lg:px-2 max-w-6xl">
        <SectionTitle
          title="Optimization Infrastructure"
          className={"w-full lg:w-1/2"}
        />{" "}
        <div className="flex  flex-col-reverse lg:flex-row gap-5 lg:gap-10 xl:gap-20 mt-16">
          <div
            className="lg:w-1/2 relative flex items-center justify-center rounded-3xl py-16"
            style={{
              background: `url(${MobileImgBg})`,
              backgroundSize: "cover",
            }}
          >
            <img src={MobileImg} alt="" className="" />
          </div>
          <div className=" lg:w-1/2">
            <p className="text-center md:text-left lg:text-xl">
              Our experienced professionals will help you optimize your
              infrastructure
            </p>
            <div className="grid grid-cols-12 gap-2 lg:gap-5 mt-10">
              {platformData.map((item, i) => {
                return (
                  <div
                    key={i}
                    className="bg-blue-100 col-span-4 p-4 rounded-lg flex flex-col gap-3"
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
                    <h1 className="text-xs sm:text-sm md:text-lg  font-semibold text-zinc-800 ">
                      {item.title}
                    </h1>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfrastructureSection;

const platformData = [
  {
    title: "Architecture",
    icon: `<path d="M11.6663 9.3335H44.333C44.9518 9.3335 45.5453 9.57933 45.9829 10.0169C46.4205 10.4545 46.6663 11.048 46.6663 11.6668V23.3335C46.6663 23.9523 46.4205 24.5458 45.9829 24.9834C45.5453 25.421 44.9518 25.6668 44.333 25.6668H27.9997C27.3808 25.6668 26.7873 25.9127 26.3498 26.3502C25.9122 26.7878 25.6663 27.3813 25.6663 28.0002V44.3335C25.6663 44.9523 25.4205 45.5458 24.9829 45.9834C24.5453 46.421 23.9518 46.6668 23.333 46.6668H11.6663C11.0475 46.6668 10.454 46.421 10.0164 45.9834C9.57884 45.5458 9.33301 44.9523 9.33301 44.3335V11.6668C9.33301 11.048 9.57884 10.4545 10.0164 10.0169C10.454 9.57933 11.0475 9.3335 11.6663 9.3335" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.33301 18.6665H13.9997" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.33301 28H16.333" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.33301 37.3335H13.9997" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.667 9.3335V14.0002" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M28 9.3335V16.3335" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M37.333 9.3335V14.0002" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>`,
  },
  {
    title: "Auto testing",
    icon: `<path d="M35.0003 18.6665H21.0003C19.7117 18.6665 18.667 19.7112 18.667 20.9998V34.9998C18.667 36.2885 19.7117 37.3332 21.0003 37.3332H35.0003C36.289 37.3332 37.3337 36.2885 37.3337 34.9998V20.9998C37.3337 19.7112 36.289 18.6665 35.0003 18.6665Z" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 18.6665H9.33333" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 37.3335H9.33333" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.667 7V9.33333" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M37.333 7V9.33333" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M46.667 18.6665H49.0003" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M46.667 37.3335H49.0003" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.667 46.6665V48.9998" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M37.333 46.6665V48.9998" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
`,
  },
  {
    title: "Stress testing",
    icon: `<path d="M16.3337 41.9998C13.4224 41.9998 10.6303 40.8936 8.57161 38.9244C6.51298 36.9553 5.35645 34.2846 5.35645 31.4998C5.35645 28.715 6.51298 26.0443 8.57161 24.0752C10.6303 22.1061 13.4224 20.9998 16.3337 20.9998C17.0213 17.9366 19.0328 15.2446 21.9258 13.5161C23.3582 12.6603 24.9639 12.0667 26.6512 11.7694C28.3385 11.4721 30.0743 11.4767 31.7596 11.7831C33.4449 12.0896 35.0467 12.6917 36.4734 13.5553C37.9001 14.4188 39.1239 15.5268 40.0748 16.816C41.0258 18.1052 41.6853 19.5503 42.0156 21.0689C42.346 22.5874 42.3408 24.1497 42.0004 25.6665H44.3337C46.4997 25.6665 48.5769 26.5269 50.1084 28.0584C51.64 29.59 52.5004 31.6672 52.5004 33.8331C52.5004 35.9991 51.64 38.0763 50.1084 39.6078C48.5769 41.1394 46.4997 41.9998 44.3337 41.9998H42.0004" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M30.3337 32.6665L25.667 41.9998H32.667L28.0003 51.3332" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>`,
  },
  {
    title: "Load testing",
    icon: `<path d="M23.3337 7.46646C19.6836 8.31262 16.3265 10.1199 13.6104 12.7009C10.8943 15.2819 8.91819 18.5426 7.88705 22.1447C6.85592 25.7469 6.80731 29.5593 7.74626 33.1865C8.68521 36.8138 10.5775 40.1238 13.2269 42.7732C15.8763 45.4226 19.1863 47.3149 22.8136 48.2539C26.4408 49.1928 30.2533 49.1442 33.8554 48.1131C37.4575 47.0819 40.7182 45.1058 43.2992 42.3897C45.8802 39.6737 47.6875 36.3165 48.5336 32.6665C48.5336 32.0476 48.2878 31.4541 47.8502 31.0165C47.4126 30.579 46.8192 30.3331 46.2003 30.3331H30.3337C29.096 30.3331 27.909 29.8415 27.0338 28.9663C26.1587 28.0911 25.667 26.9041 25.667 25.6665V9.33313C25.638 9.05669 25.5544 8.78875 25.4211 8.54486C25.2878 8.30096 25.1073 8.08596 24.8903 7.91232C24.6732 7.73868 24.4239 7.60986 24.1567 7.53333C23.8895 7.45679 23.6097 7.43406 23.3337 7.46646Z" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M35 8.1665C37.9627 9.2097 40.6536 10.9042 42.8746 13.1252C45.0956 15.3462 46.7901 18.0372 47.8333 20.9998H37.3333C36.7145 20.9998 36.121 20.754 35.6834 20.3164C35.2458 19.8788 35 19.2853 35 18.6665V8.1665Z" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>`,
  },
  {
    title: "Devops",
    icon: `<path d="M22.932 21.4012C21.6269 20.0956 19.9638 19.2064 18.1533 18.8461C16.3427 18.4857 14.4659 18.6704 12.7603 19.3767C11.0547 20.083 9.59688 21.2793 8.57119 22.8142C7.54551 24.3491 6.99805 26.1538 6.99805 27.9998C6.99805 29.8459 7.54551 31.6505 8.57119 33.1855C9.59688 34.7204 11.0547 35.9167 12.7603 36.623C14.4659 37.3293 16.3427 37.514 18.1533 37.1536C19.9638 36.7933 21.6269 35.9041 22.932 34.5985C25.0031 32.7203 26.7197 30.4853 28 27.9998C29.2804 25.5144 30.997 23.2793 33.068 21.4012C34.3732 20.0956 36.0363 19.2064 37.8468 18.8461C39.6574 18.4857 41.5342 18.6704 43.2398 19.3767C44.9454 20.083 46.4032 21.2793 47.4289 22.8142C48.4546 24.3491 49.002 26.1538 49.002 27.9998C49.002 29.8459 48.4546 31.6505 47.4289 33.1855C46.4032 34.7204 44.9454 35.9167 43.2398 36.623C41.5342 37.3293 39.6574 37.514 37.8468 37.1536C36.0363 36.7933 34.3732 35.9041 33.068 34.5985C30.997 32.7203 29.2804 30.4853 28 27.9998C26.7197 25.5144 25.0031 23.2793 22.932 21.4012" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>`,
  },
  {
    title: "Cloud",
    icon: `<path d="M16.3337 41.9998C13.4224 41.9998 10.6303 40.8936 8.57161 38.9244C6.51298 36.9553 5.35645 34.2846 5.35645 31.4998C5.35645 28.715 6.51298 26.0443 8.57161 24.0752C10.6303 22.1061 13.4224 20.9998 16.3337 20.9998C17.0213 17.9366 19.0328 15.2446 21.9258 13.5161C23.3582 12.6603 24.9639 12.0667 26.6512 11.7694C28.3385 11.4721 30.0743 11.4767 31.7596 11.7831C33.4449 12.0896 35.0467 12.6917 36.4734 13.5553C37.9001 14.4188 39.1239 15.5268 40.0748 16.816C41.0258 18.1052 41.6853 19.5503 42.0156 21.0689C42.346 22.5874 42.3408 24.1497 42.0004 25.6665H44.3337C46.4997 25.6665 48.5769 26.5269 50.1084 28.0584C51.64 29.59 52.5004 31.6672 52.5004 33.8331C52.5004 35.9991 51.64 38.0763 50.1084 39.6078C48.5769 41.1394 46.4997 41.9998 44.3337 41.9998H16.3337Z" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>`,
  },
  {
    title: "CI / CD",
    icon: `<path d="M13.9997 18.6668C16.577 18.6668 18.6663 16.5775 18.6663 14.0002C18.6663 11.4228 16.577 9.3335 13.9997 9.3335C11.4223 9.3335 9.33301 11.4228 9.33301 14.0002C9.33301 16.5775 11.4223 18.6668 13.9997 18.6668Z" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M41.9997 46.6668C44.577 46.6668 46.6663 44.5775 46.6663 42.0002C46.6663 39.4228 44.577 37.3335 41.9997 37.3335C39.4223 37.3335 37.333 39.4228 37.333 42.0002C37.333 44.5775 39.4223 46.6668 41.9997 46.6668Z" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M25.667 14H37.3337C38.5713 14 39.7583 14.4917 40.6335 15.3668C41.5087 16.242 42.0003 17.429 42.0003 18.6667V37.3333" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M32.667 21L25.667 14L32.667 7" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M30.3333 41.9998H18.6667C17.429 41.9998 16.242 41.5082 15.3668 40.633C14.4917 39.7578 14 38.5708 14 37.3332V18.6665" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M23.333 35L30.333 42L23.333 49" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>`,
  },
];

import SectionTitle from "../other/SectionTitle";
import MobileImg from "../../assets/consulting.svg";

const ConsultingSection = () => {
  return (
    <div>
      <div className="container mx-auto px-4 lg:px-2 max-w-6xl py-20">
        <SectionTitle title="IT consulting" />

        <div className="flex  flex-col-reverse lg:flex-row gap-5 lg:gap-10 xl:gap-20 mt-16">
          <div className=" lg:w-1/2">
            <p className="text-center md:text-left lg:text-xl">
              We can improve the qualifications of your employees thereby
              increasing the efficiency of your company
            </p>
            <div className="grid grid-cols-12 gap-2 lg:gap-5 mt-10">
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
            <img src={MobileImg} alt="" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultingSection;

const platformData = [
  {
    title: "Frontend",
    icon: `<path d="M44.333 9.3335H11.6663C10.3777 9.3335 9.33301 10.3782 9.33301 11.6668V44.3335C9.33301 45.6222 10.3777 46.6668 11.6663 46.6668H44.333C45.6217 46.6668 46.6663 45.6222 46.6663 44.3335V11.6668C46.6663 10.3782 45.6217 9.3335 44.333 9.3335Z" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.33301 18.6665H46.6663" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.667 9.3335V18.6668" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>`,
  },
  {
    title: "Backend",
    icon: `<path d="M16.3333 18.6665L7 27.9998L16.3333 37.3332" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M39.667 18.6665L49.0003 27.9998L39.667 37.3332" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M32.6663 9.3335L23.333 46.6668" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>`,
  },
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
    title: "DevOps",
    icon: `<path d="M22.932 21.4012C21.6269 20.0956 19.9638 19.2064 18.1533 18.8461C16.3427 18.4857 14.4659 18.6704 12.7603 19.3767C11.0547 20.083 9.59688 21.2793 8.57119 22.8142C7.54551 24.3491 6.99805 26.1538 6.99805 27.9998C6.99805 29.8459 7.54551 31.6505 8.57119 33.1855C9.59688 34.7204 11.0547 35.9167 12.7603 36.623C14.4659 37.3293 16.3427 37.514 18.1533 37.1536C19.9638 36.7933 21.6269 35.9041 22.932 34.5985C25.0031 32.7203 26.7197 30.4853 28 27.9998C29.2804 25.5144 30.997 23.2793 33.068 21.4012C34.3732 20.0956 36.0363 19.2064 37.8468 18.8461C39.6574 18.4857 41.5342 18.6704 43.2398 19.3767C44.9454 20.083 46.4032 21.2793 47.4289 22.8142C48.4546 24.3491 49.002 26.1538 49.002 27.9998C49.002 29.8459 48.4546 31.6505 47.4289 33.1855C46.4032 34.7204 44.9454 35.9167 43.2398 36.623C41.5342 37.3293 39.6574 37.514 37.8468 37.1536C36.0363 36.7933 34.3732 35.9041 33.068 34.5985C30.997 32.7203 29.2804 30.4853 28 27.9998C26.7197 25.5144 25.0031 23.2793 22.932 21.4012" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>`,
  },
  {
    title: "UX/UI",
    icon: `<path d="M42.0003 9.3335H23.3337C20.7563 9.3335 18.667 11.4228 18.667 14.0002V32.6668C18.667 35.2442 20.7563 37.3335 23.3337 37.3335H42.0003C44.5777 37.3335 46.667 35.2442 46.667 32.6668V14.0002C46.667 11.4228 44.5777 9.3335 42.0003 9.3335Z" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M32.6663 18.6665H13.9997C11.4223 18.6665 9.33301 20.7558 9.33301 23.3332V41.9998C9.33301 44.5772 11.4223 46.6665 13.9997 46.6665H32.6663C35.2437 46.6665 37.333 44.5772 37.333 41.9998V23.3332C37.333 20.7558 35.2437 18.6665 32.6663 18.6665Z" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>`,
  },
  {
    title: "QA",
    icon: `<path d="M37.3338 9.3335L44.3338 16.3335L15.5171 45.1502C14.5889 46.0784 13.3299 46.5999 12.0171 46.5999C10.7044 46.5999 9.44539 46.0784 8.51713 45.1502C7.58887 44.2219 7.06738 42.9629 7.06738 41.6502C7.06738 40.3374 7.58887 39.0784 8.51713 38.1502L37.3338 9.3335" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M23.333 23.3335H37.333" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M44.3337 35L47.8337 38.7333C48.4277 39.4069 48.8147 40.2376 48.9484 41.1257C49.082 42.0137 48.9565 42.9215 48.587 43.7401C48.2175 44.5586 47.6197 45.2532 46.8652 45.7404C46.1108 46.2276 45.2317 46.4867 44.3337 46.4867C43.4356 46.4867 42.5566 46.2276 41.8021 45.7404C41.0476 45.2532 40.4498 44.5586 40.0803 43.7401C39.7108 42.9215 39.5853 42.0137 39.7189 41.1257C39.8526 40.2376 40.2396 39.4069 40.8337 38.7333L44.3337 35" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>`,
  },
];

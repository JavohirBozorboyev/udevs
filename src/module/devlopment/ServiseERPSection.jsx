import SectionTitle from "../other/SectionTitle";
import MobileImg from "../../assets/desktop.png";
import MobileImgBg from "../../assets/bg_pattern.png";
const ServiseERPSection = () => {
  return (
    <div id="erp" className="bg-sky-50 py-20">
      <div className="container mx-auto px-4 lg:px-2 max-w-6xl">
        <SectionTitle title="ERP systems" />{" "}
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
              IT Systems of any level of complexity at a convenient time for you
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

export default ServiseERPSection;

const platformData = [
  {
    title: "CRM",
    icon: `<path d="M42.6226 9.33325H14.8331C10.9962 9.33325 7.88574 12.4673 7.88574 16.3333V39.6666C7.88574 43.5326 10.9962 46.6666 14.8331 46.6666H42.6226C46.4595 46.6666 49.57 43.5326 49.57 39.6666V16.3333C49.57 12.4673 46.4595 9.33325 42.6226 9.33325Z" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.781 28.0001C24.3389 28.0001 26.4126 25.9107 26.4126 23.3334C26.4126 20.7561 24.3389 18.6667 21.781 18.6667C19.223 18.6667 17.1494 20.7561 17.1494 23.3334C17.1494 25.9107 19.223 28.0001 21.781 28.0001Z" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M35.6758 18.6667H40.3074" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M35.6758 28H40.3074" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.1494 37.3333H40.3073" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>`,
  },
  {
    title: "eLearning",
    icon: `<path d="M51.3337 21.0001L28.0003 11.6667L4.66699 21.0001L28.0003 30.3334L51.3337 21.0001ZM51.3337 21.0001V35.0001" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 24.7334V37.3334C14 39.1899 15.475 40.9704 18.1005 42.2831C20.726 43.5959 24.287 44.3334 28 44.3334C31.713 44.3334 35.274 43.5959 37.8995 42.2831C40.525 40.9704 42 39.1899 42 37.3334V24.7334" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
`,
  },
  {
    title: "E-Commerce",
    icon: `<path d="M16.333 23.3333L27.9997 9.33325L39.6663 23.3333" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M49 23.3333L44.3333 41.9999C44.1152 43.3374 43.5287 44.5368 42.676 45.3895C41.8233 46.2422 40.7584 46.6941 39.6667 46.6666H16.3333C15.2416 46.6941 14.1767 46.2422 13.324 45.3895C12.4713 44.5368 11.8848 43.3374 11.6667 41.9999L7 23.3333H49Z" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M27.9997 39.6666C30.577 39.6666 32.6663 37.5772 32.6663 34.9999C32.6663 32.4226 30.577 30.3333 27.9997 30.3333C25.4223 30.3333 23.333 32.4226 23.333 34.9999C23.333 37.5772 25.4223 39.6666 27.9997 39.6666Z" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>`,
  },
  {
    title: "POS",
    icon: `<path d="M18.1015 25.6671H37.9005" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.1015 15.8995H37.9005" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.1015 35.8995H37.9005" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.668 49V11.6667C11.668 10.429 12.1596 9.242 13.0348 8.36683C13.91 7.49167 15.097 7 16.3346 7H39.668C40.9056 7 42.0926 7.49167 42.9678 8.36683C43.843 9.242 44.3346 10.429 44.3346 11.6667V49L37.3346 44.3333L32.668 49L28.0013 44.3333L23.3346 49L18.668 44.3333L11.668 49Z" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>`,
  },
  {
    title: "Sms / Email",
    icon: `<path d="M44.3333 11.6667H11.6667C9.08934 11.6667 7 13.7561 7 16.3334V39.6667C7 42.2441 9.08934 44.3334 11.6667 44.3334H44.3333C46.9107 44.3334 49 42.2441 49 39.6667V16.3334C49 13.7561 46.9107 11.6667 44.3333 11.6667Z" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 16.3333L28 30.3333L49 16.3333" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>`,
  },
  {
    title: "Warehouse",
    icon: `<path d="M7 48.9999V18.6666L28 9.33325L49 18.6666V48.9999" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M30.333 30.3333H34.9997H39.6663V48.9999H16.333V34.9999H23.333H30.333" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M30.3333 49.0001V28.0001C30.3333 27.3812 30.0875 26.7878 29.6499 26.3502C29.2123 25.9126 28.6188 25.6667 28 25.6667H23.3333C22.7145 25.6667 22.121 25.9126 21.6834 26.3502C21.2458 26.7878 21 27.3812 21 28.0001V35.0001" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>`,
  },
];

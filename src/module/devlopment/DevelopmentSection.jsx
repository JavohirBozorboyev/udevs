import SectionTitle from "../other/SectionTitle";
import MobileImg from "../../assets/mobile.png";
import MobileImgBg from "../../assets/bg_pattern.png";

const DevelopmentSection = () => {
  return (
    <div id="devlopment">
      <div className="container mx-auto px-4 lg:px-2 max-w-6xl py-20">
        <SectionTitle
          title="Development of mobile applications"
          className="lg:w-2/3"
        />

        <div className="flex  flex-col-reverse lg:flex-row gap-5 mt-16">
          <div className=" lg:w-1/2">
            <p className="text-center md:text-left lg:text-xl">
              In collaboration with startups, we have learned how to create a
              creative and functional user interface for mobile applications.
            </p>
            <div className="grid grid-cols-12 gap-2 lg:gap-5 mt-10">
              {platformData.map((item, i) => {
                return (
                  <div
                    key={i}
                    className="bg-blue-50 col-span-4 p-4 rounded-lg flex flex-col lg:gap-3"
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
            <div className="mt-20 ">
              <h1 className="text-xl text-zinc-800 lg:text-2xl xl:text-3xl font-bold">
                Technologies
              </h1>
            </div>
            <div className="flex items-center gap-10 mt-10">
              {programmingLanguagaes.map((item, i) => {
                return (
                  <div
                    key={i}
                    className=" flex justify-center items-center flex-col gap-3"
                  >
                    <svg
                      width="59"
                      height="56"
                      viewBox="0 0 59 56"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className=""
                      dangerouslySetInnerHTML={{ __html: item.icon }}
                    ></svg>

                    <h1 className="text-sm md:text-lg  font-semibold text-zinc-800 lg:text-xl">
                      {item.title}
                    </h1>
                  </div>
                );
              })}
            </div>
          </div>
          <div
            className="lg:w-1/2 relative flex items-center justify-center rounded-3xl"
            style={{
              background: `url(${MobileImgBg})`,
              backgroundSize: "cover",
            }}
          >
            <img src={MobileImg} alt="" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentSection;

const platformData = [
  {
    title: "IOS",
    icon: `<path opacity="0.3" fillRule="evenodd" clipRule="evenodd" d="M11.6667 3.64581C10.6599 3.64581 9.84375 4.46196 9.84375 5.46873V29.5312C9.84375 30.538 10.6599 31.3541 11.6667 31.3541H23.3333C24.3401 31.3541 25.1562 30.538 25.1562 29.5312V5.46873C25.1562 4.46196 24.3401 3.64581 23.3333 3.64581H11.6667Z" fill="#1B5BF7"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M11.6667 1.45844H23.3333C25.5482 1.45844 27.3438 3.25396 27.3438 5.46885V29.5313C27.3438 31.7462 25.5482 33.5418 23.3333 33.5418H11.6667C9.45177 33.5418 7.65625 31.7462 7.65625 29.5313V5.46885C7.65625 3.25396 9.45177 1.45844 11.6667 1.45844ZM11.6666 3.64594C10.6599 3.64594 9.84373 4.46208 9.84373 5.46885V29.5313C9.84373 30.5381 10.6599 31.3543 11.6666 31.3543H23.3333C24.3401 31.3543 25.1562 30.5381 25.1562 29.5313V5.46885C25.1562 4.46208 24.3401 3.64594 23.3333 3.64594H21.7V4.59999C21.7 5.15227 21.2523 5.59999 20.7 5.59999H14.3C13.7477 5.59999 13.3 5.15227 13.3 4.59999V3.64594H11.6666Z" fill="#1B5BF7"/>`,
  },
  {
    title: "Android",
    icon: `<path opacity="0.3" fillRule="evenodd" clipRule="evenodd" d="M11.6667 3.64581C10.6599 3.64581 9.84375 4.46196 9.84375 5.46873V29.5312C9.84375 30.538 10.6599 31.3541 11.6667 31.3541H23.3333C24.3401 31.3541 25.1562 30.538 25.1562 29.5312V5.46873C25.1562 4.46196 24.3401 3.64581 23.3333 3.64581H11.6667Z" fill="#1B5BF7"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M11.6667 1.45844H23.3333C25.5482 1.45844 27.3438 3.25396 27.3438 5.46885V29.5313C27.3438 31.7462 25.5482 33.5418 23.3333 33.5418H11.6667C9.45177 33.5418 7.65625 31.7462 7.65625 29.5313V5.46885C7.65625 3.25396 9.45177 1.45844 11.6667 1.45844ZM11.6666 3.64594C10.6599 3.64594 9.84373 4.46208 9.84373 5.46885V29.5313C9.84373 30.5381 10.6599 31.3543 11.6666 31.3543H23.3333C24.3401 31.3543 25.1562 30.5381 25.1562 29.5313V5.46885C25.1562 4.46208 24.3401 3.64594 23.3333 3.64594H21.7V4.59999C21.7 5.15227 21.2523 5.59999 20.7 5.59999H14.3C13.7477 5.59999 13.3 5.15227 13.3 4.59999V3.64594H11.6666Z" fill="#1B5BF7"/>`,
  },
  {
    title: "Crossplatform",
    icon: `<path opacity="0.3" fillRule="evenodd" clipRule="evenodd" d="M11.6667 3.64581C10.6599 3.64581 9.84375 4.46196 9.84375 5.46873V29.5312C9.84375 30.538 10.6599 31.3541 11.6667 31.3541H23.3333C24.3401 31.3541 25.1562 30.538 25.1562 29.5312V5.46873C25.1562 4.46196 24.3401 3.64581 23.3333 3.64581H11.6667Z" fill="#1B5BF7"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M11.6667 1.45844H23.3333C25.5482 1.45844 27.3438 3.25396 27.3438 5.46885V29.5313C27.3438 31.7462 25.5482 33.5418 23.3333 33.5418H11.6667C9.45177 33.5418 7.65625 31.7462 7.65625 29.5313V5.46885C7.65625 3.25396 9.45177 1.45844 11.6667 1.45844ZM11.6666 3.64594C10.6599 3.64594 9.84373 4.46208 9.84373 5.46885V29.5313C9.84373 30.5381 10.6599 31.3543 11.6666 31.3543H23.3333C24.3401 31.3543 25.1562 30.5381 25.1562 29.5313V5.46885C25.1562 4.46208 24.3401 3.64594 23.3333 3.64594H21.7V4.59999C21.7 5.15227 21.2523 5.59999 20.7 5.59999H14.3C13.7477 5.59999 13.3 5.15227 13.3 4.59999V3.64594H11.6666Z" fill="#1B5BF7"/>`,
  },
];

const programmingLanguagaes = [
  {
    title: "Swift",
    icon: `<rect width="56" height="56"  fillOpacity="0.01"/>
  <path d="M47.2783 18.3193C47.278 17.4904 47.1946 16.6637 47.0293 15.8516C46.8639 15.0201 46.5828 14.216 46.1941 13.4627C45.788 12.733 45.2832 12.0627 44.694 11.4708C44.0863 10.8763 43.3805 10.3911 42.6076 10.0369C41.8449 9.65229 41.0291 9.38355 40.1872 9.23952C39.352 9.07879 38.4349 9.07879 37.5997 9H16.9978C16.3551 9.01046 15.7139 9.06416 15.0785 9.16073C14.4479 9.23497 13.8306 9.39618 13.2442 9.63977C13.0772 9.71856 12.8282 9.8005 12.6612 9.87929C12.1064 10.1767 11.5791 10.5226 11.0854 10.913C10.9184 11.0737 10.7513 11.1525 10.5843 11.3101C9.97008 11.8798 9.46211 12.5543 9.08415 13.3019C8.67139 14.0447 8.38892 14.8527 8.24898 15.6908C8.12478 16.5087 8.04168 17.3323 8 18.1585V37.191C8.00026 38.0198 8.08367 38.8465 8.24898 39.6587C8.41436 40.4901 8.69549 41.2942 9.08415 42.0476C9.49032 42.7773 9.99512 43.4475 10.5843 44.0394C11.192 44.634 11.8978 45.1191 12.6707 45.4734C13.4334 45.858 14.2491 46.1267 15.0911 46.2707C15.9263 46.4314 16.8434 46.4314 17.6785 46.5102H37.6029C38.4709 46.5096 39.337 46.4294 40.1904 46.2707C41.0323 46.1267 41.8481 45.858 42.6108 45.4734C43.3671 45.0906 44.0688 44.6084 44.6971 44.0394C45.3114 43.4697 45.8193 42.7952 46.1973 42.0476C46.61 41.3048 46.8925 40.4968 47.0325 39.6587C47.1567 38.8408 47.2398 38.0172 47.2814 37.191V18.3193H47.2783Z" fill="#F05138"/>
  <path d="M34.2529 37.9979C30.7515 39.9298 25.939 40.1284 21.095 38.146C17.3182 36.6136 14.089 33.9817 11.8262 30.5916C12.8778 31.3966 14.0267 32.0658 15.2456 32.5835C20.2472 34.8211 25.2456 34.6667 28.766 32.5835C23.7549 28.9087 19.5003 24.1309 16.3298 20.2292C15.7041 19.5698 15.1457 18.8498 14.6626 18.0798C18.4949 21.4237 24.5901 25.6436 26.7584 26.8381C23.6625 23.666 20.8175 20.2583 18.2491 16.6459C22.5186 20.7949 27.2167 24.4787 32.2642 27.6355C32.488 27.7552 32.6613 27.8561 32.8 27.9506C32.948 27.5894 33.0753 27.2201 33.1814 26.8444C34.3506 22.782 33.0143 18.1649 30.0959 14.342C36.853 18.2406 40.8712 25.5649 39.1883 31.6979C39.1442 31.8649 39.0969 32.013 39.0465 32.1863L39.1063 32.2557C42.4439 36.2361 41.5268 40.4498 41.1076 39.6619C39.2954 36.2645 35.9453 37.314 34.2529 37.9979Z" fill="#FEFEFE"/>`,
  },
  {
    title: "Kotlin",
    icon: `<rect width="56" height="56" />
  <path d="M30.0746 10L12 29.0077V46L30.0487 27.9196L48 10H30.0746Z" fill="url(#paint0_linear)"/>
  <path d="M12 45.9997L30.0487 27.9197L48 45.9997H12Z" fill="url(#paint1_linear)"/>
  <path d="M12 10H30.0746L12 29.0077V10Z" fill="url(#paint2_linear)"/>
  <defs>
  <linearGradient id="paint0_linear" x1="5.93904" y1="43.0984" x2="39.4389" y2="9.59824" gradientUnits="userSpaceOnUse">
  <stop offset="0.108" stopColor="#C757BC"/>
  <stop offset="0.173" stopColor="#CD5CA9"/>
  <stop offset="0.492" stopColor="#E8744F"/>
  <stop offset="0.716" stopColor="#F88316"/>
  <stop offset="0.823" stopColor="#FF8900"/>
  </linearGradient>
  <linearGradient id="paint1_linear" x1="23.4892" y1="52.4947" x2="39.8176" y2="36.1663" gradientUnits="userSpaceOnUse">
  <stop offset="0.296" stopColor="#00AFFF"/>
  <stop offset="0.694" stopColor="#5282FF"/>
  <stop offset="1" stopColor="#945DFF"/>
  </linearGradient>
  <linearGradient id="paint2_linear" x1="-15.13" y1="665.785" x2="739.908" y2="-52.2047" gradientUnits="userSpaceOnUse">
  <stop offset="0.296" stopColor="#00AFFF"/>
  <stop offset="0.694" stopColor="#5282FF"/>
  <stop offset="1" stopColor="#945DFF"/>
  </linearGradient>
  </defs>`,
  },
  {
    title: "Flutter",
    icon: `<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M31.8605 10L14 27.9052L19.5282 33.4472L42.917 10H31.8605Z" fill="#47C5FB"/>
  <path d="M31.7359 26.5112L22.1729 36.0982L27.7218 41.7441L33.2398 36.2124L42.9168 26.5112H31.7359Z" fill="#47C5FB"/>
  <path d="M27.7217 41.7437L31.9223 45.9548H42.9166L33.2395 36.2119L27.7217 41.7437Z" fill="#00569E"/>
  <path d="M22.1104 36.1605L27.6387 30.6184L33.2394 36.2124L27.7215 41.7442L22.1104 36.1605Z" fill="#00B5F8"/>
  <path d="M27.7217 41.744L32.3164 40.2155L32.7728 36.6802L27.7217 41.744Z" fill="url(#paint0_linear)" fill-opacity="0.8"/>
  <rect width="56" height="56" fill="#C4C4C4" fill-opacity="0.01"/>
  <defs>
  <linearGradient id="paint0_linear" x1="27.9213" y1="38.0471" x2="31.5574" y2="39.3541" gradientUnits="userSpaceOnUse">
  <stop/>
  <stop offset="1" stop-opacity="0"/>
  </linearGradient>
  </defs>
  </svg>`,
  },
];

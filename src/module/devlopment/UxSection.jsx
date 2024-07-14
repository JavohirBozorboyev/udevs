import SectionTitle from "../other/SectionTitle";
import MobileImg from "../../assets/mobile.png";
import MobileImgBg from "../../assets/bg_pattern.png";

const UxSection = () => {
  return (
    <div>
      <div className="container mx-auto px-4 lg:px-2 max-w-6xl py-20">
        <SectionTitle title="UI / UX design" className="lg:w-2/3" />

        <div className="flex  flex-col-reverse lg:flex-row gap-5 lg:gap-10 xl:gap-20 mt-16">
          <div className=" lg:w-1/2">
            <p className="text-center md:text-left lg:text-xl">
              Our company takes a human-centered approach to design
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
                      width="56"
                      height="56"
                      viewBox="0 0 56 56"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
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

export default UxSection;

const platformData = [
  {
    title: "UX",
    icon: `<path d="M16.0417 33.75H11.4583C8.92703 33.75 6.875 35.7647 6.875 38.25V42.75C6.875 45.2353 8.92703 47.25 11.4583 47.25H16.0417C18.573 47.25 20.625 45.2353 20.625 42.75V38.25C20.625 35.7647 18.573 33.75 16.0417 33.75Z" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M43.5417 33.75H38.9583C36.427 33.75 34.375 35.7647 34.375 38.25V42.75C34.375 45.2353 36.427 47.25 38.9583 47.25H43.5417C46.073 47.25 48.125 45.2353 48.125 42.75V38.25C48.125 35.7647 46.073 33.75 43.5417 33.75Z" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M29.7917 6.75H25.2083C22.677 6.75 20.625 8.76472 20.625 11.25V15.75C20.625 18.2353 22.677 20.25 25.2083 20.25H29.7917C32.323 20.25 34.375 18.2353 34.375 15.75V11.25C34.375 8.76472 32.323 6.75 29.7917 6.75Z" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.75 33.75V31.5C13.75 30.3065 14.2329 29.1619 15.0924 28.318C15.952 27.4741 17.1178 27 18.3333 27H36.6667C37.8822 27 39.048 27.4741 39.9076 28.318C40.7671 29.1619 41.25 30.3065 41.25 31.5V33.75" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M27.5 20.25V27" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>`,
  },
  {
    title: "UI",
    icon: `<path d="M28 49C25.2422 49 22.5115 48.4568 19.9636 47.4015C17.4158 46.3461 15.1008 44.7993 13.1508 42.8492C11.2007 40.8992 9.65388 38.5842 8.59853 36.0364C7.54318 33.4885 7 30.7578 7 28C7 25.2422 7.54318 22.5115 8.59853 19.9636C9.65388 17.4158 11.2007 15.1008 13.1508 13.1508C15.1008 11.2007 17.4158 9.65388 19.9636 8.59853C22.5115 7.54318 25.2422 7 28 7C33.5695 7 38.911 8.96666 42.8492 12.4673C46.7875 15.968 49 20.716 49 25.6667C49 28.142 47.8937 30.516 45.9246 32.2663C43.9555 34.0167 41.2848 35 38.5 35H32.6667C31.6257 34.9832 30.609 35.315 29.7783 35.9427C28.9476 36.5703 28.3506 37.4577 28.0824 38.4636C27.8141 39.4696 27.89 40.5364 28.2978 41.4943C28.7057 42.4522 29.4222 43.2462 30.3333 43.75C30.7992 44.1799 31.1187 44.7449 31.2469 45.3657C31.3751 45.9866 31.3056 46.6319 31.0482 47.2112C30.7907 47.7905 30.3582 48.2746 29.8115 48.5954C29.2648 48.9162 28.6313 49.0577 28 49Z" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.4997 25.6666C18.144 25.6666 18.6663 25.1443 18.6663 24.4999C18.6663 23.8556 18.144 23.3333 17.4997 23.3333C16.8553 23.3333 16.333 23.8556 16.333 24.4999C16.333 25.1443 16.8553 25.6666 17.4997 25.6666Z" fill="#1B5BF7" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M27.9997 18.6666C28.644 18.6666 29.1663 18.1443 29.1663 17.4999C29.1663 16.8556 28.644 16.3333 27.9997 16.3333C27.3553 16.3333 26.833 16.8556 26.833 17.4999C26.833 18.1443 27.3553 18.6666 27.9997 18.6666Z" fill="#1B5BF7" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M38.4997 25.6666C39.144 25.6666 39.6663 25.1443 39.6663 24.4999C39.6663 23.8556 39.144 23.3333 38.4997 23.3333C37.8553 23.3333 37.333 23.8556 37.333 24.4999C37.333 25.1443 37.8553 25.6666 38.4997 25.6666Z" fill="#1B5BF7" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>`,
  },
  {
    title: "Prototyping",
    icon: `<path d="M13.9997 49.0001C16.577 49.0001 18.6663 46.9107 18.6663 44.3334C18.6663 41.7561 16.577 39.6667 13.9997 39.6667C11.4223 39.6667 9.33301 41.7561 9.33301 44.3334C9.33301 46.9107 11.4223 49.0001 13.9997 49.0001Z" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M41.9997 16.3333C44.577 16.3333 46.6663 14.244 46.6663 11.6667C46.6663 9.08934 44.577 7 41.9997 7C39.4223 7 37.333 9.08934 37.333 11.6667C37.333 14.244 39.4223 16.3333 41.9997 16.3333Z" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M28.0003 44.3334H38.5003C40.6663 44.3334 42.7435 43.473 44.275 41.9415C45.8066 40.4099 46.667 38.3327 46.667 36.1667C46.667 34.0008 45.8066 31.9236 44.275 30.392C42.7435 28.8605 40.6663 28.0001 38.5003 28.0001H19.8337C17.6677 28.0001 15.5905 27.1397 14.059 25.6081C12.5274 24.0766 11.667 21.9993 11.667 19.8334C11.667 17.6675 12.5274 15.5903 14.059 14.0587C15.5905 12.5272 17.6677 11.6667 19.8337 11.6667H28.0003" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>`,
  },
  {
    title: "Mobile Design",
    icon: `<path d="M37.333 9.33325H18.6663C17.3777 9.33325 16.333 10.3779 16.333 11.6666V44.3333C16.333 45.6219 17.3777 46.6666 18.6663 46.6666H37.333C38.6217 46.6666 39.6663 45.6219 39.6663 44.3333V11.6666C39.6663 10.3779 38.6217 9.33325 37.333 9.33325Z" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M25.667 11.6667H30.3337" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>`,
  },
  {
    title: "Web Design",
    icon: `<path d="M46.6667 9.33325H9.33333C8.04467 9.33325 7 10.3779 7 11.6666V34.9999C7 36.2886 8.04467 37.3333 9.33333 37.3333H46.6667C47.9553 37.3333 49 36.2886 49 34.9999V11.6666C49 10.3779 47.9553 9.33325 46.6667 9.33325Z" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.333 46.6667H39.6663" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 37.3333V46.6666" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M35 37.3333V46.6666" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>`,
  },
  {
    title: "Atomic Design",
    icon: `<path d="M28 28V28.0233" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M44.4991 11.5008C42.7487 9.75045 39.3318 9.8101 34.9999 11.6666C30.668 13.5231 25.7761 17.0244 21.4003 21.4003C17.0244 25.7761 13.5231 30.6681 11.6666 34.9999C9.81007 39.3318 9.75042 42.7488 11.5008 44.4991C13.2511 46.2494 16.6681 46.1898 20.9999 44.3333C25.3318 42.4768 30.2237 38.9755 34.5996 34.5996C36.7663 32.4329 38.7411 30.1167 40.4112 27.7833C42.0813 25.4498 43.414 23.1449 44.3333 20.9999C45.2525 18.855 45.7403 16.9122 45.7687 15.2823C45.7972 13.6524 45.3658 12.3675 44.4991 11.5008" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.501 11.5009C9.75069 13.2513 9.81034 16.6682 11.6669 21.0001C13.5234 25.332 17.0247 30.2239 21.4005 34.5997C25.7764 38.9756 30.6683 42.4769 35.0002 44.3334C39.3321 46.1899 42.749 46.2496 44.4993 44.4992C46.2497 42.7489 46.19 39.3319 44.3335 35.0001C42.477 30.6682 38.9757 25.7763 34.5999 21.4004C32.4332 19.2337 30.117 17.2589 27.7835 15.5888C25.4501 13.9187 23.1451 12.586 21.0002 11.6667C18.8553 10.7475 16.9124 10.2597 15.2825 10.2313C13.6527 10.2028 12.3677 10.6342 11.501 11.5009" stroke="#1B5BF7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>`,
  },
];

const programmingLanguagaes = [
  {
    title: "Figma",
    icon: `<rect width="56" height="56" fill="#C4C4C4" fill-opacity="0.01"/>
<g clip-path="url(#clip0)">
<path d="M22 47.0003C25.312 47.0003 28 44.2377 28 40.8337V34.667H22C18.688 34.667 16 37.4297 16 40.8337C16 44.2377 18.688 47.0003 22 47.0003Z" fill="#0ACF83"/>
<path d="M16 28.5002C16 25.0962 18.688 22.3335 22 22.3335H28V34.6668H22C18.688 34.6668 16 31.9042 16 28.5002Z" fill="#A259FF"/>
<path d="M16 16.1667C16 12.7627 18.688 10 22 10H28V22.3333H22C18.688 22.3333 16 19.5707 16 16.1667Z" fill="#F24E1E"/>
<path d="M28 10H34C37.312 10 40 12.7627 40 16.1667C40 19.5707 37.312 22.3333 34 22.3333H28V10Z" fill="#FF7262"/>
<path d="M40 28.5002C40 31.9042 37.312 34.6668 34 34.6668C30.688 34.6668 28 31.9042 28 28.5002C28 25.0962 30.688 22.3335 34 22.3335C37.312 22.3335 40 25.0962 40 28.5002Z" fill="#1ABCFE"/>
</g>
<defs>
<clipPath id="clip0">
<rect width="24" height="37" fill="white" transform="translate(16 10)"/>
</clipPath>
</defs>`,
  },
  {
    title: "Sketch",
    icon: `<rect width="56" height="56" fill="#C4C4C4" fill-opacity="0.01"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.1278 23.2949L27.9586 46.9577L8.07324 23.2949H16.1278Z" fill="#EA6C00"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M39.7921 23.2949L27.9613 46.9577L47.8467 23.2949H39.7921Z" fill="#EA6C00"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.127 23.2949H39.7885L27.9577 46.9577L16.127 23.2949Z" fill="#FDAD00"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M27.9577 10.1802L16.7496 11.3908L16.127 23.2941L27.9577 10.1802Z" fill="#FDD231"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M27.9583 10.1802L39.1664 11.3908L39.7891 23.2941L27.9583 10.1802Z" fill="#FDD231"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M47.8467 23.2948L39.1694 11.3916L39.7921 23.2948H47.8467Z" fill="#FDAD00"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.07324 23.2948L16.7505 11.3916L16.1278 23.2948H8.07324Z" fill="#FDAD00"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M27.9577 10.1802L16.127 23.2941H39.7885L27.9577 10.1802Z" fill="#FEEEB7"/>`,
  },
  {
    title: "Lottie",
    icon: `<mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
<rect width="32" height="32" rx="5" fill="#C4C4C4"/>
</mask>
<g mask="url(#mask0)">
<rect x="-1.14258" y="-1.14307" width="171.429" height="34.8571" rx="5" fill="url(#pattern0)"/>
</g>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0" transform="scale(0.00333333 0.0163934)"/>
</pattern>
<image id="image0" width="300" height="61" xlink:href="data:image/png;base64,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"/>
</defs>`,
  },

  {
    title: "Illustrator",
    icon: `<rect width="56" height="56" fill="#C4C4C4" fill-opacity="0.01"/>
<g clip-path="url(#clip0)">
<path d="M13.333 13.3733H42.6664V41.9067H13.333V13.3733Z" fill="#210B00"/>
<path d="M13.3333 13.3738H42.6667V41.9073H13.3333V13.3738ZM12 43.2406H44.0001V12.0405H12V43.2406ZM32.96 23.1606C32.96 23.0539 33 23.0005 33.12 23.0005H35.2134C35.32 23.0005 35.3734 23.0405 35.3734 23.1606V33.6806C35.3734 33.7872 35.3467 33.8406 35.2134 33.8406H33.1467C33.0134 33.8406 32.9733 33.7739 32.9733 33.6673V23.1606H32.96ZM32.8134 20.1339C32.8134 19.2805 33.4133 18.7739 34.1734 18.7739C34.9867 18.7739 35.5334 19.3205 35.5334 20.1339C35.5334 21.0139 34.9601 21.4938 34.1467 21.4938C33.3733 21.4939 32.8134 21.0139 32.8134 20.1339ZM26.8134 27.5472C26.4401 26.0672 25.5601 22.8405 25.2267 21.2805H25.2C24.92 22.8405 24.2134 25.4805 23.6534 27.5472H26.8134ZM23.1067 29.7073L22.0533 33.7073C22.0267 33.8139 21.9867 33.8405 21.8534 33.8405H19.8934C19.76 33.8405 19.7333 33.8005 19.76 33.6406L23.5467 20.3872C23.6134 20.1472 23.6533 19.9338 23.68 19.2805C23.68 19.1872 23.72 19.1472 23.7867 19.1472H26.5867C26.68 19.1472 26.72 19.1739 26.7467 19.2805L30.9867 33.6672C31.0133 33.7738 30.9867 33.8405 30.88 33.8405H28.6667C28.56 33.8405 28.4933 33.8139 28.4667 33.7206L27.3733 29.7073H23.1067Z" fill="#FF7F18"/>
</g>
<defs>
<clipPath id="clip0">
<rect width="32" height="32" fill="white" transform="translate(12 12)"/>
</clipPath>
</defs>`,
  },
];

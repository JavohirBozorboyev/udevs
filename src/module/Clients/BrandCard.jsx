/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Marquee from "../../components/MagicUi/Marquee";
import { cn } from "../../lib/utils";
import { BrandData } from "./BrandData";

const firstRow = BrandData.slice(0, BrandData.length / 2);
const secondRow = BrandData.slice(BrandData.length / 2);

const ReviewCard = ({ icon }) => {
  return (
    <figure
      className={cn("relative  cursor-pointer")}
      dangerouslySetInnerHTML={{ __html: icon }}
    ></figure>
  );
};

export default function BrandCard() {
  return (
    <div className="relative  w-full flex-col items-center justify-center overflow-hidden    ">
      <Marquee pauseOnHover className="[--duration:20s]">
        {BrandData.map((review, i) => (
          <ReviewCard key={i} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review, i) => (
          <ReviewCard key={i} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}

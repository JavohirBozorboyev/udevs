import {
  IconChartHistogram,
  IconFolder,
  IconPhone,
  IconPower,
  IconUsersGroup,
} from "@tabler/icons-react";
import SectionTitle from "./SectionTitle";

const WorkSection = () => {
  return (
    <>
      <div className="container mx-auto px-4 lg:px-2 max-w-6xl pt-16">
        <div>
          <SectionTitle title="How we work!" />
        </div>
      </div>
      <div className="container mx-auto px-4 lg:px-2 pb-16 relative">
        <div className="mt-20 grid grid-cols-10 gap-4 xl:gap-6 items-center">
          {workData.map((item, i) => {
            return (
              <div
                key={i}
                className=" relative z-10  col-span-10 sm:col-span-5  lg:col-span-3 xl:col-span-2 grid grid-cols-12 items-center  gap-4"
              >
                <div className="col-span-3 xl:col-span-12 xl:flex xl:justify-center">
                  <div className="bg-sky-50 p-4 rounded-full w-20 h-20 flex items-center justify-center text-blue-700 ">
                    {item.icon}
                  </div>
                </div>
                <div className="col-span-9 xl:col-span-12">
                  <h1 className="text-xl text-zinc-800 lg:text-center font-semibold">
                    {" "}
                    {item.title}
                  </h1>
                  <p className="text-sm lg:text-center">{item.content}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="absolute  w-full h-10 border-t-4 border-blue-300 border-dotted top-10 hidden xl:block"></div>
      </div>
    </>
  );
};

export default WorkSection;

const workData = [
  {
    title: "Contact",
    content: "Send us your project request or project idea.",
    icon: <IconPhone size={32} />,
  },
  {
    title: "Analysis",
    content: "We will contact you to clarify your project requirements.",
    icon: <IconChartHistogram size={32} />,
  },
  {
    title: "Offer",
    content: "We will provide you with our free, non-binding application.",
    icon: <IconFolder size={32} />,
  },
  {
    title: "Team",
    content: "We provide a team for your requirements.",
    icon: <IconUsersGroup size={32} />,
  },
  {
    title: "Start",
    content: "You will get to know the team and we'll get started.",
    icon: <IconPower size={32} />,
  },
];

import SectionTitle from "../other/SectionTitle";
import TeamIcon from "../../assets/teamIcon.svg";

const TeamSection = () => {
  return (
    <div className="bg-blue-50">
      <div className="container max-w-6xl mx-auto px-4 lg:px-2 py-20">
        <SectionTitle title="Team" className={''} />
        <div className="flex flex-col-reverse gap-10 lg:gap-5 md:flex-row items-center justify-between mt-12 lg:mt-12">
          <div className="flex flex-col gap-5 w-full lg:w-1/2">
            <p className="text-zinc-800 text-lg lg:text-xl  ">
              For each project, we form a team that includes a project manager,
              business analyst, UI / UX designer, DevOps, QA engineer, backend
              and front-end developers.
            </p>
            <div>
              <h1 className="text-7xl xl:text-9xl text-blue-600 font-semibold ">
                100+
              </h1>
              <h2 className="text-2xl lg:text-4xl mt-5 text-zinc-800 font-semibold ">
                Dedicated team
              </h2>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <img src={TeamIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;

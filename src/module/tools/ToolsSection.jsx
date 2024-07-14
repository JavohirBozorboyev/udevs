import SectionTitle from "../other/SectionTitle";
import ToolsButtons from "./ToolsButtons";

const ToolsSection = () => {
  return (
    <div className="bg-sky-50">
      <div className="container mx-auto px-4 lg:px-2 max-w-6xl py-20">
        <SectionTitle title="Tools" />
        <div className="mt-20">
          <ToolsButtons />
        </div>
      </div>
    </div>
  );
};

export default ToolsSection;

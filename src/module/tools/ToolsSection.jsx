import { useState } from "react";
import SectionTitle from "../other/SectionTitle";
import ToolsButtons from "./ToolsButtons";
import ToolsList from "./ToolsList";

const ToolsSection = () => {
  const [filter, setFilter] = useState(null);
  return (
    <div id="tools" className="bg-sky-50">
      <div className="container mx-auto px-4 lg:px-2 max-w-6xl py-20">
        <SectionTitle title="Tools" />
        <div className="mt-20">
          <ToolsButtons setFilter={setFilter} filter={filter} />
        </div>
        <div className="mt-16">
          <ToolsList filter={filter} />
        </div>
      </div>
    </div>
  );
};

export default ToolsSection;

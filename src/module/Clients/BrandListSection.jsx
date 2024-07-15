import SectionTitle from "../other/SectionTitle";
import BrandCard from "./BrandCard";

const BrandListSection = () => {
  return (
    <div id="clients">
      <div className="container mx-auto max-w-6xl px-4 lg:px-2 py-20">
        <div>
          <SectionTitle title="Our clients" />
        </div>
      </div>
      <div className="mt-5">
        <BrandCard />;
      </div>
    </div>
  );
};

export default BrandListSection;

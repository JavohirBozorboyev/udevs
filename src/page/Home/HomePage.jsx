import ConsultingSection from "../../module/devlopment/ConsultingSection";
import DevelopmentSection from "../../module/devlopment/DevelopmentSection";
import InfrastructureSection from "../../module/devlopment/InfrastructureSection";
import ServiseERPSection from "../../module/devlopment/ServiseERPSection";
import UxSection from "../../module/devlopment/UxSection";
import Header from "../../module/herader/Header";
import ServiseList from "../../module/service/ServiseList";
import TeamSection from "../../module/team/TeamSection";
import ToolsSection from "../../module/tools/ToolsSection";

const HomePage = () => {
  return (
    <div>
      <Header />
      <ServiseList />
      <TeamSection />
      <DevelopmentSection />
      <ServiseERPSection />
      <UxSection />
      <InfrastructureSection />
      <ConsultingSection />
      <ToolsSection />
    </div>
  );
};

export default HomePage;

import BrandListSection from "../../module/Clients/BrandListSection";
import ConsultingSection from "../../module/devlopment/ConsultingSection";
import DevelopmentSection from "../../module/devlopment/DevelopmentSection";
import InfrastructureSection from "../../module/devlopment/InfrastructureSection";
import ServiseERPSection from "../../module/devlopment/ServiseERPSection";
import UxSection from "../../module/devlopment/UxSection";
import Header from "../../module/herader/Header";
import Contact from "../../module/other/Contact";
import WorkSection from "../../module/other/WorkSection";
import DeleverSection from "../../module/Portfolio/DeleverSection";
import GoodzoneSection from "../../module/Portfolio/GoodzoneSection";
import ImanSection from "../../module/Portfolio/ImanSection";
import SmsSection from "../../module/Portfolio/SmsSection";
import ServiseList from "../../module/service/ServiseList";
import TeamSection from "../../module/team/TeamSection";
import ToolsSection from "../../module/tools/ToolsSection";

const HomePage = () => {
  return (
    <main>
      <Header />
      <ServiseList />
      <TeamSection />
      <DevelopmentSection />
      <ServiseERPSection />
      <UxSection />
      <InfrastructureSection />
      <ConsultingSection />
      <ToolsSection />
      <BrandListSection />
      <DeleverSection />
      <SmsSection />
      <GoodzoneSection />
      <ImanSection />
      <WorkSection />
      <Contact />
    </main>
  );
};

export default HomePage;

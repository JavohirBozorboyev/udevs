import DevelopmentSection from "../../module/devlopment/DevelopmentSection";
import ServiseERPSection from "../../module/devlopment/ServiseERPSection";
import Header from "../../module/herader/Header";
import ServiseList from "../../module/service/ServiseList";
import TeamSection from "../../module/team/TeamSection";

const HomePage = () => {
  return (
    <div>
      <Header />
      <ServiseList />
      <TeamSection />
      <DevelopmentSection />
      <ServiseERPSection />
    </div>
  );
};

export default HomePage;

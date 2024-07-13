import DevelopmentSection from "../../module/devlopment/DevelopmentSection";
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
    </div>
  );
};

export default HomePage;

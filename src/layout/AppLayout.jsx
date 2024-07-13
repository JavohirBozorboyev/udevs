import { Outlet } from "react-router-dom";
import AppNavigation from "../components/Nav/AppNavigation";
import AppFooter from "../components/Footer/AppFooter";

const AppLayout = () => {
  return (
    <div>
      <AppNavigation />
      <div>
        <Outlet />
      </div>
      <AppFooter />
    </div>
  );
};

export default AppLayout;

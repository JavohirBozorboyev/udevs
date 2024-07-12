import Logo from "../../assets/Logo";
import { AppNavLinks } from "../../data/AppNavLink";
import MultiLinks from "./MultiLinks";

const AppNavigation = () => {
  return (
    <div className="fixed z-50 bg-white w-full py-2">
      <div className="container mx-auto flex justify-between items-center max-w-6xl">
        <div>
          <Logo />
        </div>
        <div className="flex items-center gap-4">
          {AppNavLinks.map((item) => {
            return <MultiLinks key={item.url} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default AppNavigation;

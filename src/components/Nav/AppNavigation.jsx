import Logo from "../../assets/Logo";
import { AppNavLinks } from "../../data/AppNavLink";
import MultiLinks from "./MultiLinks";
import { useState } from "react";

const AppNavigation = () => {
  const [menu, setMenu] = useState(false);
  const OpenNav = () => {
    setMenu(!menu);
  };
  return (
    <>
      <div className="fixed z-50 bg-white w-full py-4 lg:py-3 border-b">
        <div className="container px-4 lg:px-2 mx-auto flex justify-between items-center max-w-6xl">
          <div className="flex justify-between items-center w-full lg:w-auto">
            <a href="#">
              <Logo />
            </a>
            <svg
              onClick={OpenNav}
              className="w-8 h-8 fill-blue-600 lg:hidden"
              clipRule="evenodd"
              fillRule="evenodd"
              strokeLinejoin="round"
              strokeMiterlimit="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m22 15.25c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-6.5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75z"
                fillRule="nonzero"
              />
            </svg>
          </div>
          <div className=" hidden lg:flex items-center gap-4 ">
            {/* other nav links */}
            {AppNavLinks.map((item, i) => {
              return <MultiLinks key={i} item={item} />;
            })}
            {/* other nav links */}

            {/* language hover select */}
            <div className=" p-2 py-3 hover:border-b-2 border-blue-500 cursor-pointer flex items-center relative linkItem">
              <p className="font-[500] text-gray-800 text-sm ">Language</p>
              <p>
                <svg
                  className="w-5 h-5"
                  clipRule="evenodd"
                  fillRule="evenodd"
                  strokeLinejoin="round"
                  strokeMiterlimit="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m16.843 10.211c.108-.141.157-.3.157-.456 0-.389-.306-.755-.749-.755h-8.501c-.445 0-.75.367-.75.755 0 .157.05.316.159.457 1.203 1.554 3.252 4.199 4.258 5.498.142.184.36.29.592.29.23 0 .449-.107.591-.291 1.002-1.299 3.044-3.945 4.243-5.498z" />
                </svg>
              </p>

              <div className="bg-white hidden py-4 absolute top-10 -left-[10%] grid grid-cols-1 gap-2 w-[150px] rounded-lg  shadow hoverLinkGroup ">
                <div className="hover:bg-blue-500 hover:text-white duration-200 p-3 px-4 grid grid-cols-12 items-center ">
                  <div className="col-span-5">
                    <div className="w-8 h-8 col text-blue-600 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden">
                      <img
                        src="https://www.innergarden.org/dsk/images/icons/gb.svg"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="col-span-7">
                    <p className="text-base">Eng</p>
                  </div>
                </div>
                <div className="hover:bg-blue-500 hover:text-white duration-200 p-3 px-4 grid grid-cols-12 items-center ">
                  <div className="col-span-5">
                    <div className="w-8 h-8 col text-blue-600 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden">
                      <img
                        src="https://ast.nis.edu.kz/wp-content/uploads/2020/03/NIS-Astana-PhM-flagi-stran-2594-2048x1024.png "
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="col-span-7">
                    <p className="text-base">Ru</p>
                  </div>
                </div>
              </div>
            </div>
            {/* language hover select */}
            {/* contact button */}
            <div>
              <a
                href="#contact"
                className="bg-blue-600 p-2 block px-6 rounded-md text-white hover:scale-105 duration-300 ml-2 "
              >
                Contact
              </a>
            </div>
            {/* contact button */}
          </div>
        </div>
      </div>
      <div
        className={`fixed z-50 right-0 w-full bg-blue-50 h-screen px-4 py-4 lg:hidden flex flex-col justify-between ${
          menu ? "left-0" : "-left-[100%]"
        }`}
      >
        <div className="flex items-center justify-between gap-5 ">
          <a href="#" onClick={OpenNav}>
            <Logo />
          </a>

          <div>
            <svg
              onClick={OpenNav}
              className="w-6 h-6 active:scale-95"
              clipRule="evenodd"
              fillRule="evenodd"
              strokeLinejoin="round"
              strokeMiterlimit="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z" />
            </svg>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 text-center">
          <a onClick={OpenNav} href="#devlopment" className="text-3xl">
            Servise
          </a>
          <a onClick={OpenNav} href={"#clients"} className="text-3xl">
            Client
          </a>
          <a onClick={OpenNav} href={"#team"} className="text-3xl">
            Command
          </a>
        </div>
        {/* contact button */}
        <div>
          <a
            onClick={OpenNav}
            href="#contact"
            className="bg-blue-600 p-4 text-xl block px-6 rounded-md text-white hover:scale-105 duration-300 text-center "
          >
            Contact
          </a>
          <div className="mt-10 mb-6 flex justify-center items-center gap-5">
            <a href="#">
              <svg
                className="w-12 h-12 fill-blue-600 active:scale-95"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M14.829 6.302c-.738-.034-.96-.04-2.829-.04s-2.09.007-2.828.04c-1.899.087-2.783.986-2.87 2.87-.033.738-.041.959-.041 2.828s.008 2.09.041 2.829c.087 1.879.967 2.783 2.87 2.87.737.033.959.041 2.828.041 1.87 0 2.091-.007 2.829-.041 1.899-.086 2.782-.988 2.87-2.87.033-.738.04-.96.04-2.829s-.007-2.09-.04-2.828c-.088-1.883-.973-2.783-2.87-2.87zm-2.829 9.293c-1.985 0-3.595-1.609-3.595-3.595 0-1.985 1.61-3.594 3.595-3.594s3.595 1.609 3.595 3.594c0 1.985-1.61 3.595-3.595 3.595zm3.737-6.491c-.464 0-.84-.376-.84-.84 0-.464.376-.84.84-.84.464 0 .84.376.84.84 0 .463-.376.84-.84.84zm-1.404 2.896c0 1.289-1.045 2.333-2.333 2.333s-2.333-1.044-2.333-2.333c0-1.289 1.045-2.333 2.333-2.333s2.333 1.044 2.333 2.333zm-2.333-12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.958 14.886c-.115 2.545-1.532 3.955-4.071 4.072-.747.034-.986.042-2.887.042s-2.139-.008-2.886-.042c-2.544-.117-3.955-1.529-4.072-4.072-.034-.746-.042-.985-.042-2.886 0-1.901.008-2.139.042-2.886.117-2.544 1.529-3.955 4.072-4.071.747-.035.985-.043 2.886-.043s2.14.008 2.887.043c2.545.117 3.957 1.532 4.071 4.071.034.747.042.985.042 2.886 0 1.901-.008 2.14-.042 2.886z" />
              </svg>
            </a>
            <a href="#">
              <svg
                className="w-12 h-12 fill-blue-600 active:scale-95"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" />
              </svg>
            </a>
            <a href="">
              <svg
                className="w-12 h-12 fill-blue-600 active:scale-95"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.441 16.892c-2.102.144-6.784.144-8.883 0-2.276-.156-2.541-1.27-2.558-4.892.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0 2.277.156 2.541 1.27 2.559 4.892-.018 3.629-.285 4.736-2.559 4.892zm-6.441-7.234l4.917 2.338-4.917 2.346v-4.684z" />
              </svg>
            </a>
          </div>
        </div>
        {/* contact button */}
      </div>
    </>
  );
};

export default AppNavigation;

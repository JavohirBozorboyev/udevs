/* eslint-disable react/prop-types */
const MultiLinks = ({ item }) => {
  if (Array.isArray(item.sublink)) {
    return (
      <>
        <div
          key={item.url}
          className=" p-2 py-3 hover:border-b-2 border-blue-500 cursor-pointer flex items-center relative linkItem"
        >
          <p className="font-[500] text-gray-800 text-sm ">{item.name}</p>
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

          <div className="bg-white hidden absolute top-10 -left-[70%] grid grid-cols-1 w-[280px] pb-8 rounded-lg  shadow hoverLinkGroup ">
            <p className="p-4 text-sm">{item.name}</p>
            {item.sublink.map((item) => {
              return (
                <div
                  key={item.url}
                  className="hover:bg-blue-500 hover:text-white duration-200 p-3 px-4 grid grid-cols-12 items-center "
                >
                  <div className="col-span-3">
                    <div className="w-10 h-10 col text-blue-600 rounded-full bg-blue-100 flex items-center justify-center">
                      {item.name.slice(0, 1)}
                    </div>
                  </div>
                  <div className="col-span-9">
                    <p className="text-xs">{item.name}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
  console.log(item);
  return (
    <>
      <div
        key={item.url}
        className=" p-2 py-3 hover:border-b-2 border-blue-500 cursor-pointer relative"
      >
        <p className="font-[500] text-gray-800 text-sm">{item.name}</p>
      </div>
    </>
  );
};

export default MultiLinks;

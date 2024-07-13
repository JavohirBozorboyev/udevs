/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const ServiseCard = ({ item }) => {
  return (
    <div className="bg-blue-50 col-span-6  xl:col-span-4 p-5 md:p-8 lg:p-10 rounded-lg flex flex-col gap-6">
      <div>
        <svg
          width="35"
          height="35"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          dangerouslySetInnerHTML={{ __html: item.icon }}
        ></svg>
      </div>
      <h1 className="text-sm md:text-lg  font-semibold text-zinc-800 lg:text-xl">
        {item.title}
      </h1>
    </div>
  );
};

export default ServiseCard;

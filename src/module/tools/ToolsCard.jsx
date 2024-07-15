/* eslint-disable react/prop-types */
const ToolsCard = ({ item, filter }) => {
  return (
    <div
      className={`p-4 rounded-md col-span-3 md:col-span-2 xl:col-span-1 flex  flex-col gap-4 items-center justify-center text-center ${
        filter == item.type
          ? "bg-sky-200"
          : filter == null
          ? "bg-sky-200"
          : " bg-transparent opacity-55"
      } bg-sky-200 `}
    >
      <div className="flex justify-center">
        <div className=" text-blue-600">{item.icon}</div>
      </div>

      <p className="text-xs block">{item.title}</p>
    </div>
  );
};

export default ToolsCard;

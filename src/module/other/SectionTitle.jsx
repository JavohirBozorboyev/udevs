/* eslint-disable react/prop-types */
const SectionTitle = ({ title = "", className }) => {
  return (
    <div>
      <h1
        className={`text-blue-500  md:text-left text-3xl lg:text-4xl xl:text-6xl font-semibold ${className}`}
      >
        {title}
      </h1>
    </div>
  );
};

export default SectionTitle;

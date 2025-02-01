const TitleOne = ({ title }) => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="mb-2 lg:mb-16 text-center text-3xl lg:text-4xl font-bold text-blue-950">
        {title}
      </h2>
      {/* <hr className="w-10 h-0.5 bg-primary mb-4 lg:mb-12" /> */}
    </div>
  );
};

export default TitleOne;

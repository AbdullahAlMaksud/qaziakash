const TitleOne = ({ title }) => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="mb-4 text-center text-4xl lg:text-5xl font-bold text-blue-950">
        {title}
      </h2>
      <hr className="w-10 h-0.5 bg-primary mb-8 lg:mb-14" />
    </div>
  );
};

export default TitleOne;

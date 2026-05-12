const TitleHeader = ({ title, sub }) => {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <span className="section-tag">{sub}</span>
      <h2 className="section-title max-w-2xl">{title}</h2>
    </div>
  );
};

export default TitleHeader;
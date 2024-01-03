import Present from "../present/Present";
import "./index.css";

const PresentList = () => {
  const numberOfPresents = 25;

  return (
    <div className="PresentList">
      {[...Array(numberOfPresents)].map((_, index) => (
        <Present key={index} index={index} />
      ))}
    </div>
  );
};

export default PresentList;

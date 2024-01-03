import { useState } from "react";
import "./index.css";

const Present = ({ index }) => {
  const [isOpen, setOpen] = useState(false);
  console.log(isOpen);
  return (
    <div
      className={`present ${isOpen ? "open" : ""}`}
      onClick={() => setOpen(true)}
    >
      <div className="ribbonR"></div>
      <div className="ribbonL"></div>
      <button className="present-button">{index + 1}</button>
      <div className="stripeY"></div>
      <div className="stripeX"></div>
      <img
        className="sorpresa"
        src={`https://picsum.photos/seed/${index}/150/100`}
        alt="present"
      />
    </div>
  );
};

export default Present;

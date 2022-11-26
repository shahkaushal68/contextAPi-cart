import React from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

const Ratings = ({ rate, style, handleClick }) => {
  return (
    <>
      {[...Array(5)].map((_, i) => (
        <span key={i} onClick={() => handleClick(i)} style={style}>
          {rate > i ? <AiFillStar className="fillStar" /> : <AiOutlineStar />}
        </span>
      ))}
    </>
  );
};

export default Ratings;

import React, { useState } from "react";

const Tour = ({ id, name, image, info, price, removeTour }) => {
  const [infoP, setInfoP] = useState(info.substring(0, 200) + "...");
  const [more, isMore] = useState(false);
  // console.log(removeTour);
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">{price}</h4>
        </div>
        <p>
          {more ? info : infoP}{" "}
          <button
            onClick={() => {
              isMore(!more);
            }}
          >
            more
          </button>
        </p>
        <button
          className="delete-btn"
          onClick={() => {
            removeTour(id);
          }}
        >
          Not Interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;

import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, removeTour, fechTours }) => {
  if (tours.length !== 0) {
    return (
      <section>
        <div className="title">
          <h2>Our tours</h2>
          <div className="underline"></div>
          <div>
            {tours.map(tour => {
              return <Tour key={tour.id} removeTour={removeTour} {...tour} />;
            })}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section>
      <div className="title">
        <h2>Our tours</h2>
        <div className="underline"></div>
        <div>
          {tours.map(tour => {
            return <Tour key={tour.id} removeTour={removeTour} {...tour} />;
          })}
        </div>
      </div>
      <button
        className="btn"
        onClick={() => {
          fechTours();
        }}
      >
        refresh
      </button>
    </section>
  );
};

export default Tours;

import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  // console.log(people.length);
  const [index, setIndex] = useState(0);
  const { name, image, text, job } = people[index];
  // console.log(index);
  const random = () => {
    const number = Math.floor(Math.random() * people.length);
    if (number === index) {
      const newNum = number + 1;
      return setIndex(numberShecker(newNum));
    }
    // console.log(number);
  };
  const numberShecker = number => {
    if (number < 0) {
      return (number = 0);
    } else if (number > people.length - 1) {
      return (number = 0);
    } else {
      return number;
    }
  };
  const prevPerson = () => {
    setIndex(index => {
      let nexIndex = index - 1;
      return numberShecker(nexIndex);
    });
  };
  const nextPerson = () => {
    setIndex(index => {
      let nexIndex = index + 1;
      return numberShecker(nexIndex);
    });
  };
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={random}>
        Seprise me
      </button>
    </article>
  );
};

export default Review;

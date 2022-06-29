import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = data => {
  const [plusMinus, setPlusMinus] = useState(false);
  console.log(data);
  const { id, title, info } = data;
  const para = <div> {info}</div>;
  return (
    <article>
      <header>
        <h6>{title}</h6>
        <button onClick={() => setPlusMinus(!plusMinus)}>
          {plusMinus ? <AiOutlinePlus /> : <AiOutlineMinus />}
        </button>
      </header>
      {plusMinus && para}
    </article>
  );
};

export default Question;

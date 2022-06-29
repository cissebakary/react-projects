import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  const ques = data.map(question => {
    return (
      <h2>
        <SingleQuestion key={question.id} {...question} />
      </h2>
    );
  });
  return ques;
}

export default App;

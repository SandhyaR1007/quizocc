import React, { useEffect, useState } from "react";
import { space } from "../data/questions";
import "../styles/styles.css";

const Questions = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [selected, setSelected] = useState(null);

  return (
    <div className="questions container">
      <h1>{space[currentQuestion].que}?</h1>
      <span>{space[currentQuestion].id}</span>
      {space[currentQuestion].options.map((option, index) => (
        <label
          className={`questions__options ${
            selected === option ? "questions__options--selected" : ""
          }`}
          for={option}
          onClick={() => {
            console.log(option);
            setSelected(option);
          }}
        >
          <span className="questions__numbers">{index + 1}</span>
          <span for={option} className="">
            {option}
          </span>
          <input
            type="radio"
            id={option}
            name={space[currentQuestion].ans}
            value={space[currentQuestion].ans}
            // selected={selected === option}
          />
        </label>
      ))}
      <button
        className="btn btn-primary"
        onClick={() => {
          setSelectedAnswers([...selectedAnswers, selected]);
          setCurrentQuestion(currentQuestion + 1);
          setSelected(null);
        }}
        disabled={currentQuestion === space.length - 1}
      >
        Next
      </button>
    </div>
  );
};

export default Questions;

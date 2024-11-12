import React from "react";

const QuestionCard = ({ question, onAnswer }) => {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">{question.question}</h5>
        <div className="list-group">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => onAnswer(option)}
              className="list-group-item list-group-item-action"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;

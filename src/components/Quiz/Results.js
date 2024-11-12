import React from "react";
import { Link } from "react-router-dom";

const Results = () => {
  const questions = [
    {
      id: 1,
      question: "Who won the ICC Cricket World Cup 2011?",
      options: ["India", "Australia", "England", "Pakistan"],
      answer: "India",
    },
    {
      id: 2,
      question: "Who is the current Prime Minister of India?",
      options: ["Narendra Modi", "Rahul Gandhi", "Amit Shah", "Manmohan Singh"],
      answer: "Narendra Modi",
    },
    {
      id: 3,
      question: "When did Telangana become a state?",
      options: ["2010", "2012", "2014", "2016"],
      answer: "2014",
    },
    {
      id: 4,
      question: "Who developed React.js?",
      options: ["Facebook", "Google", "Microsoft", "Twitter"],
      answer: "Facebook",
    },
    {
        id: 5,
        question: "Which movie made Prabhas a pan-Indian star?",
        options: ["Baahubali: The Beginning", "Baahubali: The Conclusion", "Radhe Shyam", "Saho"],
        answer: "Baahubali: The Beginning",
    },
  ];

  const userAnswers = ["India", "Narendra Modi", "2014", "Facebook", "Baahubali: The Beginning"];
  const correctAnswers = questions.filter(
    (q, index) => q.answer === userAnswers[index]
  ).length;

  return (
    <div className="results">
      <h2>Your Results</h2>
      <p>
        You got {correctAnswers} out of {questions.length} questions correct!
      </p>
      {questions.map((q, index) => (
        <div key={index}>
          <p>
            <strong>Question:</strong> {q.question} <br />
            <strong>Your Answer:</strong> {userAnswers[index]} <br />
            <strong>Correct Answer:</strong> {q.answer}
          </p>
        </div>
      ))}
      <Link to="/quiz" className="btn btn-primary">
        Try Again
      </Link>
    </div>
  );
};

export default Results;

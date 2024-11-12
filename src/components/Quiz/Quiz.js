import React, { useState } from 'react';

const questions = [
  {
    question: "Who is the Indian actor known as 'Baahubali'?",
    options: ["Aamir Khan", "Prabhas", "Salman Khan", "Rajinikanth"],
    correctAnswer: "Prabhas"
  },
  {
    question: "Who is the current Prime Minister of India?",
    options: ["Narendra Modi", "Rahul Gandhi", "Manmohan Singh", "Atal Bihari Vajpayee"],
    correctAnswer: "Narendra Modi"
  },
  {
    question: "What is the capital city of Telangana?",
    options: ["Hyderabad", "Warangal", "Khammam", "Nizamabad"],
    correctAnswer: "Hyderabad"
  },
  {
    question: "Which of these is a JavaScript library for building user interfaces?",
    options: ["React", "Angular", "Vue", "Svelte"],
    correctAnswer: "React"
  },
  {
    question: "Which famous battle happened in 1526 in India?",
    options: ["Battle of Plassey", "Battle of Panipat", "Battle of Haldighati", "Battle of Khanwa"],
    correctAnswer: "Battle of Panipat"
  }
];

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);

  const handleAnswerClick = (answer) => {
    if (!selectedAnswer) { // Prevent multiple clicks on the same question
      setSelectedAnswer(answer);

      // Check if the answer is correct
      if (answer === questions[currentQuestionIndex].correctAnswer) {
        setScore(score + 1);
      } else {
        setIncorrectAnswers([...incorrectAnswers, currentQuestionIndex]);
      }
    }
  };

  const handleNextClick = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null); // Reset selected answer
    } else {
      setQuizCompleted(true);
    }
  };

  const renderQuestion = () => {
    const currentQuestion = questions[currentQuestionIndex];
    return (
      <div>
        <h3>{currentQuestion.question}</h3>
        <div className="quiz-options">
          {currentQuestion.options.map((option, index) => (
            <div key={index} className="form-check">
              <input
                type="radio"
                className="form-check-input"
                name="answer"
                id={`option${index}`}
                checked={selectedAnswer === option}
                onChange={() => handleAnswerClick(option)}
              />
              <label className="form-check-label" htmlFor={`option${index}`}>
                {option}
              </label>
            </div>
          ))}
        </div>

        {selectedAnswer && (
          <div className="mt-3">
            <button
              className="btn btn-primary"
              onClick={handleNextClick}
            >
              Next Question
            </button>
          </div>
        )}
      </div>
    );
  };

  const renderResults = () => {
    return (
      <div className="results">
        <h3>Quiz Completed!</h3>
        <p>Your Score: {score} / 5</p>
        <h4>Incorrect Answers:</h4>
        <ul>
          {incorrectAnswers.map((index) => (
            <li key={index}>
              <strong>{questions[index].question}</strong> (Correct Answer: {questions[index].correctAnswer})
            </li>
          ))}
        </ul>
        <button
          className="btn btn-success"
          onClick={() => {
            setCurrentQuestionIndex(0);
            setScore(0);
            setQuizCompleted(false);
            setIncorrectAnswers([]);
          }}
        >
          Restart Quiz
        </button>
      </div>
    );
  };

  return (
    <div className="quiz-container">
      {quizCompleted ? renderResults() : renderQuestion()}
    </div>
  );
};

export default Quiz;

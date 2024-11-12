import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-center">
      <h1>Welcome to the Quiz App</h1>
      <p>Test your knowledge on various topics!</p>
      <Link to="/quiz" className="btn btn-primary">
        Start Quiz
      </Link>
    </div>
  );
};

export default Home;

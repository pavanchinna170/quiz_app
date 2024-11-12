import React from "react";

const Leaderboard = () => {
  const leaderboard = [
    { name: "John", score: 4 },
    { name: "Jane", score: 3 },
    { name: "Alice", score: 5 },
  ];

  return (
    <div className="text-center">
      <h2>Leaderboard</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;

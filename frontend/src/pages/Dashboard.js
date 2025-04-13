import React from "react";
import StreakTracker from "../components/StreakTracker";

const Dashboard = () => {
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">📚 Dashboard</h1>
      <StreakTracker />
    </div>
  );
};

export default Dashboard;

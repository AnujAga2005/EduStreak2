import React, { useEffect, useState } from "react";
import api from "../utils/api";

const StreakTracker = () => {
  const [streak, setStreak] = useState(0);
  const [lastActiveDate, setLastActiveDate] = useState("");

  useEffect(() => {
    const fetchStreak = async () => {
      try {
        const { data } = await api.get("/user/streak");
        setStreak(data.streak);
        setLastActiveDate(new Date(data.lastActiveDate).toLocaleDateString());
      } catch (error) {
        console.error("Failed to fetch streak:", error);
      }
    };

    fetchStreak();
  }, []);

  return (
    <div className="bg-white shadow-md p-4 rounded-lg w-fit">
      <h2 className="text-xl font-bold mb-2">🔥 Your Streak</h2>
      <p className="text-gray-700">Current Streak: <span className="font-semibold">{streak} days</span></p>
      <p className="text-gray-500 text-sm">Last active: {lastActiveDate}</p>
    </div>
  );
};

export default StreakTracker;

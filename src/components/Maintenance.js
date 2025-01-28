import React from "react";

const Maintenance = () => {
  return (
    <div className="mt-8 p-6 bg-gray-800 rounded-xl shadow-lg text-center">
      <h2 className="text-xl font-semibold text-yellow-400">Predictive Maintenance</h2>
      <p className="mt-2">Your tyres require maintenance soon. Schedule a checkup.</p>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">Schedule Now</button>
    </div>
  );
};

export default Maintenance;

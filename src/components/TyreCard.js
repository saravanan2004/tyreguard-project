import React from "react";

const TyreCard = ({ title, value }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-xl shadow-lg text-center">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-2xl font-bold text-blue-400 mt-2">{value}</p>
    </div>
  );
};

export default TyreCard;

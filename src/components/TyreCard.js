import React from "react";

const TyreCard = ({ type, value }) => {
  return (
    <div className="bg-secondary p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold">{type}</h2>
      <p className="text-xl font-bold text-accent">{value}</p>
    </div>
  );
};

export default TyreCard;

import React from "react";
import TyreCard from "./TyreCard";
import Maintenance from "./Maintenance";

const Dashboard = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Tyre Monitoring Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <TyreCard title="Real-Time Tyre Pressure" value="32 PSI" />
        <TyreCard title="Tyre Temperature" value="98°C" />
        <TyreCard title="Predictive Maintenance" value="Check Required" />
      </div>
      <Maintenance />
    </div>
  );
};

export default Dashboard;

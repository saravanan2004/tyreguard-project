import React from "react";
import TyreCard from "./TyreCard";
import Maintenance from "./Maintenance";

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-accent text-center mb-4">Tyre Monitoring Dashboard</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <TyreCard type="Real-Time Tyre Pressure" value="32 PSI" />
        <TyreCard type="Tyre Temperature" value="98°C" />
        <TyreCard type="Predictive Maintenance" value="2.2.26" />
      </div>
      <Maintenance />
    </div>
  );
};

export default Dashboard;

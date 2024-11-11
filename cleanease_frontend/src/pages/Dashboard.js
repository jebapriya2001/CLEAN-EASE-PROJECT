import React, { useState } from 'react';
import AppointmentList from '../components/AppointmentList';

const Dashboard = () => {
  const [appointments] = useState(["Clean Kitchen", "Clean Living Room"]);

  return (
    <div>
      <h1>Dashboard</h1>
      <AppointmentList appointments={appointments} />
    </div>
  );
};

export default Dashboard;


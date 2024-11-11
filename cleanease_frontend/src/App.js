// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Navbar from './components/Navbar';
import CategoryList from './components/CategoryList';
import SearchFilter from './components/SearchFilter';
import Checklist from './components/Checklist';
import ScheduleAppointment from './components/ScheduleAppointment';
import Payment from './components/Payment';
import Reminders from './components/Reminders';
import Reviews from './components/Reviews';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<CategoryList />} />
                <Route path="/search" element={<SearchFilter />} />
                <Route path="/checklist" element={<Checklist />} />
                <Route path="/schedule" element={<ScheduleAppointment />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/reminders" element={<Reminders />} />
                <Route path="/reviews" element={<Reviews />} />
            </Routes>
        </Router>
    );
}

export default App;

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Expenses from './pages/Expenses';
import Reports from './pages/Reports';

const App = () => {
  const [currentPage, setCurrentPage] = useState('Dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'Expenses':
        return <Expenses />;
      case 'Reports':
        return <Reports />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="bg-[#0f172a] min-h-screen text-white">
      <Router>
        <nav className="px-4 py-2 shadow-md flex justify-between items-center">
          <div className="text-xl font-bold">SpendSnap</div>
          <div className="flex space-x-4">
            <Link className="hover:underline" to="/" onClick={() => setCurrentPage('Dashboard')}>Dashboard</Link>
            <Link className="hover:underline" to="/expenses" onClick={() => setCurrentPage('Expenses')}>Expenses</Link>
            <Link className="hover:underline" to="/reports" onClick={() => setCurrentPage('Reports')}>Reports</Link>
          </div>
        </nav>
        <div className="p-4">
          {renderPage()}
        </div>
      </Router>
    </div>
  );
};

export default App;

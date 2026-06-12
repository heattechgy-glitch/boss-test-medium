import React, { useState } from 'react';
import { format, addMonths } from 'date-fns';

const Reports = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const handlePrevMonth = () => {
    setCurrentMonth(addMonths(currentMonth, -1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const categories = [
    { name: 'Food', amount: 250, percentage: 25 },
    { name: 'Transport', amount: 150, percentage: 15 },
    { name: 'Entertainment', amount: 100, percentage: 10 },
    { name: 'Utilities', amount: 200, percentage: 20 },
    { name: 'Miscellaneous', amount: 300, percentage: 30 }
  ];

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <button onClick={handlePrevMonth} className="text-blue-500 transition duration-300 ease-in-out hover:text-blue-700">&lt; Previous</button>
        <h2 className="text-xl font-semibold">{format(currentMonth, 'MMMM yyyy')}</h2>
        <button onClick={handleNextMonth} className="text-blue-500 transition duration-300 ease-in-out hover:text-blue-700">Next &gt;</button>
      </div>

      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th className="border-b p-3 text-left">Category</th>
            <th className="border-b p-3 text-left">Amount</th>
            <th className="border-b p-3 text-left">% of Total</th>
            <th className="border-b p-3 text-left">Progress</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category, index) => (
            <tr key={index} className="hover:bg-gray-100 transition">
              <td className="border-b p-3">{category.name}</td>
              <td className="border-b p-3">${category.amount}</td>
              <td className="border-b p-3">{category.percentage}%</td>
              <td className="border-b p-3">
                <div className="bg-gray-200 w-full h-4 rounded-full">
                  <div className="h-4 rounded-full bg-blue-500 transition" style={{ width: `${category.percentage}%` }}></div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="mt-4 text-gray-600">Compared to last month you spent 12% more on Food.</p>
    </div>
  );
};

export default Reports;

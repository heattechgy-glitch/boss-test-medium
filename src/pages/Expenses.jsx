import React, { useState } from 'react';

const Expenses = () => {
  const [expenses, setExpenses] = useState([
    { date: '2023-10-01', description: 'Grocery shopping', category: 'Food', amount: 50 },
    { date: '2023-10-02', description: 'Bus ticket', category: 'Transport', amount: 3 },
    { date: '2023-10-03', description: 'Electricity bill', category: 'Bills', amount: 75 },
    { date: '2023-10-04', description: 'Movie night', category: 'Entertainment', amount: 25 },
    { date: '2023-10-05', description: 'Dinner out', category: 'Food', amount: 40 },
    { date: '2023-10-06', description: 'Taxi', category: 'Transport', amount: 10 },
    { date: '2023-10-07', description: 'Water bill', category: 'Bills', amount: 30 },
    { date: '2023-10-08', description: 'Concert tickets', category: 'Entertainment', amount: 100 },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ description: '', amount: '', category: 'Food', date: '' });
  const [search, setSearch] = useState('');

  const handleAddExpense = () => {
    setShowForm(!showForm);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setExpenses([...expenses, form]);
    setForm({ description: '', amount: '', category: 'Food', date: '' });
    setShowForm(false);
  };

  const filteredExpenses = expenses.filter(expense => 
    expense.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 bg-gray-800 text-white min-h-screen">
      <h1 className="text-3xl mb-4">Recent Transactions</h1>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 p-2 w-full rounded bg-gray-900 text-white"
      />
      <button 
        onClick={handleAddExpense} 
        className="mb-4 bg-blue-500 p-2 rounded"
      >
        {showForm ? 'Cancel' : 'Add Expense'}
      </button>
      <table className="w-full mb-4">
        <thead>
          <tr>
            <th className="p-2 border-b border-gray-700">Date</th>
            <th className="p-2 border-b border-gray-700">Description</th>
            <th className="p-2 border-b border-gray-700">Category</th>
            <th className="p-2 border-b border-gray-700">Amount</th>
          </tr>
        </thead>
        <tbody>
          {filteredExpenses.map((expense, index) => (
            <tr key={index} className="text-center">
              <td className="p-2 border-b border-gray-700">{expense.date}</td>
              <td className="p-2 border-b border-gray-700">{expense.description}</td>
              <td className="p-2 border-b border-gray-700">
                <span className={`p-1 rounded bg-${expense.category === 'Food' ? 'green' : 
                    expense.category === 'Transport' ? 'blue' : 
                    expense.category === 'Bills' ? 'yellow' : 
                    expense.category === 'Entertainment' ? 'purple' : 'gray'}-500`}> 
                  {expense.category}
                </span>
              </td>
              <td className="p-2 border-b border-gray-700">${expense.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {showForm && (
        <form onSubmit={handleSubmit} className="bg-gray-900 p-4 rounded">
          <div className="mb-4">
            <label className="block mb-1">Description</label>
            <input
              type="text"
              name="description"
              value={form.description}
              onChange={handleChange}
              required
              className="p-2 w-full rounded bg-gray-800 text-white"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Amount</label>
            <input
              type="number"
              name="amount"
              value={form.amount}
              onChange={handleChange}
              required
              className="p-2 w-full rounded bg-gray-800 text-white"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Category</label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="p-2 w-full rounded bg-gray-800 text-white"
            >
              <option value="Food">Food</option>
              <option value="Transport">Transport</option>
              <option value="Bills">Bills</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-1">Date</label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              required
              className="p-2 w-full rounded bg-gray-800 text-white"
            />
          </div>
          <button type="submit" className="bg-green-500 p-2 rounded">
            Add Expense
          </button>
        </form>
      )}
    </div>
  );
};

export default Expenses;

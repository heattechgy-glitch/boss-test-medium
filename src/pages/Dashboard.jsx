import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
    const data = {
        totalSpent: 1247,
        biggestCategory: 'Food',
        budget: 2000,
        remaining: 753,
        categories: [
            { name: 'Food', value: 42 },
            { name: 'Transport', value: 18 },
            { name: 'Bills', value: 25 },
            { name: 'Entertainment', value: 10 },
            { name: 'Other', value: 5 }
        ]
    };

    return (
        <div className="dashboard">
            <div className="summary-cards">
                <div className="card">
                    <h3>Total Spent This Month</h3>
                    <p>${data.totalSpent}</p>
                </div>
                <div className="card">
                    <h3>Biggest Category</h3>
                    <p>{data.biggestCategory}</p>
                </div>
                <div className="card">
                    <h3>Remaining Budget</h3>
                    <p>${data.remaining}</p>
                </div>
            </div>
            <div className="bar-chart">
                {data.categories.map(category => (
                    <div key={category.name} className="bar-container">
                        <span className="bar-label">{category.name}</span>
                        <div className="bar" style={{ width: `${category.value}%` }}></div>
                        <span className="bar-value">{category.value}%</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;

// Add basic CSS for components in Dashboard.css
// .dashboard {
//     padding: 20px;
//     color: #fff;
// }
// .summary-cards {
//     display: flex;
//     justify-content: space-between;
//     margin-bottom: 20px;
// }
// .card {
//     background-color: #333;
//     padding: 20px;
//     border-radius: 8px;
//     text-align: center;
//     flex: 1;
//     margin: 0 10px;
// }
// .bar-chart {
//     background-color: #333;
//     padding: 20px;
//     border-radius: 8px;
// }
// .bar-container {
//     display: flex;
//     align-items: center;
//     margin-bottom: 10px;
// }
// .bar-label {
//     flex: 1;
// }
// .bar {
//     height: 20px;
//     background-color: #007bff;
//     border-radius: 4px;
// }
// .bar-value {
//     margin-left: 10px;
// }
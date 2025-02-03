// frontend/src/components/RevenueChart.js

import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';

const RevenueChart = () => {
  const [revenueData, setRevenueData] = useState([]);

  useEffect(() => {
    const fetchRevenueData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/revenue'); // Make sure to replace the URL if needed
        setRevenueData(response.data);
      } catch (error) {
        console.error("Error fetching revenue data", error);
      }
    };

    fetchRevenueData();
  }, []); // Empty dependency array to fetch only once on component mount

  return (
    <div>
      <h2>Revenue Chart</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={revenueData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="revenue" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueChart;

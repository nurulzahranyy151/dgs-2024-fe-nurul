// Finance.jsx
import React, { useState, useEffect } from 'react';
import { listWallets } from '../services/walletService';
import { listExpenseItems } from '../services/expenseItemService';

const Finance = () => {
  const [wallets, setWallets] = useState([]);
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchWallets = async () => {
      try {
        const response = await listWallets();
        setWallets(response.data);
      } catch (error) {
        console.error("Error fetching wallets:", error);
      }
    };

    const fetchExpenses = async () => {
      try {
        const response = await listExpenseItems();
        setExpenses(response.data);
      } catch (error) {
        console.error("Error fetching expenses:", error);
      }
    };

    fetchWallets();
    fetchExpenses();
  }, []);

  return (
    <div className="flex flex-col items-center p-4">

      <div className="container max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold text-blue-600 mb-4 text-center">Wallets</h2>
        <ul className="list-none">
          {wallets.map((wallet) => (
            <li key={wallet._id} className="flex justify-between items-center border-b border-gray-200 py-2">
              <span>{wallet.name}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="container max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-blue-600 mb-4 text-center">Expenses</h2>
        <ul className="list-none">
          {expenses.map((expense) => (
            <li key={expense._id} className="flex justify-between items-center border-b border-gray-200 py-2">
              <span>{expense.title}</span>
              <span className="font-medium text-red-600">${expense.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Finance;

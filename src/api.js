import axios from 'axios';

// IMPORTANT: Ensure that your environment variable is set to include '/api'
// For example: REACT_APP_API_URL=https://expense-tracker-backend-lma3.onrender.com/api
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Authentication Endpoints
export const registerUser = async (email, password) =>
  await axios.post(`${API_URL}/auth/register`, { email, password });

export const loginUser = async (email, password) =>
  await axios.post(`${API_URL}/auth/login`, { email, password });

// Expense Endpoints
export const getExpenses = async (token) =>
  await axios.get(`${API_URL}/expenses`, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const addExpense = async (expense, token) =>
  await axios.post(`${API_URL}/expenses`, expense, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const updateExpense = async (expenseId, expenseData, token) =>
  await axios.put(`${API_URL}/expenses/${expenseId}`, expenseData, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const deleteExpense = async (expenseId, token) =>
  await axios.delete(`${API_URL}/expenses/${expenseId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const exportPDF = async (token) =>
  await axios.get(`${API_URL}/expenses/export`, {
    headers: { Authorization: `Bearer ${token}` },
    responseType: 'blob',
  });

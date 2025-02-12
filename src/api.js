// src/api.js
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const registerUser = async (email, password) =>
  await axios.post(`${API_URL}/auth/register`, { email, password });

export const loginUser = async (email, password) =>
  await axios.post(`${API_URL}/auth/login`, { email, password });

export const getExpenses = async (token) =>
  await axios.get(`${API_URL}/expenses`, { headers: { Authorization: `Bearer ${token}` } });

export const addExpense = async (expense, token) =>
  await axios.post(`${API_URL}/expenses`, expense, { headers: { Authorization: `Bearer ${token}` } });

export const updateExpense = async (expenseId, expenseData, token) =>
  await axios.put(`${API_URL}/expenses/${expenseId}`, expenseData, { headers: { Authorization: `Bearer ${token}` } });

export const deleteExpense = async (expenseId, token) =>
  await axios.delete(`${API_URL}/expenses/${expenseId}`, { headers: { Authorization: `Bearer ${token}` } });

export const exportPDF = async (token) =>
  await axios.get(`${API_URL}/expenses/export`, { 
    headers: { Authorization: `Bearer ${token}` },
    responseType: 'blob',
  });

// src/components/Dashboard.jsx
import React, { useContext, useEffect, useState } from 'react';
import { Container, Typography, Button, Box, Grid, Alert } from '@mui/material';
import { getExpenses, addExpense, deleteExpense, exportPDF, updateExpense } from '../api';
import { AuthContext } from '../context/AuthContext';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import NavBar from './NavBar';

const Dashboard = () => {
  const { token } = useContext(AuthContext);
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState('');

  const fetchExpenses = async () => {
    try {
      const response = await getExpenses(token);
      setExpenses(response.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Error fetching expenses');
    }
  };

  useEffect(() => {
    fetchExpenses();
    // eslint-disable-next-line
  }, []);

  const handleAddExpense = async (expenseData) => {
    try {
      await addExpense(expenseData, token);
      fetchExpenses();
    } catch (err) {
      setError(err.response?.data?.message || 'Error adding expense');
    }
  };

  const handleDeleteExpense = async (expenseId) => {
    try {
      await deleteExpense(expenseId, token);
      fetchExpenses();
    } catch (err) {
      setError(err.response?.data?.message || 'Error deleting expense');
    }
  };

  const handleUpdateExpense = async (updatedExpense) => {
    try {
      await updateExpense(
        updatedExpense._id,
        {
          amount: updatedExpense.amount,
          category: updatedExpense.category,
          description: updatedExpense.description,
        },
        token
      );
      fetchExpenses();
    } catch (err) {
      setError(err.response?.data?.message || 'Error updating expense');
    }
  };

  const handleExportPDF = async () => {
    try {
      const response = await exportPDF(token);
      const url = window.URL.createObjectURL(
        new Blob([response.data], { type: 'application/pdf' })
      );
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'expense_report.pdf');
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (err) {
      setError(err.response?.data?.message || 'Error exporting PDF');
    }
  };

  return (
    <>
      <NavBar />
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Expense Dashboard
        </Typography>
        {error && <Alert severity="error">{error}</Alert>}
        <Box sx={{ my: 4 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <ExpenseForm onAddExpense={handleAddExpense} />
            </Grid>
            <Grid item xs={12} md={8}>
              <ExpenseList
                expenses={expenses}
                onDeleteExpense={handleDeleteExpense}
                onUpdateExpense={handleUpdateExpense}
              />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button variant="outlined" onClick={handleExportPDF}>
            Export to PDF
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default Dashboard;

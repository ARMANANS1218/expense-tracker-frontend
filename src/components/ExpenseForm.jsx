// src/components/ExpenseForm.jsx
import React, { useState } from 'react';
import { TextField, Button, MenuItem, Box, Typography } from '@mui/material';

const ExpenseForm = ({ onAddExpense }) => {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Expense');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || !category) return;
    onAddExpense({ amount: parseFloat(amount), category, description });
    setAmount('');
    setCategory('Expense');
    setDescription('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ p: 2, boxShadow: 3, borderRadius: 2 }}>
      <Typography variant="h6" gutterBottom>
        Add Expense
      </Typography>
      <TextField
        label="Amount"
        type="number"
        fullWidth
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
        margin="normal"
      />
      <TextField
        select
        label="Category"
        fullWidth
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
        margin="normal"
      >
        <MenuItem value="Income">Income</MenuItem>
        <MenuItem value="Expense">Expense</MenuItem>
      </TextField>
      <TextField
        label="Description"
        fullWidth
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
        Add Expense
      </Button>
    </Box>
  );
};

export default ExpenseForm;

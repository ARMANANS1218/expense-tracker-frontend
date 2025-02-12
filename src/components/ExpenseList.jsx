// src/components/ExpenseList.jsx
import React, { useState } from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, IconButton, Paper, TableContainer } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import EditExpenseDialog from './EditExpenseDialog';

const ExpenseList = ({ expenses, onDeleteExpense, onUpdateExpense }) => {
  const [editingExpense, setEditingExpense] = useState(null);

  const handleEditClick = (expense) => {
    setEditingExpense(expense);
  };

  const handleDialogClose = () => {
    setEditingExpense(null);
  };

  const handleSave = (updatedExpense) => {
    onUpdateExpense(updatedExpense);
    setEditingExpense(null);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Amount</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {expenses.map((expense) => (
              <TableRow key={expense._id}>
                <TableCell>${expense.amount}</TableCell>
                <TableCell>{expense.category}</TableCell>
                <TableCell>{expense.description || 'N/A'}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleEditClick(expense)} color="primary">
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => onDeleteExpense(expense._id)} color="error">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {editingExpense && (
        <EditExpenseDialog
          open={!!editingExpense}
          onClose={handleDialogClose}
          expense={editingExpense}
          onSave={handleSave}
        />
      )}
    </>
  );
};

export default ExpenseList;

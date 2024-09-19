import React from 'react';
import { List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/DeleteOutline';

const ExpenseList = ({ expenses, removeExpense }) => {
  return (
    <List>
      {expenses.map((expense, index) => (
        <ListItem key={index} secondaryAction={
          <IconButton edge="end" onClick={() => removeExpense(index)}>
            <DeleteIcon />
          </IconButton>
        }>
          <ListItemText
            primary={`${expense.name}`}
            secondary={`R$ ${expense.value.toFixed(2)} - ${expense.date}`}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default ExpenseList;
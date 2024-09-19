import React, { useState, useEffect } from 'react';
import ExpensesForm from './components/ExpensesForm';
import ExpenseList from './components/ExpenseList';
import TotalExpenses from './components/TotalExpenses';
import DarkTheme from './themes/DarkTheme';
import { Container, Typography, Paper, CssBaseline, ThemeProvider } from '@mui/material';

const App = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const savedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
    setExpenses(savedExpenses);
  }, []);

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const removeExpense = (index) => {
    setExpenses(expenses.filter((_, i) => i !== index));
  };

  const ExpensesSum = expenses.reduce((total, expense) => total + expense.value, 0);

  return (
    <ThemeProvider theme={DarkTheme}>
      <CssBaseline />
      <Container>
        <Paper style={{ padding: '16px', marginTop: '16px' }}>
          <Typography variant="h3" align='center' gutterBottom>
            Gerenciador de Gastos
          </Typography>
          <br />
          <ExpensesForm addExpense={addExpense} />
          <br />
          <TotalExpenses total={ExpensesSum} />
          <br />
          <ExpenseList expenses={expenses} removeExpense={removeExpense} />
        </Paper>
      </Container>
    </ThemeProvider>

  );
};

export default App;
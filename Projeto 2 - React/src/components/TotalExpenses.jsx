import React from 'react';
import { Typography } from '@mui/material';
import '../styles.css';

const TotalExpenses = ({ total }) => {
  return (
    <Typography variant="h5">
      Total gasto: R$ {total.toFixed(2)}
    </Typography>
  );
};

export default TotalExpenses;
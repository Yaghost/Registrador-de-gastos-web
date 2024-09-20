import React, { useState } from 'react';
import { Button, TextField, Grid2 } from '@mui/material';

const ExpensesForm = ({ addExpense }) => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [value, setValue] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if(name && date && value > 0) {
            addExpense({ name, date, value: parseFloat(value) });
            setName('');
            setDate('');
            setValue('');
        } else {
            alert('Insira um valor válido!');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Grid2 container spacing={5}>
                <Grid2 item xs={12} sm={4}>
                    <TextField
                        label="Nome"
                        variant="outlined"
                        fullWidth
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </Grid2>
                <Grid2 item xs={12} sm={4}>
                    <TextField
                        label="Data"
                        variant="outlined"
                        type="date"
                        fullWidth
                        InputLabelProps={{ shrink: true }}
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </Grid2>
                <Grid2 item xs={12} sm={4}>
                    <TextField
                        label="Valor"
                        variant="outlined"
                        fullWidth
                        type="number"
                        InputProps={{ startAdornment: 'R$' }}
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        required
                    />
                </Grid2>
                <br />
                <Grid2 item xs={12}>
                    <Button variant="contained" color="primary" type="submit">
                        Adicionar
                    </Button>
                </Grid2>
            </Grid2>
        </form>
    );
};

export default ExpensesForm;
import React from 'react';
import { Add as AddIcon } from '@mui/icons-material';
import { TextField, Paper, Button } from '@mui/material';

const DEFAULT_TODO = { name: '', description: '' };

export const Panel = () => {
  const [todo, setTodo] = React.useState({ name: '', description: '' });

  const onButtonClickHandler = () => {
    setTodo(DEFAULT_TODO);
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  return (
    <Paper
      elevation={3}
      sx={{
        width: '100%',
        padding: '25px 30px',
        borderRadius: 2,
        display: 'flex',
        justifyContent: 'space-between',
        alignContent: 'center',
        gap: 2
      }}
    >
      <TextField value={todo.name} onChange={onChangeHandler} name='name' label='name' />
      <TextField
        value={todo.description}
        onChange={onChangeHandler}
        name='description'
        label='description'
      />

      <Button startIcon={<AddIcon />} variant='outlined' onClick={onButtonClickHandler}>
        Add
      </Button>
    </Paper>
  );
};

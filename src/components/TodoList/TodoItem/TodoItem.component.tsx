import React from 'react';
import { IconButton, Typography, Box, Paper } from '@mui/material';

import { Delete as DeleteIcon } from '@mui/icons-material';

type Todo = {
  id: number;
  name: string;
  description: string;
  checked: boolean;
};

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo }) => (
  <Paper
    elevation={3}
    sx={{
      width: '100%',
      marginTop: '15px',
      padding: '20px 28px',
      borderRadius: 2,
      display: 'flex',
      justifyContent: 'space-between',
      alignContent: 'center',
      gap: 2
    }}
  >
    <Box textAlign='left'>
      <Typography
        variant='h5'
        component='h5'
        gutterBottom
        sx={{ cursor: 'pointer', textDecorationLine: todo.checked ? 'line-through' : 'none' }}
      >
        {todo.name}
      </Typography>
      <Typography variant='subtitle1' component='div' gutterBottom>
        {todo.description}
      </Typography>
    </Box>
    <Box>
      <IconButton color='error' aria-label='delete'>
        <DeleteIcon />
      </IconButton>
    </Box>
  </Paper>
);

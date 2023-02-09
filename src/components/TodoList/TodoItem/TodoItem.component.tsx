import React from 'react';
import { IconButton, Typography, Box, Paper } from '@mui/material';

import { Delete as DeleteIcon } from '@mui/icons-material';

import type { Todo } from '../../../App';

interface TodoItemProps {
  todo: Todo;
  onDeleteTodo: (id: Todo['id']) => void;
  onCheckTodo: (id: Todo['id']) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, onDeleteTodo, onCheckTodo }) => (
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
      gap: 2,
      opacity: todo.checked ? 0.5 : 1
    }}
  >
    <Box textAlign='left'>
      <Typography
        variant='h5'
        component='h5'
        gutterBottom
        sx={{ cursor: 'pointer', textDecorationLine: todo.checked ? 'line-through' : 'none' }}
        onClick={() => onCheckTodo(todo.id)}
      >
        {todo.name}
      </Typography>
      <Typography variant='subtitle1' component='div' gutterBottom>
        {todo.description}
      </Typography>
    </Box>
    <Box>
      <IconButton onClick={() => onDeleteTodo(todo.id)} color='error' aria-label='delete'>
        <DeleteIcon />
      </IconButton>
    </Box>
  </Paper>
);

import React from 'react';

import { Paper } from '@mui/material';

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
      padding: '25px 30px',
      borderRadius: 2,
      display: 'flex',
      justifyContent: 'space-between',
      alignContent: 'center',
      gap: 2
    }}
  >
    {todo.name}
  </Paper>
);

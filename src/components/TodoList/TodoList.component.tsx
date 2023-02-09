import React from 'react';
import { Box } from '@mui/material';

import { TodoItem } from './TodoItem/TodoItem.component';

const todoList = [
  {
    id: 1,
    name: 'task 1',
    description: 'test',
    checked: false
  },
  {
    id: 2,
    name: 'task 2',
    description: 'test',
    checked: false
  },
  {
    id: 3,
    name: 'task 3',
    description: 'qwerqwrqwrqwr qwer qwer qwer qwer qwerqwer',
    checked: true
  }
];

export const TodoList = () => (
  <Box>
    {todoList.map((todo) => (
      <TodoItem todo={todo} />
    ))}
  </Box>
);

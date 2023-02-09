import React from 'react';
import { Box } from '@mui/material';

import type { Todo } from '../../App';
import { TodoItem } from './TodoItem/TodoItem.component';

interface TodoListProps {
  todoList: Todo[];
  onDeleteTodo: (id: Todo['id']) => void;
  onCheckTodo: (id: Todo['id']) => void;
}

export const TodoList: React.FC<TodoListProps> = ({ todoList, onDeleteTodo, onCheckTodo }) => (
  <Box>
    {todoList.map((todo) => (
      <TodoItem todo={todo} onDeleteTodo={onDeleteTodo} onCheckTodo={onCheckTodo} />
    ))}
  </Box>
);

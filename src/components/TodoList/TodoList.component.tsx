import React from 'react';
import { Box } from '@mui/material';

import { TodoItem } from './TodoItem/TodoItem.component';
import { Panel } from '../Panel/Panel.component';
import { useTodo } from '../../context';

export const TodoList: React.FC = () => {
  const { todos, todoIdForEdit, deleteTodo, checkTodo, selectTodoIdForEdit } = useTodo();

  return (
    <Box>
      {todos.map((todo) => {
        if (todo.id === todoIdForEdit) return <Panel mode='edit' editTodo={todo} />;
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            checkTodo={checkTodo}
            selectTodoIdForEdit={selectTodoIdForEdit}
          />
        );
      })}
    </Box>
  );
};

import React from 'react';

import { TextField, Paper, Button } from '@mui/material';

import { Edit as EditIcon } from '@mui/icons-material';

import type { Todo } from '../../../App';

interface EditTodoItemProps {
  todo: Todo;
  onChangeTodo: ({ name, description }: Omit<Todo, 'id' | 'checked'>) => void;
}

export const EditTodoItem: React.FC<EditTodoItemProps> = ({ todo, onChangeTodo }) => {
  const [editTodo, setEditTodo] = React.useState({
    name: todo.name,
    description: todo.description
  });

  const onButtonClickHandler = () => {
    onChangeTodo(todo);
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    setEditTodo({ ...todo, [name]: value });
    console.log(todo);
  };

  return (
    <Paper
      elevation={2}
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
      <TextField value={editTodo.name} onChange={onChangeHandler} name='name' label='name' />
      <TextField
        value={editTodo.description}
        onChange={onChangeHandler}
        name='description'
        label='description'
      />
      <Button onClick={onButtonClickHandler} variant='outlined' startIcon={<EditIcon />}>
        EDIT
      </Button>
    </Paper>
  );
};

import React from 'react';
import { Add as AddIcon, Edit as EditIcon } from '@mui/icons-material';

import { TextField, Paper, Button } from '@mui/material';

import { useTodo } from '../../context';

const DEFAULT_TODO = { name: '', description: '' };

interface AddTodoPanelProps {
  mode: 'add';
}

interface EditTodoPanelProps {
  mode: 'edit';
  editTodo: Omit<Todo, 'id' | 'checked'>;
}

type TodoPanelProps = AddTodoPanelProps | EditTodoPanelProps;

export const Panel: React.FC<TodoPanelProps> = (props) => {
  const isEdit = props.mode === 'edit';
  const { changeTodo, addTodo } = useTodo();
  const [todo, setTodo] = React.useState({ name: '', description: '' });

  const onClick = () => {
    if (isEdit) {
      return changeTodo(todo);
    }
    addTodo(todo);
    setTodo(DEFAULT_TODO);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  return (
    <Paper
      elevation={3}
      sx={{
        marginTop: '15px',
        width: '100%',
        padding: '25px 30px',
        borderRadius: 2,
        display: 'flex',
        justifyContent: 'space-between',
        alignContent: 'center',
        gap: 2
      }}
    >
      <TextField value={todo.name} onChange={onChange} name='name' label='name' />
      <TextField
        value={todo.description}
        onChange={onChange}
        name='description'
        label='description'
      />

      <Button startIcon={isEdit ? <EditIcon /> : <AddIcon />} variant='outlined' onClick={onClick}>
        {isEdit ? 'Edit' : 'Add'}
      </Button>
    </Paper>
  );
};

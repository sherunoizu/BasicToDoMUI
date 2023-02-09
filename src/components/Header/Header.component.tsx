import React from 'react';

import { Typography, Box } from '@mui/material';

import { useTodo } from '../../context';

export const Header = () => {
  const { todos } = useTodo();

  return (
    <Box textAlign='left'>
      <Typography sx={{ fontSize: 35 }} variant='h1' component='h1' gutterBottom>
        Todo list <b>{todos.length}</b> task(s)
      </Typography>
    </Box>
  );
};

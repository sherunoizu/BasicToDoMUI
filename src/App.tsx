import React from 'react';

import { Box } from '@mui/material';

import { TodoProvider } from './context';

import { Header, Panel, TodoList } from './components';

import './App.css';

const App = () => (
  <TodoProvider>
    <div className='App'>
      <Box display='flex' flexDirection='column' width='500px'>
        <Header />
        <Panel mode='add' />
        <TodoList />
      </Box>
    </div>
  </TodoProvider>
);

export default App;

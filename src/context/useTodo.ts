import React from 'react';

import { TodoContext } from './todo.context';

export const useTodo = () => React.useContext(TodoContext);

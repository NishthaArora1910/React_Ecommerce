import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Box, Button, TextField, Typography, IconButton, List, ListItem, ListItemText, ListItemSecondaryAction } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function TodoPage() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');
  const [editId, setEditId] = useState(null);

  const handleAddTodo = () => {
    if (editId) {
      setTodos(todos.map(todo => (todo.id === editId ? { ...todo, task } : todo)));
      setEditId(null);
    } else {
      setTodos([...todos, { id: uuidv4(), task }]);
    }
    setTask('');
  };

  const handleEditTodo = (id) => {
    const todo = todos.find(todo => todo.id === id);
    setTask(todo.task);
    setEditId(id);
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>To-Do List</Typography>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <TextField
          label="New Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          fullWidth
        />
        <Button variant="contained" onClick={handleAddTodo}>
          {editId ? 'Update' : 'Add'}
        </Button>
      </Box>
      <List sx={{ mt: 4 }}>
        {todos.map((todo) => (
          <ListItem key={todo.id} sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <ListItemText primary={todo.task} />
            <ListItemSecondaryAction>
              <IconButton edge="end" onClick={() => handleEditTodo(todo.id)}>
                <EditIcon />
              </IconButton>
              <IconButton edge="end" onClick={() => handleDeleteTodo(todo.id)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default TodoPage;

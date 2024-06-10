
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import Container from '@mui/material/Container';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import TodoPage from './components/TodoPage'; // Import TodoPage
import About from './components/About'; // Import About

function App() {
  const [cart, setCart] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleDeleteItem = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  return (
    <Router>
      <div className="App" style={{ backgroundColor: '#F8F9F9', minHeight: '100vh' }}>
        <Navbar onCartClick={handleDrawerOpen} />
        <Container sx={{ mt: 12 }}> 
          <Routes>
            <Route path="/" element={<ProductList onAddToCart={handleAddToCart} />} />
            <Route path="/todo" element={<TodoPage />} />
            <Route path="/about" element={<About />} /> 
          </Routes>
        </Container>
        <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerClose}>
          <div style={{ width: 250, padding: 16 }}>
            <IconButton onClick={handleDrawerClose}>
              <CloseIcon />
            </IconButton>
            <Typography variant="h6">Items in Cart</Typography>
            <List>
              {cart.map((item, index) => (
                <ListItem key={index}>
                  <ListItemText
                    primary={`${index + 1}. ${item.title}`}
                    secondary={`$${item.price.toFixed(2)}`}
                  />
                  <IconButton onClick={() => handleDeleteItem(index)}>
                    <DeleteIcon />
                  </IconButton>
                </ListItem>
              ))}
            </List>
            <Typography variant="h6">Total: ${totalPrice.toFixed(2)}</Typography>
          </div>
        </Drawer>
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={6000}
          onClose={handleSnackbarClose}
        >
          <Alert onClose={handleSnackbarClose} severity="success">
            Item added to cart!
          </Alert>
        </Snackbar>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function ProductCard({ product, onAddToCart }) {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        transition: 'transform 0.3s ease-in-out',
        position: 'relative', // To position the "Learn More" button
        '&:hover': {
          transform: 'scale(1.05)',
          backgroundColor: '#f0f0f0',
        },
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={product.image}
        alt={product.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        {/* Show product description only if showDescription is true */}
        {showDescription && (
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
        )}
        <Typography variant="body2" color="text.secondary">
          Category: {product.category}
        </Typography>
        {/* Change product price color to blue and make it bold */}
        <Typography variant="h6" color="primary" fontWeight="bold">
          ${product.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => onAddToCart(product)}>Add to Cart</Button>
        {/* Learn More button */}
        <Button size="small" onClick={toggleDescription} style={{ position: 'absolute', bottom: 0, right: 0 }}>
          {showDescription ? 'Hide Description' : 'Learn More'}
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;

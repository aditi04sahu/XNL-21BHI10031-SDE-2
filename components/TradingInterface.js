import { useState } from 'react';
import { Button, TextField, Typography, Box, Select, MenuItem } from '@mui/material';

const TradingInterface = () => {
  const [orderType, setOrderType] = useState('market');
  const [symbol, setSymbol] = useState('BTC/USD');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');

  const handlePlaceOrder = () => {
    alert(`Order placed: ${orderType} ${symbol} ${quantity} units at ${price || 'market price'}`);
    setQuantity('');
    setPrice('');
  };

  return (
    <Box 
      sx={{
        p: 3,
        bgcolor: 'background.paper',
        borderRadius: 2,
        boxShadow: 2,
        mb: 3
      }}
    >
      <Typography variant="h6" gutterBottom>
        Place New Order
      </Typography>
      
      <Box component="form" sx={{ mt: 2 }}>
        <Box sx={{ mb: 2 }}>
          <Select
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
            displayEmpty
            fullWidth
          >
            <MenuItem value="BTC/USD">BTC/USD</MenuItem>
            <MenuItem value="ETH/USD">ETH/USD</MenuItem>
            <MenuItem value="SOL/USD">SOL/USD</MenuItem>
          </Select>
        </Box>
        
        <Box sx={{ mb: 2 }}>
          <Select
            value={orderType}
            onChange={(e) => setOrderType(e.target.value)}
 display           Empty
            fullWidth
          >
            <MenuItem value="market">Market Order</MenuItem>
            <MenuItem value="limit">Limit Order</MenuItem>
            <MenuItem value="stop-loss">Stop-Loss Order</MenuItem>
          </Select>
        </Box>
        
        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
          <TextField
            label="Quantity"
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            fullWidth
          />
          
          {orderType !== 'market' && (
            <TextField
              label="Price"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              fullWidth
            />
          )}
        </Box>
        
        <Button 
          variant="contained" 
          onClick={handlePlaceOrder}
          disabled={!quantity || (orderType !== 'market' && !price)}
          fullWidth
        >
          Place Order
        </Button>
      </Box>
    </Box>
  );
};

export default TradingInterface;

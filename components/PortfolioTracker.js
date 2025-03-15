import { useState, useEffect } from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Button } from '@mui/material'; // Added Button to the import

const PortfolioTracker = () => {
  const [portfolio, setPortfolio] = useState(() => {
    const saved = localStorage.getItem('portfolio');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('portfolio', JSON.stringify(portfolio));
  }, [portfolio]);

  const addPosition = (position) => {
    setPortfolio(prev => [...prev, position]);
  };

  return (
    <Paper elevation={2} sx={{ p: 2, mb: 3 }}>
      <Typography variant="h6" gutterBottom>
        Portfolio
      </Typography>
      
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Symbol</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Average Price</TableCell>
              <TableCell align="right">Current Value</TableCell>
              <TableCell align="right">P&L</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {portfolio.map((row, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {row.symbol}
                </TableCell>
                <TableCell align="right">{row.quantity}</TableCell>
                <TableCell align="right">${row.averagePrice.toFixed(2)}</TableCell>
                <TableCell align="right">${(row.quantity * row.currentPrice).toFixed(2)}</TableCell>
                <TableCell align="right">
                  ${((row.quantity * row.currentPrice) - (row.quantity * row.averagePrice)).toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      
      <Button 
        variant="outlined" 
        onClick={() => addPosition({
          symbol: 'BTC/USD',
          quantity: 0.1,
          averagePrice: 35000,
          currentPrice: 35000 + Math.random() * 2000
        })}
        sx={{ mt: 2 }}
      >
        Add Demo Position
      </Button>
    </Paper>
  );
};

export default PortfolioTracker;
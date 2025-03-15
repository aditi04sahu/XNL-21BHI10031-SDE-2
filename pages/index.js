import { useAuth } from '../components/AuthContext';
import RealTimeChart from '../components/RealTimeChart';
import TradingInterface from '../components/TradingInterface';
import PortfolioTracker from '../components/PortfolioTracker';
import NewsFeed from '../components/NewsFeed';
import { Container, Grid, Box, Typography, AppBar, Toolbar, Button, useTheme } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect } from 'react'; // Add this import

const Dashboard = () => {
  const { user, logout } = useAuth();
  const router = useRouter();
  const theme = useTheme();

  // Handle authentication check on the client side
  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);

  if (!user) {
    return null;
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Crypto Trading Dashboard
          </Typography>
          <Button color="inherit" onClick={logout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      
      <Container maxWidth="xl" sx={{ mt: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom>
              Welcome, {user.username}
            </Typography>
            <Typography color="textSecondary">
              Your role: {user.role}
            </Typography>
          </Grid>
          
          <Grid item xs={12}>
            <RealTimeChart />
          </Grid>
          
          <Grid item xs={12} md={6}>
            <TradingInterface />
          </Grid>
          
          <Grid item xs={12} md={6}>
            <PortfolioTracker />
          </Grid>
          
          <Grid item xs={12}>
            <NewsFeed />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Dashboard;
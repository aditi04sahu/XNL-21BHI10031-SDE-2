import { useState, useEffect } from 'react';
import { Paper, List, ListItem, ListItemText, Typography, CircularProgress, Box } from '@mui/material'; // Added Box to the import

const NewsFeed = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching news data
    const fetchNews = async () => {
      const mockNews = [
        {
          title: "Bitcoin Surpasses $40,000 as Institutional Adoption Grows",
          timestamp: new Date().getTime() - 3600000,
          source: "CoinDesk"
        },
        {
          title: "Ethereum 2.0 Merge Successfully Completed",
          timestamp: new Date().getTime() - 7200000,
          source: "The Block"
        },
        {
          title: "Major Bank Announces Crypto Custody Services",
          timestamp: new Date().getTime() - 10800000,
          source: "Bloomberg"
        }
      ];
      
      setNews(mockNews);
      setLoading(false);
    };

    fetchNews();
  }, []);

  return (
    <Paper elevation={2} sx={{ p: 2, height: '100%' }}>
      <Typography variant="h6" gutterBottom>
        Market News
      </Typography>
      
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 3 }}>
          <CircularProgress />
        </Box>
      ) : (
        <List>
          {news.map((item, index) => (
            <ListItem key={index} divider>
              <ListItemText
                primary={item.title}
                secondary={`${new Date(item.timestamp).toLocaleTimeString()} - ${item.source}`}
              />
            </ListItem>
          ))}
        </List>
      )}
    </Paper>
  );
};

export default NewsFeed;
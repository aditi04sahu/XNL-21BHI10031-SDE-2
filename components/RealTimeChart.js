import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { useState, useEffect } from 'react';

// Register the required chart components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const RealTimeChart = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'BTC/USD',
        data: [],
        borderColor: '#00b894',
        backgroundColor: 'rgba(0, 184, 148, 0.1)',
        fill: true,
        tension: 0.4,
      },
    ],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const newPrice = Math.random() * 20000 + 30000;
      const newTime = new Date().toLocaleTimeString();
      
      setChartData(prevData => ({
        labels: [...prevData.labels.slice(-20), newTime],
        datasets: [{
          ...prevData.datasets[0],
          data: [...prevData.datasets[0].data.slice(-20), newPrice],
        }]
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ height: '400px', width: '100%' }}>
      <Line 
        data={chartData} 
        options={{
          responsive: true,
          maintainAspectRatio: false,
          interaction: {
            mode: 'index',
            intersect: false,
          },
          plugins: {
            legend: {
              position: 'top',
            },
            tooltip: {
              enabled: true,
            },
          },
          scales: {
            y: {
              beginAtZero: false,
            },
          },
        }}
      />
    </div>
  );
};

export default RealTimeChart;
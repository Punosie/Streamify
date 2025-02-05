import EChartsReact from "echarts-for-react";
import { mockData } from "../data/mockData";

// User Growth Chart - Line Chart
const UserGrowthChart = () => {
  const userGrowthData = mockData.userGrowth;
  const months = userGrowthData.map((data) => data.month);
  const totalUsers = userGrowthData.map((data) => data.total);
  const activeUsers = userGrowthData.map((data) => data.active);

  const option = {
    title: {
      text: "User Growth Over Time",
      textStyle: {
        color: "#fff", // Set title color to white
      },

    },
    tooltip: {
      trigger: "axis",
    },
    xAxis: {
      type: "category",
      data: months,
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "Total Users",
        type: "line",
        data: totalUsers,
      },
      {
        name: "Active Users",
        type: "line",
        data: activeUsers,
      },
    ],
    responsive: true,
  };

  return <EChartsReact option={option} />;
};

// Revenue Distribution - Pie Chart
const RevenueDistributionChart = () => {
    const revenue = mockData.revenue;
    const data = [
      { value: revenue.subscriptions, name: "Subscriptions" },
      { value: revenue.ads, name: "Ads" },
      { value: revenue.premiumFeatures, name: "Premium Features" },
      { value: revenue.merchandise, name: "Merchandise" },
      { value: revenue.partnerships, name: "Partnerships" },
      { value: revenue.donations, name: "Donations" },
      { value: revenue.liveEvents, name: "Live Events" },
      { value: revenue.licensing, name: "Licensing" },
      { value: revenue.affiliateMarketing, name: "Affiliate Marketing" },
    ];
  
    const option = {
      title: {
        text: "Revenue Distribution",
        left: "center",
        textStyle: {
            color: "#fff", // Set title color to white
          },
      },
      tooltip: {
        trigger: "item",
      },
      series: [
        {
          type: "pie",
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          padAngle: 5,
          data: data,
          itemStyle: {
            borderRadius: 5,
          },
          label: {
            show: false,
            position: 'inside', // Ensure label is centered inside the pie
            formatter: '{b}\n{d}%', // Display category name and percentage
            fontSize: 14,
            fontWeight: 'bold',
            color: '#fff',
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 12,
              fontWeight: 'bold',
              position: 'inside', // Center the label when hovering
            },
          },
          labelLine: {
            show: false, // Hide the label line
          },
        },
      ],
    responsive: true,
    };
  
    return <EChartsReact option={option} />;
  };
  

// Top 5 Streamed Songs - Bar Chart
const TopSongsChart = () => {
    const topSongs = mockData.topSongs.slice(0, 5);
    const songNames = topSongs.map((song) => song.name);
    const streams = topSongs.map((song) => song.streams);

    const option = {
        title: {
            text: "Top 5 Streamed Songs",
            textStyle: {
                color: "#fff", // Set title color to white
            },
        },
        tooltip: {
            trigger: "axis",
        },
        xAxis: {
            type: "category",
            data: songNames,
        },
        yAxis: {
            type: "value",
            axisLabel: {
                formatter: (value) => `${(value / 1000).toFixed(1)}K`, // Format y-axis labels to show 'K' for every 1000
            },
        },
        series: [
            {
                name: "Streams",
                type: "bar",
                data: streams,
                itemStyle: {
                    color: (params) => {
                        const colors = ["#5470C6", "#91CC75", "#FAC858", "#EE6666", "#73C0DE"];
                        return colors[params.dataIndex % colors.length];
                    },
                },
            },
        ],
        responsive: true,
    };

    return <EChartsReact option={option} />;
};

export { UserGrowthChart, RevenueDistributionChart, TopSongsChart };

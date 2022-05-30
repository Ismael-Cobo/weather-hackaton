import { useMemo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);



export const LineChart = ({ hours, tempC, max_avgc }) => {


  const options = {
    fill: true,
    responsive: true,
    scales: {
      y: {
        min: 0,
        max: max_avgc
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const data = useMemo(function () {

    return {
      datasets: [
        {
          data: tempC,
          tension: 0.3,
          borderColor: "rgb(75, 192, 192)",
          pointRadius: 6,
          backgroundColor: "rgba(75, 192, 192, 0.3)",
          color: 'white'
        },
      ],
      labels: hours
    }

  }, [hours, tempC, max_avgc])


  return <Line data={data} options={options} />
}

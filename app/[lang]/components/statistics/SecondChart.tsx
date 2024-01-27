'use client';
import React, { FC } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
// import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Locale } from '@/i18n.config';

ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartProps {
  labels: string[];
  data: number[];
  backgroundColor: string[];
  lang: Locale
}

const SecondChart: FC<PieChartProps> = ({ labels, data, backgroundColor, lang }) => {

  const chartData = {
    labels,
    datasets: [
      {
        label: '%',
        data,
        backgroundColor,
        borderWidth: 1,
        hoverOffset: 20,
        datalabels: {
					opacity : 0
        },
      },
    ],
  };

  return (
    <div>
      <Doughnut data={chartData} width={350} height={350}/>
    </div>
  );
};

export default SecondChart;

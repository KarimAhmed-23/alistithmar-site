'use client';
import React, { FC } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Locale } from '@/i18n.config';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

interface PieChartProps {
  labels: string[];
  data: number[];
  backgroundColor: string[];
  lang: Locale
}

const PieChart: FC<PieChartProps> = ({ labels, data, backgroundColor, lang }) => {

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
          formatter: (value: any, context: any) => {
            const dataset = context.chart.data.datasets[context.datasetIndex];
            const total = dataset.data.reduce((acc: number, val: number) => acc + val, 0);
            const percentage = ((value / total) * 100).toFixed(2) + '%';
            return percentage;
          },
          align: lang === 'ar' ? -1 : 'center' as const,
          color: 'white',
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

export default PieChart;

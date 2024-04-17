'use client';
import { PieChart as MinimalPieChart, PieChartProps } from 'react-minimal-pie-chart';

export default function PieChart(props: PieChartProps) {
  return (
    <MinimalPieChart
      label={({ dataEntry }) => dataEntry.title}
      labelStyle={{
        fontSize: '11px',
        // fontFamily: 'sans-serif',
        fill: '#fff',
      }}
      labelPosition={54}
      {...props}
    />
  );
}

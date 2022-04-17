import React, { FC } from 'react';
import {
  Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis,
} from 'recharts';
import { IChartData } from '../../utils/ConvertJsonToChartData';

interface IChartProps {
  data: IChartData[];
  color: string;
}

const Chart: FC<IChartProps> = ({ data, color }) => (
  <BarChart
    width={1000}
    height={600}
    data={data}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" label={{ value: 'Qнеф - т/сут', position: 'insideBottomRight', dy: 10 }} />
    <YAxis label={{ value: 'Количество скважин', angle: -90, position: 'insideLeft' }} />
    <Tooltip />
    <Legend />
    <Bar name="Количество скважин" dataKey="count" fill={color} />
  </BarChart>
);

export default Chart;

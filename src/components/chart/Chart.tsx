import React, { FC } from 'react';
import {
  Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis,
} from 'recharts';
import { IChartData } from '../../utils/ConvertJsonToChartData';

interface IChartProps {
  data: IChartData[];
}

const Chart: FC<IChartProps> = ({ data }) => (
  <BarChart
    width={1000}
    height={600}
    data={data}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="количество" fill="#8884d8" />
  </BarChart>
);

export default Chart;

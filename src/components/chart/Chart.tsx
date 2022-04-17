import React, { FC } from 'react';
import {
  Bar, BarChart, CartesianGrid, LabelList, Tooltip, XAxis, YAxis,
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
    <XAxis dataKey="name" label={{ value: 'Дебит нефти, т/сут', position: 'insideBottom', dy: 15 }} />
    <YAxis label={{ value: 'Количество скважин, ед.', angle: -90, position: 'insideLeft' }} />
    <Tooltip />
    {/* <Legend /> */}
    <Bar name="Количество скважин, ед." dataKey="count" fill={color}>
      <LabelList dataKey="count" position="center" />
    </Bar>
  </BarChart>
);

export default Chart;

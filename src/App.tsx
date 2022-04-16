import React from 'react';
import './App.scss';
import { Button, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { data } from './mock/data';

const App = () => {
  const handleUploadingFile = (info: any) => {
    console.log(info.file);
  };

  return (
    <div className="main">
      <div>
        <Upload
          name="excel-file"
          customRequest={handleUploadingFile}
        >
          <Button icon={<UploadOutlined />}>
            Click to Upload
          </Button>
        </Upload>
      </div>
      <div>
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
          <Bar dataKey="pv" fill="#8884d8" />
        </BarChart>
      </div>
    </div>
  );
};

export default App;

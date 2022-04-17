import React, { useEffect, useState } from 'react';
import './App.scss';
import {
  Button, Form, Input, Upload,
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { RcFile } from 'antd/es/upload';
import { SketchPicker } from 'react-color';
import { importExcel } from './utils/importExcel';
import Chart from './components/chart/Chart';
import { IChartData } from './utils/ConvertJsonToChartData';

const App = () => {
  const [data, setData] = useState([] as IChartData[]);
  const [interval, setInterval] = useState(2);
  const [file, setFile] = useState({} as RcFile);
  const [barColor, setBarColor] = useState('#279B33');

  useEffect(() => {
    if (file.name) {
      importExcel(file, interval, (chartData: any) => {
        setData(chartData);
      });
    }
  }, [file, interval]);

  const handleUploadingFile = (uploadedFile: RcFile) => {
    if (uploadedFile) {
      setFile(uploadedFile);
    }
    return false;
  };

  const handleRemoveFile = () => {
    setFile({} as RcFile);
    setData([] as IChartData[]);
  };

  const handleClickFinishButton = (values: any) => {
    console.log(values);
    if (values.interval) setInterval(values.interval);
  };

  const handleColorChange = (color: any) => {
    setBarColor(color.hex);
  };

  return (
    <div className="main">
      <div className="main__header">
        <div>
          <h3>Загрузите Excel файл</h3>
          <Upload
            name="excel-file"
            beforeUpload={handleUploadingFile}
            multiple={false}
            accept=".xls, .xlsx"
            onRemove={handleRemoveFile}
          >
            <Button icon={<UploadOutlined />}>
              Click to Upload
            </Button>
          </Upload>
        </div>
        <div>
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            onFinish={handleClickFinishButton}
          >
            <Form.Item
              label="Интервал"
              name="interval"
            >
              <Input placeholder="По-умолчанию 2" />
            </Form.Item>

            <Form.Item
              label="Имя столбца"
              name="column-name"
            >
              <Input placeholder="Qнеф.т/сут" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Сохранить
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div>
          <SketchPicker onChange={handleColorChange} color={barColor} />
        </div>
      </div>
      <div className="main_chart">
        <Chart data={data} color={barColor} />
      </div>
    </div>
  );
};

export default App;

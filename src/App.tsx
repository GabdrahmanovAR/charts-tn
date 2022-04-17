import React, { useEffect, useState } from 'react';
import './App.scss';
import {
  Button, Form, Input, Upload,
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { RcFile } from 'antd/es/upload';
import { importExcel } from './utils/importExcel';
import Chart from './components/chart/Chart';
import { IChartData } from './utils/ConvertJsonToChartData';

const App = () => {
  const [data, setData] = useState([] as IChartData[]);
  const [interval, setInterval] = useState(2);
  const [file, setFile] = useState({} as RcFile);

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

  const handleClickFinishButton = (values: any) => {
    setInterval(values.interval);
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
            // onFinishFailed={onFinishFailed}
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
      </div>
      <div className="main_chart">
        <Chart data={data} />
      </div>
    </div>
  );
};

export default App;

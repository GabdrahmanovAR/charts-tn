import React from 'react';
import './App.scss';
import { Button, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { RcFile } from 'antd/es/upload';
import { importExcel } from './utils/importExcel';
import Chart from './components/chart/Chart';

const App = () => {
  const handleUploadingFile = (file: RcFile) => {
    if (file) {
      importExcel(file);
    }
    return false;
  };

  return (
    <div className="main">
      <div className="main__upload">
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
      <div className="main_chart">
        <Chart />
      </div>
    </div>
  );
};

export default App;

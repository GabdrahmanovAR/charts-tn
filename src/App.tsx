import React from 'react';
import './App.scss';
import { Button, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const App = () => {
  const handleUploadingFile = (info: any) => {
    console.log(info.file);
  };

  return (
    <div className="main">
      <Upload
        name="excel-file"
        customRequest={handleUploadingFile}
      >
        <Button icon={<UploadOutlined />}>
          Click to Upload
        </Button>
      </Upload>
    </div>
  );
};

export default App;

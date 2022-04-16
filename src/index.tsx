import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import ruRU from 'antd/lib/locale/ru_RU';
import './index.scss';
import { ConfigProvider } from 'antd';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider locale={ruRU}>
      <App />
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

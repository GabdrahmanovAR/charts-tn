import * as XLSX from 'xlsx';
import { RcFile } from 'antd/es/upload';
import { convertJsonToChartData, IChartData } from './ConvertJsonToChartData';

export const importExcel = (file: RcFile, interval: number, data: (chartData: IChartData[]) => void) => {
  const reader = new FileReader();
  let chartData: IChartData[] = [];

  reader.onload = (evt) => { // evt = on_file_select event
    /* Parse data */
    const bstr = evt.target?.result;
    const wb = XLSX.read(bstr, { type: 'binary' });
    /* Get first worksheet */
    const wsname = wb.SheetNames[0];
    const ws = wb.Sheets[wsname];
    /* Convert array of arrays */
    chartData = convertJsonToChartData(XLSX.utils.sheet_to_json(ws), interval);
    data(chartData);
  };
  reader.readAsBinaryString(file);
};

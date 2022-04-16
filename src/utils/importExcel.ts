import * as XLSX from 'xlsx';

export const importExcel = (file: any) => {
  console.log(file.name);
  const reader = new FileReader();
  reader.onload = (evt) => { // evt = on_file_select event
    /* Parse data */
    const bstr = evt.target?.result;
    const wb = XLSX.read(bstr, { type: 'binary' });
    console.log('WorkBook');
    console.log(wb);
    /* Get first worksheet */
    const wsname = wb.SheetNames[0];
    const ws = wb.Sheets[wsname];
    console.log('WorkSheet');
    console.log(ws);
    /* Convert array of arrays */
    const data = XLSX.utils.sheet_to_json(ws);
    /* Update state */
    console.log('Data');
    console.log(data);
  };
  reader.readAsBinaryString(file);
};

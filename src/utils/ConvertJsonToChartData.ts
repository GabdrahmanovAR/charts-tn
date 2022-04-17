export interface IChartData {
  name: string;
  количество: number;
}

const countOfMatches = (data: number[], currentIdx: number, interval: number) => {
  let matchesData = 0;
  data.forEach((number) => {
    if (number >= currentIdx && number < currentIdx + interval) matchesData += 1;
  });
  return matchesData;
};

export const convertJsonToChartData = (jsonData: any, interval: number) => {
  const columnData: number[] = [];
  const data: IChartData[] = [];

  console.log(jsonData);

  // Заполнение массива данными из заданного столбца
  jsonData.forEach((rowObject: any) => {
    if (rowObject['Qнеф.т/сут']) columnData.push(rowObject['Qнеф.т/сут']);
  });

  // Распределение данных по диапозону
  for (let i = 0; i < columnData.length; i += Number(interval)) {
    data.push(
      {
        name: `${i}-${i + Number(interval)}`,
        количество: countOfMatches(columnData, i, interval),
      },
    );
  }

  console.log(data);
  // Удаление с конца нулевых значений
  for (let i = data.length - 1; i > 0; i -= 1) {
    if (data[i].количество === 0) data.pop();
  }

  return data;
};

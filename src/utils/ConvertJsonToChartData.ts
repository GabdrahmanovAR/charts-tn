export interface IChartData {
  name: string;
  count: number;
}

const countOfMatches = (data: number[], currentIdx: number, interval: number) => {
  let matchesData = 0;
  data.forEach((number) => {
    if (currentIdx === 0 && number >= currentIdx && number <= (currentIdx + Number(interval))) {
      matchesData += 1;
    } else if (number > currentIdx && number <= (currentIdx + Number(interval))) {
      matchesData += 1;
    }
  });
  console.groupEnd();
  return matchesData;
};

export const convertJsonToChartData = (jsonData: any, interval: number) => {
  const columnData: number[] = [];
  const data: IChartData[] = [];

  // Заполнение массива данными из заданного столбца
  jsonData.forEach((rowObject: any) => {
    if (rowObject['Qнеф.т/сут']) columnData.push(rowObject['Qнеф.т/сут']);
  });

  console.log(columnData);

  // Распределение данных по диапозону
  for (let i = 0; i < columnData.length; i += Number(interval)) {
    data.push(
      {
        name: `${i}-${i + Number(interval)}`,
        count: countOfMatches(columnData, i, interval),
      },
    );
  }

  // Удаление с конца нулевых значений
  for (let i = data.length - 1; i > 0; i -= 1) {
    if (data[i].count === 0) data.pop();
  }

  return data;
};

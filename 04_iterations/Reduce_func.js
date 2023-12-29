const data = [
    { id: 1, category: 'A', value: 10 },
    { id: 2, category: 'B', value: 20 },
    { id: 3, category: 'A', value: 30 },
    { id: 4, category: 'B', value: 40 },
    { id: 5, category: 'C', value: 50 }
  ];
  const groupedData = data.reduce((result, item) => {
    const key = item.category;
    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(item);
    return result;
  }, {});
  
  console.log(groupedData);
const data = '{"name":"John", "age":30, "car":null}';
console.log(data);

const data2 = JSON.parse(data);
console.log(data2);

data2.value = 22;

console.log(data2);

console.log(JSON.stringify(data2));

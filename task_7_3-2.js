/*Задание 2.
Написать функцию, которая принимает в 
качестве аргументов строку и объект, а 
затем проверяет есть ли у переданного 
объекта свойство с данным именем. 
Функция должна возвращать true или false.*/
const obj = {
  торт: "сладкий",
  шоколад: "горький",
  сыр: "солёный",
  лимон: "кислый"
};
function checkProperty(str, obj) {
  for (let key in obj) {
    if (obj[key] === str) {
      return true;
    }
  }
  return false;
}
const result1 = checkProperty("солёный", obj);
console.log(result1);
const result2 = checkProperty("зелёный", obj);
console.log(result2);

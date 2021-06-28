/*Задание 3.
Написать функцию, которая создает пустой объект, 
но без прототипа.*/
function createObjectNoProperty() {
  return Object.create(null);
}
createObjectNoProperty(console.log(Object));

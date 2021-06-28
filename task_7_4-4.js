/*Реализовать следующее консольное приложение подобно примеру, 
который разбирался в видео. Реализуйте его на прототипах.
Определить иерархию электроприборов. Включить некоторые в 
розетку. Посчитать потребляемую мощность. 
Таких приборов должно быть, как минимум, два (например, 
настольная лампа и компьютер). Выбрав прибор, подумайте, 
какими свойствами он обладает.*/
function ElectroAppliance(name, brand, power) {
  this.name = name;
  this.brand = brand;
  this.power = power;
}
//Методы включают/выключают прибор из розетки и возвращают потребляемую мощность всех включенных приборов.
let sumPower = 0;
ElectroAppliance.prototype.turnOn = function () {
  sumPower += this.power;
  console.log(`Включен ${this.name} мощностью ${this.power} Вт.`);
  console.log(
    `Потребляемая мощность всех включенных приборов - ${sumPower} Вт.`
  );
};
ElectroAppliance.prototype.turnOff = function () {
  sumPower -= this.power;
  console.log(`Выключен ${this.name} мощностью ${this.power} Вт.`);
  console.log(
    `Потребляемая мощность всех включенных приборов - ${sumPower} Вт.`
  );
};

//Создан класс электроприборы для кухни (встроенные и отдельно_стоящие):
function ElectroApplianceForKitchen(name, brand, power, built_in) {
  this.name = name;
  this.brand = brand;
  this.power = power;
  this.built_in = built_in;
  this.getInfo = function () {
    console.log(
      `${this.name}, ${this.brand}, мощность - ${this.power} Вт, ${this.built_in}.`
    );
  };
}
//Метод выводит звуковой сигнал и информацию, что таймер вкл./выкл.:
ElectroAppliance.prototype.signalTimer = function () {
  console.log(`Beeeep! Таймер ${this.name} выключен.`);
};
//Создан класс компьютеры:
function Сomputer(name, brand, power, diagonal) {
  this.name = name;
  this.brand = brand;
  this.power = power;
  this.diagonal = diagonal;
  this.getInfo = function () {
    console.log(
      `${this.name}, ${this.brand}, мощность - ${this.power} Вт, диагональ - ${this.diagonal}.`
    );
  };
}
//Создана делигирующую связь между классами:
ElectroApplianceForKitchen.prototype = new ElectroAppliance();
Сomputer.prototype = new ElectroAppliance();
//Созданы экземпляры электроприборов:
const refrigerator = new ElectroApplianceForKitchen(
  "Холодильник",
  "LG",
  300,
  "отдельно стоящий"
);
const microwave = new ElectroApplianceForKitchen(
  "СВЧ-печь",
  "Samsung",
  1200,
  "встроенная"
);
const notebook = new Сomputer("Ноутбук", "Samsung", 90, "10 дм");

microwave.getInfo();
refrigerator.getInfo();
notebook.getInfo();
refrigerator.turnOn();
notebook.turnOn();
microwave.turnOn();
microwave.signalTimer();
microwave.turnOff();
refrigerator.turnOff();
notebook.turnOff();

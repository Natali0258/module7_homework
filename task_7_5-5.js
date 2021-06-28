/*Переписать консольное приложение из предыдущего юнита на классы.*/
let sumPower = 0;
class ElectroAppliance {
  constructor(name, brand, power) {
    this.name = name;
    this.brand = brand;
    this.power = power;
  }
  //Методы включают/выключают прибор из розетки и возвращают потребляемую мощность всех включенных приборов.
  turnOn() {
    sumPower += this.power;
    console.log(`Включен ${this.name} мощностью ${this.power} Вт.`);
    console.log(
      `Потребляемая мощность всех включенных приборов - ${sumPower} Вт.`
    );
  }
  turnOff() {
    sumPower -= this.power;
    console.log(`Выключен ${this.name} мощностью ${this.power} Вт.`);
    console.log(
      `Потребляемая мощность всех включенных приборов - ${sumPower} Вт.`
    );
  }
}
//Создан класс электроприборы для кухни (встроенные и отдельно_стоящие):
class ElectroApplianceForKitchen extends ElectroAppliance {
  constructor(name, brand, power, built_in, timer) {
    super(name, brand, power);
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.built_in = built_in;
  }
  getInfo() {
    console.log(
      `${this.name}, ${this.brand}, мощность - ${this.power} Вт, ${this.built_in}.`
    );
  }
  //Метод выводит звуковой сигнал и информацию, что таймер вкл./выкл.:
  signalTimer() {
    console.log(`Beeeep! Таймер ${this.name} выключен.`);
  }
}
//Создан класс компьютеры:
class Сomputer extends ElectroAppliance {
  constructor(name, brand, power, diagonal) {
    super(name, brand, power);
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.diagonal = diagonal;
  }
  getInfo() {
    console.log(
      `${this.name}, ${this.brand}, мощность - ${this.power} Вт, диагональ - ${this.diagonal}.`
    );
  }
}
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

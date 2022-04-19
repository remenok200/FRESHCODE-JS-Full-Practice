"use strict";

// 1 Вычислить сумму первых N элементов последовательности . параметр N задает пользователь
function task1(N) {
  if (typeof N !== "number") {
    throw new Error("Функция работает только с числами!");
  }

  let storage = 0;
  for (; N > 0; N--) {
    storage += N;
  }
  return storage;
}

// 2.1 Создать объект student который содержит следующие свойства: имя, фамилию, пол, контактные данные.
const Student_2_1 = {
  name: "Ivanov",
  surname: "Ivan",
  sex: "M",
  contacts: {
    email: "remenok9@gmail.com",
    telephone: "0994875717",
  },
};

// 2.2 Создать объект университета, который содержит свойства, о факультете и кафедре.
// 2.3 Связать объекты между собой. т.е. прописать данные об факультете и кафедре для студента
const University = {
  // Очень запутал логику здесь, согласен. Вечером голова не работала
  // в 6 задании эту логику немного упрощу на классах
  name: "ZNTU",
  faculty: "Faculty of Computer Science and Technology",
  department: "Department of Software Engineering",
  students: [
    {
      name: "Ivan",
      surname: "Ivanov",
      sex: "M",
      contacts: {
        email: "remenok9@gmail.com",
        telephone: "0994875717",
      },
    },
    {
      name: "Petr",
      surname: "Petrov",
      sex: "M",
      contacts: {
        email: "petrov@gmail.com",
        telephone: "В ломбарде =(((9(",
      },
    },
  ],
};

// 2.4 Реализовать функцию вывода на экран всю информацию о студенте
function showInformationAboutStudent(surname) {
  itemArray = University.students;
  for (let i = 0; i < itemArray.length; i++) {
    if (itemArray[i].surname === surname) {
      return itemArray[i];
    }
  }
  throw new Error("Студент не найден!");
}

// 3.1 Создать числовой массив и проинициализировать его из 25 элементов.
const numbers = [];
for (let i = 0; i < 25; i++) {
  numbers[i] = Math.floor(Math.random() * 1000);

  // 3.2 Вывести элементы с четными индексами (четные числа делятся на 2 без остатка)
  if (i % 2 === 0) {
    console.log(
      `Задание 3.2. Число массива numbers, индекс которого - четный: ${numbers[i]}, а его индекс: ${i}`
    );
  }

  // 3.3 Вывести только четные элементы
  if (numbers[i] % 2 === 0) {
    console.log(
      `Задание 3.3. Число массива numbers, которое делится без остатка на 2: ${numbers[i]}`
    );
  }
}

// 3.4 Вывести индексы нулевых элементов (элемент равен нулю)
numbers[12] = 0;
numbers[21] = 0;
let counter = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 0) {
    console.log(
      `Задание 3.4. Индекс нулевого элемента из массива numbers: ${i}`
    );

    // 3.5 Подсчитать количество нулевых элементов
    counter++;
  }
}
console.log(`Задание 3.5. Количество нулевых элементов: ${counter}`);

// 4 Создать классы:
// - Книга (автор, название, год издания, издательство)
// - Электронная версия книги (автор, название, год издания, издательство, формат, электронный номер)
class Book {
  constructor(author, name, year, publishingOffice) {
    this.author = author;
    this.name = name;
    this.year = year;
    this.publishingOffice = publishingOffice;
  }
}

class Ebook extends Book {
  constructor(author, name, year, publishingOffice, Enumber) {
    super(author, name, year, publishingOffice);
    this.Enumber = Enumber;
  }
}

// TEST (4 задание)
const bookFranko = new Book("Ivan Franko", "Moisey", "1856", "Ranok");
const ebookSheva = new Ebook(
  "Taras Shev4enko",
  "Kobzar",
  "1685",
  "Ukraine",
  125851
);

// 5
// Требуется написать функцию, выводящую в консоль числа от 1 до n, где n —
// это целое число, которая функция принимает в качестве параметра, с
// такими условиями:
// вывод fizzbuzz вместо чисел, кратных как 3, так и 5.
// вывод fizz вместо чисел, кратных 3;
// вывод buzz вместо чисел, кратных 5;
function outputNumbers(n) {
  try {
    if (typeof n !== "number") {
      throw new Error("Функция работает только с числами");
    }
    for (; n > 0; n--) {
      if (n % 3 === 0 && n % 5 === 0) {
        console.log(
          `fizzbuzz, ибо ${n} - кратно 5 (${n} / 5 = ${
            n / 5
          }) и ${n} - кратно 3 (${n} / 3 = ${n / 3}).`
        );
      }
      if (n % 3 === 0) {
        console.log(`fizz, ибо ${n} - кратно 3 (${n} / 3 = ${n / 3}).`);
      }
      if (n % 5 === 0) {
        console.log(`buzz, ибо ${n} - кратно 5 (${n} / 5 = ${n / 5}).`);
      }
    }
  } catch (e) {
    throw new Error(e);
  }
}

// Advanced lvl
class Universityy {
  constructor(universityName, faculty, department) {
    this.universityName = universityName; // название универа
    this.faculty = faculty; // название факультета
    this.department = department; // название кафедры
  }

  // <-> getters section ------>>>
  get universityName() {
    return this._universityName;
  }
  get faculty() {
    return this._faculty;
  }
  get department() {
    return this._department;
  }
  // <<<------ getters section <->

  // <-> setters section ------>>>
  set universityName(newUniversityName) {
    try {
      if (typeof newUniversityName !== "string") {
        throw new TypeError(
          "Название университета университета должно быть строкой!"
        );
      }
      this._universityName = newUniversityName;
    } catch (e) {
      throw new Error(e);
    }
  }
  set faculty(newFaculty) {
    try {
      if (typeof newFaculty !== "string") {
        throw new TypeError("Название факультета должно быть строкой!");
      }
      this._faculty = newFaculty;
    } catch (e) {
      throw new Error(e);
    }
  }
  set department(newDepartment) {
    try {
      if (typeof newDepartment !== "string") {
        throw new TypeError("Название кафедры должно быть строкой!");
      }
      this._department = newDepartment;
    } catch (e) {
      throw new Error(e);
    }
  }
  // <<<------ setters section <->
}

class Student extends Universityy {
  constructor(
    name,
    surname,
    universityName,
    faculty,
    department,
    dateOfApplication
  ) {
    super(universityName, faculty, department);
    this.name = name; // имя студента
    this.surname = surname; // фамилия студента
    this.dateOfApplication = dateOfApplication; // дата поступления
  }

  // <-> getters section ------>>>
  get name() {
    return this._name;
  }
  get surname() {
    return this._surname;
  }
  get dateOfApplication() {
    return this._dateOfApplication;
  }
  get courseNumber() {
    // Мои рассчеты

    // Если предположить, что обучение начинается
    // 01.09
    // а заканчивается
    // 30.06
    // то выходит, что студент учится
    // 302 дня (с 01.09 по 30.06)
    // приказы о переводе на следующий курс / зачислении
    // обычно, издают перед самым началом учебного года
    // до того, как появится такой приказ - студент все лето де-юре остается на своем курсе
    // который формально окончил
    // в таком случае, можно предполагать, что к количеству дней, что уже получено
    // можно добавить еще 62 дня (с 30.06 по 31.08)
    // таким образом, получается, что студент учится на своем курсе 364 дня
    // (с 01.09 по 31.08)
    // теперь можно вывести таблицу интервалов
    // Курс    Интервал (сколько студент дней учится)
    // 1       [1 - 364]
    // 2       [365 - 728]
    // 3       [729 - 1092]
    // 4       [1093 - 1456]
    // 5       [1457 - 1758] // на 5 курс включаю 302 дня

    const dateArray = this.dateOfApplication.split(".");
    const dateStart = new Date(dateArray[2], dateArray[1] - 1, dateArray[0]);

    const dateNow = new Date();
    // один день в м/с
    const oneDay = 1000 * 60 * 60 * 24;
    // разница во времени между датой начала обучения и сегодняшней датой
    const diffInTime = dateNow.getTime() - dateStart.getTime();
    // вычисление количества дней между двумя датами
    const diffInDays = Math.round(diffInTime / oneDay);

    // switch...case тут не сработают
    if (diffInDays > 0 && diffInDays < 365) {
      return 1;
    }
    if (diffInDays > 364 && diffInDays < 729) {
      return 2;
    }
    if (diffInDays > 728 && diffInDays < 1093) {
      return 3;
    }
    if (diffInDays > 1092 && diffInDays < 1457) {
      return 4;
    }
    if (diffInDays > 1456 && diffInDays < 1759) {
      return 5;
    }
    throw new RangeError("Студент уже должен был закончить учебное заведение!");
  }
  // <<<------ getters section <->

  // <-> setters section ------>>>
  set name(newName) {
    try {
      if (typeof newName !== "string") {
        throw new TypeError("Имя студента должно быть строкой!");
      }
      this._name = newName;
    } catch (e) {
      throw new Error(e);
    }
  }
  set surname(newSurname) {
    try {
      if (typeof newSurname !== "string") {
        throw new TypeError("Фамилия студента должна быть строкой!");
      }
      this._surname = newSurname;
    } catch (e) {
      throw new Error(e);
    }
  }
  set dateOfApplication(newDateOfApplication) {
    try {
      if (
        typeof newDateOfApplication !== "string" ||
        isNaN(Date.parse(newDateOfApplication))
      ) {
        throw new TypeError(
          "Дата поступления должна передаватся как строка в формате день.месяц.год!"
        );
      }

      // проверка на валидность даты
      const dateArray = newDateOfApplication.split(".");
      const date = new Date(dateArray[2], dateArray[1], dateArray[0]);
      if (
        date.getFullYear() == dateArray[2] &&
        date.getMonth() == dateArray[1] &&
        date.getDate() == dateArray[0]
      ) {
        this._dateOfApplication = newDateOfApplication;
      } else {
        throw new EvalError(
          "Дата должна передаваться строкой и быть в формате день.месяц.год!"
        );
      }
    } catch (e) {
      throw new Error(e);
    }
  }
  // <<<------ setters section <->
}

// TEST
const Petrov = new Student(
  "Petr",
  "Petrov",
  "ZNTU",
  "Faculty of Computer Science and Technology",
  "Department of Software Engineering",
  "01.09.2021" // 1 курс
);

const Sidorov = new Student(
  "Sidorov",
  "Sidr",
  "ZSMU",
  "Faculty of Health",
  "Department of Health",
  "01.09.2020" // 2 курс
);

const Ivanov = new Student(
  "Ivanov",
  "Ivan",
  "ZNTU",
  "Faculty of Computer Science and Technology",
  "Department of Software Engineering",
  "01.09.2019" // 3 курс
);

const Marchenko = new Student(
  "Marchenko",
  "Mariia",
  "ZNTU",
  "Faculty of Computer Science and Technology",
  "Department of Software Engineering",
  "01.09.2018" // 4 курс
);

const Sifonov = new Student(
  "Sifonov",
  "Sifon",
  "ZNTU",
  "Faculty of Computer Science and Technology",
  "Department of Software Engineering",
  "01.09.2017" // 5 курс
);

const Druples = new Student(
  "Druples",
  "Drupl",
  "ZNTU",
  "Faculty of Computer Science and Technology",
  "Department of Software Engineering",
  "01.09.2016" // уже окончил
);

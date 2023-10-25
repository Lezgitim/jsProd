"use strict";

/*
###Задание 1
Необходимо создать класс Library. Конструктор класса, должен принимать начальный 
список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив 
не содержит дубликатов; в противном случае необходимо выбросить ошибку.


1. Класс должен содержать приватное свойство #books.

2. Реализуйте геттер allBooks, который возвращает текущий список книг.

3. Реализуйте метод addBook(title), который позволяет добавлять книгу в список. 
Если книга с таким названием уже существует в списке, выбросьте ошибку с 
соответствующим сообщением.

4. Реализуйте метод removeBook(title), который позволит удалять книгу из списка 
по названию. Если книги с таким названием нет в списке, выбросьте ошибку с 
соответствующим сообщением.

5. Реализуйте метод hasBook(title), который будет проверять наличие книги в 
библиотеке и возвращать true или false в зависимости от того, есть ли такая 
книга в списке или нет.
*/

class Library {
  #books;

  constructor(name = []) {
    try {
      this.name = name;
      if (this.name.some((val, i) => this.name.indexOf(val) !== i)) {
        throw new Error("одинаковые названия книг");
      }
    } catch (Error) {
      console.log(Error);
    }
  }

  addBook(title) {
    try {
      this.name = this.name.push(title);
      if (this.name.some((val, i) => this.name.indexOf(val) !== i)) {
        throw new Error("одинаковые названия книг");
      }
    } catch (Error) {
      console.log(Error);
    }
  }

  removeBook(title) {
    try {
      if (this.name.filter((el) => el !== title) == false) {
        throw new Error("книги нет с таким названием");
      }
    } catch (Error) {
      console.log(Error);
    }
  }

  hasBook(title) {
    if (this.name.includes(title)) {
      console.log(true);
    } else {
      console.log(false);
    }
  }

  set allBooks(name) {
    this.name = name;
  }

  get allBooks() {
    return this.name;
  }
}

const lib = new Library(["Война и мир", "Басни"]);

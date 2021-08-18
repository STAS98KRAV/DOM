'use strickt';
const allbooks = document.querySelectorAll('.books');
const book = document.querySelectorAll('.book');
const bookTitle = document.querySelectorAll('h2');
console.log(bookTitle);
console.log(book);
console.log(allbooks);
//правильная постановка эл-та
book[0].before(book[1]);
book[2].before(book[4]);
book[5].after(book[2]);

//картинка
const bgi = document.querySelector('body');
console.log(bgi);
bgi.style.backgroundImage = 'url(/Users/user/Desktop/LESSON10/image/you-dont-know-js.jpg)';

//название книги 3
bookTitle[4].textContent = 'Книга 3. this и Прототипы Объектов';
bookTitle[4].style.color = 'darkkhaki';

//удаление рекламы
const adv = document.querySelector('.adv');
console.log(adv);
adv.remove();

// восстановление порядка глав 2 и 5

const ulElem =  document.querySelectorAll('ul');
console.log(ulElem);
const liChapter2 = document.querySelectorAll('ul')[1];
console.log(liChapter2);
//liChapter2[0].before(liChapter2[1]);
const list2 = liChapter2.querySelectorAll('li');
console.log(list2);
//list[0].before(list[1]);
list2[9].after(list2[2]);
list2[8].after(list2[7]);
list2[4].before(list2[6]);
list2[4].before(list2[8]);

const liChapter5 = document.querySelectorAll('ul')[4];
console.log(liChapter5);
const list5 = liChapter5.querySelectorAll('li');
console.log(list5);

list5[3].before(list5[9]);
list5[7].after(list5[5]);
list5[4].after(list5[2]);

const liChapter6 = document.querySelectorAll('ul')[5];
console.log(liChapter6);
const list6 = liChapter6.querySelectorAll('li');
console.log(list6);
const newElemClone = list6[8].cloneNode(true);
newElemClone.textContent = 'Глава 8: За пределами ES6”';
console.log(newElemClone);
list6[9].before(newElemClone);
//newElem.textContent = 'Новый элемент';


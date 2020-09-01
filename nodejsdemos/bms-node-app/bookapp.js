let Book=require('./book');

let {BookManager, showBooks} = require('./bookmanager');

let managerbook=new BookManager();
managerbook.addBook(new Book('1','Number the Stars','Lois Lowry','200','4'));
managerbook.addBook(new Book('2','The Reader','Bernhard Schlink','150','3'));
showBooks(managerbook.getAll(), 'List of All Books');

console.log('Book with id',managerbook.getById('1'));
console.log('Book by author',managerbook.getByAuthor('Bernhard Schlink'));
console.log('Book search by title',managerbook.searchByTitle('Number the Stars'));
console.log('Book search by price',managerbook.searchByPrice(100,300));
console.log('Book search by rating\n',managerbook.searchByRating('3'));
managerbook.remove('2');

showBooks(managerbook.getAll(), 'List after deleting 2nd id book');
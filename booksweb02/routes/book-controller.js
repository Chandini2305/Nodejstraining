const BookService = require("../services/book-service");
const Book=require('../entities/book');
const BookRepository=require('../repositories/book-repository');
//var router = express.Router();


let bookRepository=new BookRepository();

async function seed(){
    //check if the current repostiory has some data
    let books= await bookRepository.getAll();

    
}

//seed();

// authorService.add(new Author('vivek-dutta-mishra','Vivek Dutta Mishra','Author of the Amazon Best Seller The Accursed God','vivek.png','vivek@conceptarchitect.in'));
// authorService.add(new Author('jeffrey-archer','Jeffrey Archer','Contemporary best-seller fiction author','archer.png','jeffrey.archer@gmail.com'));
// authorService.add(new Author('ramdhari-singh-dinkar','Ramdhari Singh Dinkar','The National poet of India','dinker.png'));

var bookService=new BookService(bookRepository);

//express calls user logic
// for url --> /books
async function  getBookList(request,response){
    
    //user logic to get the user data
    var books=await bookService.getAll();
    //expres asks a VIEW ENGINE to create and send HTML response
    await response.render('books/booklist', {books:books});
}


async function  showBookForm(request,response){

    var book={};
    await response.render('books/book', {book:book});

}

async function addBook(request,response){
    var book=request.body;
    try{
    await bookService.add(book);
    await response.redirect('/books/booklist');
    }catch(e){
        console.log(e.message);
    }
}

async function showBookDetails(request,response){

    let id= request.params.bookId; //this should be the last part of url /books/booklist/:authorId

    let book=await authorService.getById(id);

    await response.render('books/bookdetails',{book});

};

async function removeBook(request,response){
    let id=request.params.bookId;
    await bookService.remove(id);
    await response.redirect('/booklist'); //send back to author page
}



var express = require('express');
const { render } = require("ejs");
var router = express.Router();

//all this will be mapped /books/
router.get('/booklist', getBookList);
router.get('/book', showBookForm);
router.post('/book', addBook);

//:authorId indicates it is a variable
//router will automatically add the value to request.params
router.get('/bookdetails/:bookId', showBookDetails);
router.get('/delete/:bookId', removeBook);



module.exports = router;



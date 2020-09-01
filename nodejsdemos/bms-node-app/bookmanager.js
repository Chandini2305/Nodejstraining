let Book=require('./book')

let BookManager=function(){
    this.books=[]; //an empty list of books;
};

BookManager.prototype.addBook=function(book){
    if(book && book.id && book.title )
        this.books.push(book);
};

BookManager.prototype.getAll=function(){
    return this.books;
};
BookManager.prototype.getById=function(id){
    for(let book of this.books)
        if (book.id===id){
            return book;
        }

    return null;
};

BookManager.prototype.searchByTitle=function(title){
    for(let book of this.books)
        if (book.title===title){
            return book;
        }

    return null;
};
BookManager.prototype.searchByPrice=function(min,max){
    for(let book of this.books)
        if (book.price>=min && book.price<=max){
            return book;
        }

    return null;
};
BookManager.prototype.searchByRating=function(rating){
    for(let book of this.books)
        if (book.rating===rating){
            return book;
        }

    return null;
};
BookManager.prototype.getByAuthor=function(author){
    for(let book of this.books)
        if (book.author===author){
            return book;
        }

    return null;
};

BookManager.prototype.remove=function(id){

    let newList=[];
   for(let book of this.books){
       if(book.id!==id)
            newList.push(book); 
   }

   this.books=newList;

};

function showBooks(books, heading=null){
    console.log(heading);
    for(let book of books){
        console.log(`${book}`);
    }
}

module.exports={
    BookManager:BookManager,
    showBooks:showBooks
};
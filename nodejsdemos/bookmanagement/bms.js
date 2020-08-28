//Author Business Logic

let Author=function(id,name,biography=null,photoUrl=null,email=null){

    this.id=id;
    this.name=name;
    this.biography=biography;
    this.photoUrl=photoUrl;
    this.email=email;
    this.books=[] ; //currently and empty list of books   
}
Author.prototype.toString=function(){
    return `Author[${this.id},${this.name}]`;
};

let AuthorManager=function(){
    this.authors=[]; //an empty list of authors;
};

AuthorManager.prototype.addAuthor=function(author){
    if(author && author.id && author.name )
        this.authors.push(author);
};

AuthorManager.prototype.getAll=function(){
    return this.authors;
};

AuthorManager.prototype.getById=function(id){

    //ES2015 for of loop to interate an array
    for(let author of this.authors)
        if (author.id===id){
            return author;
        }

    return null;
};
AuthorManager.prototype.searchByName=function(name){
    
    for(let author of this.authors)
        if(author.name===name){
            return author;
        }
};
AuthorManager.prototype.searchByBiography=function(biography){
    
    for(let author of this.authors)
        if(author.biography===biography){
            return author;
        }
};
AuthorManager.prototype.remove=function(id){

    let newList=[];
   for(let author of this.authors){
       if(author.id!==id)
            newList.push(author); //push all authors to new list, except the one we have to remove
   }

   this.authors=newList;

};



//Author Presentation Logic

function showAuthors(authors, heading=null){
    console.log(heading);
    for(let author of authors){
        console.log(`${author}`);
    }
}




//----- my application logic here ---

let manager=new AuthorManager();

manager.addAuthor(new Author('vivek','Vivek Dutta Mishra','Author of the Lost Epic Series'));
manager.addAuthor(new Author('archer','Jeffrey Archer','International best seller of fictions'));
manager.addAuthor(new Author('grisham','John Grisham','Leading author of legal fiction'));


showAuthors(manager.getAll(), 'List of All Authors');

console.log('author with id vivek', manager.getById('vivek'));
console.log('author with id amish', manager.getById('amish'));

console.log('author by name',manager.searchByName('Jeffrey Archer'));
console.log('author by biograpgy',manager.searchByBiography('Leading author of legal fiction'));

manager.remove('archer');

showAuthors(manager.getAll(), 'List after deleting Archer');


//BOOK 
let Book=function(id,title,author,price,rating,coverpageurl=null){
    this.id=id;
    this.title=title;
    this.author=author;
    this.price=price;
    this.rating=rating;
    this.coverpageurl=coverpageurl;
}
Book.prototype.toString=function(){
    return `Author[${this.id},${this.title}]`;
};

let BookManager=function(){
    this.books=[]; //an empty list of books;
};

BookManager.prototype.getAll=function(){
    return this.books;
};

BookManager.prototype.addBook=function(book){
    if(book && book.id && book.title )
        this.books.push(book);
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
let managerbook=new BookManager();
managerbook.addBook(new Book('1','Number the Stars','Lois Lowry','200','4'));
managerbook.addBook(new Book('2','The Reader','Bernhard Schlink','150','3'));
showAuthors(managerbook.getAll(), 'List of All Books');

console.log('Book with id',managerbook.getById('1'));
console.log('Book by author',managerbook.getByAuthor('Bernhard Schlink'));
console.log('Book search by title',managerbook.searchByTitle('Number the Stars'));
console.log('Book search by price',managerbook.searchByPrice(100,300));
console.log('Book search by rating',managerbook.searchByRating('3'));
managerbook.remove('2');

showAuthors(managerbook.getAll(), 'List after deleting 2nd id book');
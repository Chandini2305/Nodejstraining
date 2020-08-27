function createAuthor(id,name,biography,birthday,email,photographurl,bookList){
    this.id=id;
    this.name=name;
    this.biography=biography;
    this.bithday=birthday;
    this.email=email;
    this.photographurl=photographurl;
    this.bookList=bookList;
}
    
function AuthorManager(){
    
}




function ShowBooks(b){
console.log(`***BOOKS***\nId=${b.Id}\nTitle=${b.Title}\nCoverPage=${b.coverpageurl}\nAuthor=${b.Author}\nPrice=${b.Price}\nRating=${b.Rating}`);
}
let Books=new Object();
Books.Id=1;
Books.Title="Book";
Books.coverpageurl="c://desktop//coverpage.png";
Books.Author="chetan Bhagat";
Books.Price=100;
Books.Rating=4;
ShowBooks(Books);


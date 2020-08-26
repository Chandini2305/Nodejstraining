function showAuthor(a){
    console.log(`***AUTHOR***\nId=${a.Id}\nName=${a.Name}\nBiography=${a.Biograpghy}\nBirthday=${a.Birthday}\nEmail=${a.Email}\nPhotograph Url=${a.PhotographUrl}\nAlistofbooks=${a.BookList}`);
}



let Author=new Object();
Author.Id=1;
Author.Name="Chetan Bhagat";
Author.Biograpghy="kjhfkj";
Author.Birthday="15-07-1890";
Author.Email="chetan@gmail.com"
Author.PhotographUrl="https://th.bing.com/th/id/OIP.aiFOBTR4rIfNDPGsU9zsvQHaLN?pid=Api&rs=1"
Author.BookList=10;
showAuthor(Author);

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


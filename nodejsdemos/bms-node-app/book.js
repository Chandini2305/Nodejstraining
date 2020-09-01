let Book=function(id,title,author,price,rating,coverpageurl=null){
    this.id=id;
    this.title=title;
    this.author=author;
    this.price=price;
    this.rating=rating;
    this.coverpageurl=coverpageurl;
}
Book.prototype.toString=function(){
    return `Book[${this.id},${this.title}]`;
};

module.exports=Book;
// you can access Author module here
// you should give path of .js file
// module name will not contain extension
let Author=require('./author')



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

AuthorManager.prototype.remove=function(id){

    let newList=[];
   for(let author of this.authors){
       if(author.id!==id)
            newList.push(author); //push all authors to new list, except the one we have to remove
   }

   this.authors=newList;

}

function contains(mainString,subString){

    
    let index= mainString.toLowerCase().indexOf(subString.toLowerCase());
    return index>=0
}


AuthorManager.prototype.searchBiography=function(biography){

    let result=[];
        

    for(let author of this.authors){
        if (contains(author.biography,biography))
            result.push(author);
    }

    return result;

}

AuthorManager.prototype.searchByPartialName=function(name){
    let result=[];
        

    for(let author of this.authors){
        if (contains(author.name,name))
            result.push(author);
    }

    return result;
}

AuthorManager.prototype.searchByMinBookCount=function(count){
    let result=[];
        

    for(let author of this.authors){
        if (author.books.length>=count)
            result.push(author);

    }

    return result;
}



function showAuthors(authors, heading=null){
    console.log(heading);
    for(let author of authors){
        console.log(`${author}`);
    }
}

/*
From this module I want to export multiple items -- AuthorManager, showAuthors

But modules.export can be a single object only.

So we will 
  1. create an object that will have two properties
  2. export this new object
*/

module.exports={
    AuthorManager:AuthorManager,
    showAuthors:showAuthors
};

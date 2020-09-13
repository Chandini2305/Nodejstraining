let Book=require('../entities/book');

let contains=function(main,sub){
    return main.toLowerCase().indexOf(sub.toLowerCase())>=0;
}

class BookService{

    constructor(bookRepository){
        this.bookRepository=bookRepository;
        //this.authors=[]; //start with an empty list of authors
    }

    async add(book){
        if(book && book.title){
            console.log('book is added', book.title);
            if(!book.id)
                book.id=book.title.toLowerCase().replace(' ','-');
           
        }
        else{
            console.log('book add failed');
        }
    }

    _add(book){

        return new Promise((resolve,reject)=>{
            console.log('book being added',book);
            setTimeout(()=>{
                if(book && book.title){
                    console.log('book is added', author.name);
                    if(!book.id)
                        book.id=book.title.toLowerCase().replace(' ','-');
                    //if(!.books)
                      //  author.books=[];
                    //this.authors.push(author);
                    //resolve(author);
                } else{
                    console.log('book add failed');
                    reject(book); //author add failed.
                }
                
            },10);


        })

       
    }

    _getAll(){

        let self=this;
        
        return new Promise(function(resolve,reject){
            setTimeout(()=>{
                
                console.log("returning all books ",self.books)
                return resolve(self.books);

            },10);            
        });
    }

    async getAll(){
        let books=await this.bookRepository.getAll();
        return books;
    }

    async getById(id){
        let book=await this.bookRepository.getById(id);
        return book;
    }

    async search(term){
        
        return await this.getAll().filter(a=> contains(a.title,term) );
    }

    async remove(id){
        await this.bookRepository.remove(id);
        
    }

    


    


}







module.exports=BookService;

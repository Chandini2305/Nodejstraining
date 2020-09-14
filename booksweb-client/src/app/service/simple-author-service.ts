import {Author} from './author';  
import {AuthorService} from './author-service'; 

export class SimpleAuthorService implements AuthorService{

    private authors:Author[];
    static serviceCount=0;
    private serviceId;
    
    constructor() {
        this.serviceId=++SimpleAuthorService.serviceCount;
        
        this.authors=this.authors=[
          {
            "id": "jkrowling",
            "name": "J K Rowling",
            "biography": "Author of the book Harry Porter-.",
             "email" : "jkrowling@gmail.com"           
          },  
          
          {
            "id": "stepehnking",
            "name": "Stepehn King",
            "biography": "Author of the book 'IT-it is a 1986 horror novel by American author Stephen King. It was his 22nd book, and his 17th novel written under his own name. The story follows the experiences of seven children as they are terrorized by an evil entity that exploits the fears of its victims to disguise itself while hunting its prey. 'It' primarily appears in the form of Pennywise the Dancing Clown to attract its preferred prey of young children.",
             "email" : "stepehen.king@gmail.com"           
          },

          {
              "id": "vivek",
              "name": "Vivek Dutta Mishra",
              "biography": "Author of the book 'The Accursed God' -The epic tale of Mahabharata searching if it was just a family fued as you were made to believe or it was the first world war? Follow through the first book of The Lost Epic Series",
               "email" : "vivekdutta@gmail.com"           
            }
          ];
    }

    addAuthor(authors: Author): boolean {
        if(authors && authors.name && authors.biography && authors.email){
            this.authors.push(authors);
            return true;
        } else{
            return false;
        }
    }
    
    getAuthors(): Author[] {
        return  this.authors;
    }
    
    getAuthor(id: string): Author {
        return this.authors.find(author => author.id == id);
    }

    deleteAuthor(authorId:string) {
        this.authors = this.authors.filter(author => author.id !== authorId);
        return this.authors;
    }

}
import {Component} from '@angular/core';

@Component({
    selector: 'app-booksweb-header',  //custom html element or component identifier
    styles:[
        `
        h1{
            font-size:3m;
            text-shadow: -3px -3px 3px gray;
        }
        p{
            color:gray;
            text-style:italics;
        }
        `
    ],
    template:
    `
    <h1>{{title}}</h1>
    <p>
    {{subTitle}} | {{time}}
    </p> 
    
    <hr/>
    `
})
export class BooksWebHeaderComponent{
    //this is a javascript code
    //the data can come from anywhere like
    //database, ajax, calculated etc
    //so it is a dynamic data
    public title='Word Wide Books';
    public subTitle='Where book lovers come...';
    public time='';

    constructor(){
        setInterval(()=>{
            this.time=new Date().toLocaleTimeString()
        },1000); //keep updating every 1 sec
    }
}
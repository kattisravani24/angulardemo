import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-ah',
  templateUrl: './ah.component.html',
  styleUrls: ['./ah.component.css']
})
export class AhComponent implements OnInit {
  ngOnInit(): void {}
  title = 'movie-app';
  lists=[
    {
     Label:"Tollywood",
     Movie:" Mirchi ",
     Hero:"Prabhas"
     },
     {
       Label:"Bollywood",
       Movie:"War",
       Hero:"Hritik Roshan"
     },
     {
         Label:"Hollywood",
         Movie:"Terminator",
         Hero:"Arnold"
     },
     {
           Label:"Kollywood",
           Movie:"KGF",
           Hero:"Yash"
     },
 ];
 additem(newitemMovie){
   var newlist={
     Label:"Industry ",
     Movie:newitemMovie,
     Hero:"Not found "
   }
   this.lists.push(newlist);
   };
   deleteitem(table){
     this.lists=this.lists.filter(t=>t.Movie!==table.Movie);
   }
}

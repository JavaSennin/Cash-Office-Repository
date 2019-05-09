import { Injectable, NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { Http } from '@angular/http';

@NgModule(
{
  imports: [ HttpClient, HttpClientModule ] 
})

@Injectable()
export class GroupMasterService {

  constructor(private http: HttpClient) { }

  getProducts() {
    // console.log( this.http.get('https://jsonplaceholder.typicode.com/todos/1') ) ;
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1') ; //.subscribe(data => {
      // console.log("User Login: " + data );
      // console.log("Bio: " + data. .title);
    // },
    // err => {
      // console.log("Error occured.")
    // }) ;
  }

}

// // Web Service Things 2

// import { Component, NgModule, OnInit, Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// // export class CourseService {

//   //private apiUrl = 'http://localhost:8000/courses';

//   // ...
// // }

// // import { Component, OnInit } from '@angular/core';

// // @Component({
// //   // selector: 'app-app',
// //   templateUrl: './app.component.html',
// //   styleUrls: ['./app.component.scss']
// // })
// export class GroupMasterService {//implements OnInit {

//   private apiUrl = 'http://api.github.com/users/javasennin';


//   // constructor() { }

//   // ngOnInit() {}

// }

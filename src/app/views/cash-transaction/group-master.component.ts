import { Component, OnInit, OnDestroy, Input, NgModule } from '@angular/core';

import { GroupMasterService } from './group-master.service'; // './../api.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';

@NgModule({
  imports: [ GroupMasterService ], 

  declarations: [ GroupMasterService ] 
})

@Component({
  // selector: 'app-products',
  templateUrl: './group-master.component.html'
  // styleUrls: ['./products.component.css']
})

export class GroupMasterComponent implements OnInit {

  items: any ; 

  @Input() products$: Observable<any>;

  constructor(private api: GroupMasterService) { }

  ngOnInit() {
    // this.products$ = Observable
    //   .interval(1000)
    //   .startWith(0).switchMap(() => this.api.getProducts());
    //   console.table(this.products$) 
    // this.products$ = 
    this.api.getProducts().subscribe(val => {console.log(val); this.items = val ;}) ;
      
      // this.items = this.products$ ;
  }

  // time = new Observable(observer => setInterval(() => observer.next(new Date().toString()), 1000));

}

// Practice files - Angular Web Service

// import { Component, NgModule, OnInit } from '@angular/core';
// import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

// // Web Service Things
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// import { GroupMasterService } from './group-master.service' ; // WST2

// @NgModule({
//   imports: [
//     FormControl,
//     FormGroup,
//     FormsModule,
//     ReactiveFormsModule

//     ,HttpClient
//   ]
// })

// @Component({
//   templateUrl: 'group-master.component.html'
// })
// export class GroupMasterComponent implements OnInit {
//   // title = 'app';

//   groupInput = new FormGroup({
//     groupName: new FormControl('', Validators.required),
//     groupDesc: new FormControl('', Validators.required)
//   }) ;

//   // Array to hold dynamic data - Current Groups
//   currentGroups = [
//     {groupName: "adm", groupDesc: "Admin Group"},
//     {groupName: "cas", groupDesc: "Cashier Group"},
//     {groupName: "usr", groupDesc: "User Group"}
//   ] ;

//   save(){}

//   find(){}

//   clear(){
//     this.groupInput.reset() ;
//   }

//   exit(){
//     // Re-direct to app landing page
//     window.location.href = "http://localhost:4200/#/dashboard" ;
//   }

//   /// Web Service Things

//   // results: Observable<any>[] ;

//   // constructor(private http: HttpClient){}

//   // ngOnInit(): void {
//   //   this.http.get('https://api.github.com/users/javasennin').subscribe(results => {
//   //     console.log(results);
//   //   });
//   // }


//   // Web Service Things 2 

//   users: Object[] ;

//   // (2) Inject
//   constructor(private groupService: GroupMasterService) {
//     this.users = [];
//   }

//   ngOnInit() {
//     // (3) Subscribe
//     this.groupService. .list().subscribe((users: Object[]) => {
//       // (4) Store
//       this.users = users;
//     });
//   }
// }

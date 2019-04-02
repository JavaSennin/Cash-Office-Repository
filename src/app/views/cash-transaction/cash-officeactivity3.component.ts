// CashOffice Activity - Transactions Module

import { Component, NgModule } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'; 
// import { HttpClient, HttpHeaders } from '@angular/common/http';

// import { createactivity } from './createactivity.interface';
// import { apiURL } from '../../_nav';
// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

@NgModule({
  imports: [
    FormControl,
    FormGroup, 
    FormsModule,
    ReactiveFormsModule,
    Validators]
})

@Component({
  templateUrl: 'cash-officeactivity3.component.html'
})

export class cashofficeactivity3Component {

  activity: any;
  createactivity: FormGroup;
  activityDetails :any;  
  // constructor(private http: HttpClient) {
    constructor() {
    this.createactivity = new FormGroup(
      {
        activityId: new FormControl('',Validators.required),
        CFCode: new FormControl('',Validators.required),
        BCode: new FormControl('',Validators.required),
        RDate: new FormControl('',Validators.required)
      }
    )
  }

  ngOnInit() {
    // let obs = this.http.get('http://192.168.1.158:9090/CashOffice-Test/api/activity');
    // obs.subscribe(response => {
    //   console.log(response);
    //   this.activityDetails =response;
    // }
    // );
  }

  // onSubmit({ value, valid }: { value: createactivity, valid: boolean }) {
  //   //console.log(valid);
  //   if(valid){
  //   let obs = this.http.post(apiURL+'/activity/createactivity',this.createactivity.value)
  //   .subscribe(
  //       data => {
  //                 console.log(data);
  //                 alert("User created/updated successfully.");
  //               },
  //       error => {
  //                 alert("Error while creating new cashier with given details");
  //                 console.log('oops', error)
  //              }
  //   );
  //   }
  // }
 
}

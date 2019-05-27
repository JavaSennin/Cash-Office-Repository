import { Component, NgModule } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { createactivity } from './createactivity.interface';
import { apiURL } from '../../_nav';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@NgModule({
  imports: [
    FormControl,
    FormGroup, 
    FormsModule,
    ReactiveFormsModule,
    Validators]
})

@Component({
  templateUrl: 'cash-officeactivity.component.html'
})

export class cashofficeactivityComponent {

  activity: any;
  createactivity: FormGroup;
  activityDetails :any;  
  constructor(private http: HttpClient) {
    this.createactivity = new FormGroup(
      {
        cashOffActivityId: new FormControl(''),
        cashOfficeId: new FormControl(''),
        branchCode: new FormControl(''),
        receiptDate: new FormControl('')
      }
    )
  }

  ngOnInit() {
    this.http.get(apiURL+'/activity')
    .subscribe(response => {
     
      this.activityDetails =response;
      console.log(this.activityDetails);
      console.log(this.activityDetails[0].cashOffActivityId)
      this.createactivity.patchValue({
        cashOffActivityId: this.activityDetails[0].cashOffActivityId,
        cashOfficeId: this.activityDetails[0].cashOfficeId,
        branchCode:this.activityDetails[0].branchCode ,
        receiptDate: this.activityDetails[0].receiptDate
      });
    });
  }
   
}

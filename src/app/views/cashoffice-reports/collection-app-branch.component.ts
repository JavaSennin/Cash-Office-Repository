import { Component, NgModule } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'; 

@NgModule({
  imports: [
    FormControl,
    FormGroup, 
    FormsModule,
    ReactiveFormsModule,
    Validators]
})

@Component({
  templateUrl: 'collection-app-branch.component.html'
})
export class CollectionAppBranchComponent {

  cashierInput = new FormGroup({
  branchCode: new FormControl('', Validators.required)
  
  });
  onSubmit(){
    this.displayReport = true ; // show container for the results. 
  
    console.table(this.cashierInput.value) ;
  }

  
  
  displayReport = false ;

  toggleDisplayReport(){
    this.displayReport = !this.displayReport ; // false
  }

  //Array for Dummy data
  reciepts: any[]= [
    {s_no:"",reciept_number:1234,reciept_date:"27/09/67",amount:"258,896.00"},
    {s_no:"",reciept_number:4567,reciept_date:"27/09/97",amount:"458,253.00"},
    {s_no:"",reciept_number:4867,reciept_date:"02/09/97",amount:"488,253.00"},
    {s_no:"",reciept_number:8897,reciept_date:"02/11/07",amount:"888,253.00"},
    {s_no:"",reciept_number:9897,reciept_date:"09/11/07",amount:"1,888,253.00"}
  ];
}

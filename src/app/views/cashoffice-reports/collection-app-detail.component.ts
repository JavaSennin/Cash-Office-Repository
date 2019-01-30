import { Component, NgModule } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'; 

@NgModule({
  imports: [
    FormControl,
    FormGroup, 
    FormsModule,
    ReactiveFormsModule,
    Validators
]
})

@Component({
  templateUrl: 'collection-app-detail.component.html'
})
export class CollectionAppDetailComponent {

  detailInput = new FormGroup({
    branchCode: new FormControl('', Validators.required),
    fromDate: new FormControl('2018-09-01', Validators.required),
    toDate: new FormControl('2018-09-30', Validators.required)
  });
 

  detailReport(){

    this.displayReport = true ;
    console.table(this.detailInput.value) ;

    // form-processing code
  }
  displayReport = false ;

  toggleDisplayReport(){
    this.displayReport = !this.displayReport ; // false
  }
  //Array for Dummy data
  reciepts: any[]= [
    {reciept_number:1234,reciept_date:"27/09/67",amount:"258,896.00"},
    {reciept_number:4567,reciept_date:"27/09/97",amount:"458,253.00"},
    {reciept_number:4867,reciept_date:"02/09/97",amount:"488,253.00"},
    {reciept_number:8897,reciept_date:"02/11/07",amount:"888,253.00"},
    {reciept_number:9897,reciept_date:"09/11/07",amount:"1,888,253.00"}
  ];
}

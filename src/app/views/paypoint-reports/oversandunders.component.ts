import { Component, NgModule } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms'; 

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
  templateUrl: 'oversandunders.component.html'
})
export class OversandUndersComponent {

  detailInput = new FormGroup({
    PayPointID: new FormControl('', Validators.required),
    Paypoint_Name: new FormControl('', Validators.required),
    Period: new FormControl('2018-09-30', Validators.required)
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
  paypointIds: any[]= [
    {ppID:1234},
    {ppID:4567},
    {ppID:4867},
    {ppID:8897},
    {ppID:9897}
  ];


  //Array for Dummy data [Group Life System]
  reciepts: any[]= [
    {reciept_number:1234,reciept_date:"27/09/67",amount:"258,896.00"},
    {reciept_number:4567,reciept_date:"27/09/97",amount:"458,253.00"},
    {reciept_number:4867,reciept_date:"02/09/97",amount:"488,253.00"},
    {reciept_number:8897,reciept_date:"02/11/07",amount:"888,253.00"},
    {reciept_number:9897,reciept_date:"09/11/07",amount:"1,888,253.00"}
  ];
   //Array for Dummy data
   reciepts_policy: any[]= [
    {reciept_number:1234,reciept_date:"27/09/67",amount:"258,896.00"},
    {reciept_number:4567,reciept_date:"27/09/97",amount:"458,253.00"},
    {reciept_number:4867,reciept_date:"02/09/97",amount:"488,253.00"},
    {reciept_number:8897,reciept_date:"02/11/07",amount:"888,253.00"},
    {reciept_number:9897,reciept_date:"09/11/07",amount:"1,888,253.00"}
  ];
  reciepts_gls: any[]= [
    {reciept_number:1234,reciept_date:"27/09/67",amount:"258,896.00"},
    {reciept_number:4567,reciept_date:"27/09/97",amount:"458,253.00"},
    {reciept_number:4867,reciept_date:"02/09/97",amount:"488,253.00"},
    {reciept_number:8897,reciept_date:"02/11/07",amount:"888,253.00"},
    {reciept_number:9897,reciept_date:"09/11/07",amount:"1,888,253.00"}
  ];
}

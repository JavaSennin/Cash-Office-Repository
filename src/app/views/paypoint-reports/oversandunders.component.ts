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
    PayPointID: new FormControl({value:"", disabled: false}, Validators.required),
    
    Paypoint_Name: new FormControl({value:"", disabled: true}, Validators.required),
    Period: new FormControl('2018-09-30', Validators.required)
  });
 

  detailReport(){

    this.displayReport = true ;
    this.disableForm = true;
    console.table(this.detailInput.value) ;

    // form-processing code
  }
  displayReport = false ;

  disableForm = false;

  toggleDisplayReport(){
    this.displayReport = !this.displayReport ; // false
    this.disableForm = !this.disableForm ; // false

  }
  // paypointIds: any[]= [
  paypointIds = [ 
    {ppID:1234, ppName: "Botswana Railways"},
    {ppID:4567, ppName: "Botswana Post"},
    {ppID:4867, ppName: "Botswana Meat Commission"},
    {ppID:8897, ppName: "Botswana Life"},
    {ppID:9897, ppName: "Hollard Insurance"}
  ];

  // PayPointID1 = this.paypointIds[2] ;

  //Array for Dummy data [Group Life System]
  ppReport: any[]= [
    {pp_id:1234,reciept_date:"27/09/67",amount:"258,896.00"},
    {pp_id:4567,reciept_date:"27/09/97",amount:"458,253.00"},
    {pp_id:4867,reciept_date:"02/09/97",amount:"488,253.00"},
    {pp_id:8897,reciept_date:"02/11/07",amount:"888,253.00"},
    {pp_id:9897,reciept_date:"09/11/07",amount:"1,888,253.00"}
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

  // bgn

  // states = [
  //   {name: 'Arizona', abbrev: 'AZ'},
  //   {name: 'California', abbrev: 'CA'},
  //   {name: 'Colorado', abbrev: 'CO'},
  //   {name: 'New York', abbrev: 'NY'},
  //   {name: 'Pennsylvania', abbrev: 'PA'},
  // ];
 
  // form = new FormGroup({
  //   state: new FormControl(this.states[3]),
  // });

  // end
}

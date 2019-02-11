// Bank Statement Allocation - Paypoint Reports Module 

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
  templateUrl: 'statement-allocation.component.html'
})
export class StatementAllocationComponent {

  today = new Date() ;

  detailInput = new FormGroup({
    PayPointID: new FormControl('', Validators.required),
    
    Paypoint_Name: new FormControl({value:"", disabled: true}, Validators.required),
    // Period: new FormControl('2018-09-30', Validators.required), 

    bankStatementID: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$") ] ) 
  });

  detailReport(){
    this.detailInput.disable() ;
    this.displayReport = true ;
    
    console.table(this.detailInput.value) ; // dbg

    // form-processing code
  }
  displayReport = false ;

  disableForm = false;

  toggleDisplayReport(){
    this.displayReport = !this.displayReport ; // false
    
    this.detailInput.enable() ;
    this.detailInput.get('Paypoint_Name').disable();
    
  }
  
  // paypointIds: any[]= [
  paypointIds = [ 
    {ppID:1234, ppName: "Botswana Railways"},
    {ppID:4567, ppName: "Botswana Post"},
    {ppID:4867, ppName: "Botswana Meat Commission"},
    {ppID:8897, ppName: "Botswana Life"},
    {ppID:9897, ppName: "Hollard Insurance"}
  ];

  //Array for Dummy data [Group Life System]
  ppReport: any[]= [
    {pp_id:1234,ppType:"Employer",pMode:"ESO(Semi-Electronic"}
  ];

  //Array for Dummy data
  ppReport2: any[]= [
    {collectionType:"Debits:",Total:234456.67},
    {collectionType:"Credits:",Total:0}
  ];

  ppReport3: any[]= [
    {ref_no:"00",ref_name:"Nonofo Odubegile",policy_code:"445889600",status:"inforce",damount:9211.58,aamount:0.00,difamount:2121.58},
    {ref_no:"00",ref_name:"Patricia Majalisa",policy_code:"345889600",status:"inforce",damount:2811.58,aamount:0.00,difamount:2211.58},
    {ref_no:"00",ref_name:"Lucky Dube Lance",policy_code:"2589889600",status:"inforce",damount:2111.58,aamount:0.00,difamount:21221.58}
  ];

}

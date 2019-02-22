// Direct Debit Processing - Allocation Module

import { Component, NgModule } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms'; 

// import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
  imports: [
    FormControl,
    FormGroup, 
    FormsModule,
    ReactiveFormsModule
    // ,TabsModule
    // ,  TabsModule.forRoot()
]
})

@Component({
  templateUrl: './direct-debit.component.html'
})
export class DirectDebitComponent {

  today = new Date() ;
  displayReport = false ;
  disableForm = false;

  detailInput = new FormGroup({
    PayPointID: new FormControl('', Validators.required),
    
    Paypoint_Name: new FormControl({value:"", disabled: true}, Validators.required),

    bankStatementID: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$") ] ) 
  });

  detailReport(){
    this.detailInput.disable() ;
    this.displayReport = true ;
    
    console.table(this.detailInput.value) ; // dbg

    // form-processing code
  }
  
  toggleDisplayReport(){
    this.displayReport = !this.displayReport ; // false
    
    this.detailInput.enable() ;
    this.detailInput.get('Paypoint_Name').disable();
    
  }

  // dummy method to handle button clicks
  buttonCode(){}
  
  /// bgn: imported dynmaic data placeholders

  // Array to hold Dynamic Data - Paypoints:
  paypoints = [ 
    {ppID:123, ppName: "Air Botswana"},
    {ppID:456, ppName: "Botswana Post"},
    {ppID:789, ppName: "Botswana Railways"}
  ];

  // Array to hold Dynamic Data - allocations: 
  allocations = [
    { transType: "CRE", policyNo: "1010244", productCode: "BMW-M3", policyStatus: "Lapsed", partyName: "John Daimler", premium: 252.54, amount: 252.11 },
    { transType: "CRE", policyNo: "1010245", productCode: "ULM4-7", policyStatus: "Terminated", partyName: "Takana Ohnda", premium: 472.54, amount: 262.11 },
    { transType: "CRE", policyNo: "1010247", productCode: "BMW-M3", policyStatus: "Inforce", partyName: "Jane Benize", premium: 162.54, amount: 272.11 }
  ];

  strikeTotal: number = 
    this.allocations.reduce( function(accumulator, currentValue){ return accumulator +  currentValue.premium}, 0 ) ;

  totalAmount: number = 
    this.allocations.reduce( function(accumulator, currentValue){ return accumulator +  currentValue.amount}, 0 ) ;
  
  // Object to hold Dynamic Data - Bank Statement Details
  statement =
    { stmtID: "210", bankName: "First Nation Bank", stmtNo: "FNB42/12012019", accNo: "4638001", 
      accDesc: "DDE Collection Account", period: "21-Jan-2017", strikeDate: "21-Mar-17", allocatedAmount: 451.05} ;

  /// end: imported dynmaic data placeholders

}

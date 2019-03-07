// Partial MisAllocation Correction - Allocation Module

import { Component,NgModule, OnInit } from '@angular/core';
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
  // selector: 'app-user-management',
  templateUrl: './partial-correction.component.html'
})
export class PartialCorrectionComponent {
 
  // --------------------------------------------------------------------------

  reverse ; 

  search(x){
    console.log("Searching " + x) ;
    this.reverse = true ;
  }
    
  misallocatedInput = new FormGroup({
    policyCode: new FormControl('', Validators.required),
    period: new FormControl("2018-09-01", Validators.required),
    misallocationID: new FormControl({value: '', disabled: true}),
  }) ;

// An Array to hold dynamic data - Collection History:  
collections = [
  {
    collID: 20, xpectedAmount: 210.61, transType: "Premium Allocation", policyID: "210611", period: "2012-06-21",
     comments: "Unprocessed Allocation", amount: 432.11, collStatus: "C", receiptNo: 123456, collPeriod: "2012-06-21"
  },
  {
    collID: 14, xpectedAmount: 270.41, transType: "Reverse Offset", policyID: "210617", period: "2013-06-21",
     comments: "Review the Allocation", amount: 114.32, collStatus: "D", receiptNo: 123457, collPeriod: "2013-06-21"
  },
  {
    collID: 12, xpectedAmount: 240.84, transType: "Premium Allocation", policyID: "210618", period: "2014-06-21",
     comments: "Unprocessed Allocation", amount: 413.12, collStatus: "C", receiptNo: 123458, collPeriod: "2014-06-21"
  }
]

selectedItem: any ; // placeholder for a specific collection item
 
onSelect(x) 
{
  this.selectedItem = x ;
  // this.showDetail = true ;
}

  // --------------------------------------------------------------------------

  // bgn: Editable Table
  editField: string;
  personList: Array<any> = [
    { id: "1", name: 'Aurelia Vega', age: 30, companyName: 'Deepends', country: 'Spain', city: 'Madrid' }
    // { id: 2, name: 'Guerra Cortez', age: 45, companyName: 'Insectus', country: 'USA', city: 'San Francisco' },
    // { id: 3, name: 'Guadalupe House', age: 26, companyName: 'Isotronic', country: 'Germany', city: 'Frankfurt am Main' },
    // { id: 4, name: 'Aurelia Vega', age: 30, companyName: 'Deepends', country: 'Spain', city: 'Madrid' },
    // { id: 5, name: 'Elisa Gallagher', age: 31, companyName: 'Portica', country: 'United Kingdom', city: 'London' },
  ];

  awaitingPersonList: Array<any> = [
    { id: 6, name: 'George Vega', age: 28, companyName: 'Classical', country: 'Russia', city: 'Moscow' },
    { id: 10, name: 'John Maklowicz', age: 36, companyName: 'Mako', country: 'Poland', city: 'Bialystok' },
  ];

  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.personList[id][property] = editField;
  }

  remove(id: any) {
    this.awaitingPersonList.push(this.personList[id]);
    this.personList.splice(id, 1);
  }

  default = false ;
  add() {
      this.personList[0]={ id: 21, name: 'PersonName', age: 21, companyName: 'Company', country: 'Country', city: 'City' };
      this.default = true ;
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }
  // end: Editable Table

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
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

  bnkAccDetails = new FormGroup({
    paypointMode: new FormControl('', Validators.required),
    bankName: new FormControl('', Validators.required),
    creationDate: new FormControl({value:"2018-09-01", disabled: true}),
    modifiedDate: new FormControl({value:"2018-09-30", disabled: true}),

    bankStatementID: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$") ] ),
    accountNo: new FormControl({value:'', disabled: true}, Validators.required),
    accountDesc: new FormControl({value:'', disabled: true}, Validators.required),

  }) ;

  bnkStmtDetails = new FormGroup({
    statementNo: new FormControl('', Validators.required),
    fromDate: new FormControl("2018-09-01", Validators.required),
    openingBalance: new FormControl('', Validators.required),
    reversalPeriod: new FormControl("2018-04-30"),
    branch: new FormControl({value: '', disabled: true}),

    // bankStatementID: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$") ] ),
    postingStatus: new FormControl({value:'', disabled: true}),
    toDate: new FormControl('2018-09-30', Validators.required),
    closingBalance: new FormControl('', Validators.required),
    loginName: new FormControl({value: '', disabled: true})

  }) ;

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

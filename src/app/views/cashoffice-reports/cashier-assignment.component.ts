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
  templateUrl: './cashier-assignment.component.html'
})
export class CashierAssignmentComponent {

  cashierInput = new FormGroup({
    branchCode: new FormControl('', Validators.required),
    cashOfficeCode: new FormControl('', Validators.required)
  });

  onSubmit(){
    this.displayReport = true ; // show container for the results
  
    console.table(this.cashierInput.value) ;
  }

  displayReport = false ;

  toggleDisplayReport(){
    this.displayReport = !this.displayReport ; // false
  }

  // An Array to hold dynamic data - Payment Methods: 
  paymentMethods = [ 
    { code:"CSH", description:"Cash", start:"21-Jun-11",end:"" }, 
    { code: "CHQ", description: "Cheque", start:"21-Jun-11",end:"" }
  ] ;
   
  // An Array to hold dynamic data - Applications: 
  applications = [ 
    { code:"GPL", description:"Group Life System", start:"21-Jun-11",end:"" },
    { code:"SUN", description:"Sundry Receipts", start:"21-Jun-11",end:"" },
    { code:"TPP", description:"Thito Pay Point", start:"21-Jun-11",end:"" } 
  ] 

  // An Array to hold dynamic data - Cashiers
  cashiers = [
    {cashierID:"JDOE", cashierName:"Jane Doe", snrCashier:"N", start: "21-Jan-11", end: "30-Jun-12"},
    {cashierID:"EPOE", cashierName:"Edgar Po", snrCashier:"Y", start: "21-Jun-11", end: "31-Aug-12"},
    {cashierID:"DOZZ", cashierName:"Dawn Ozz", snrCashier:"Y", start: "21-Jun-11", end: "31-Dec-14"}
  ] 
}
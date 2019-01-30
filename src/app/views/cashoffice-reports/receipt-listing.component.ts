import { Component, NgModule, OnInit } from '@angular/core';
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
  templateUrl: './receipt-listing.component.html'
})
export class ReceiptListingComponent {

  listingInput = new FormGroup({
    branchCode: new FormControl('', Validators.required),
    cashOfficeCode: new FormControl('', Validators.required),
    cashierCode: new FormControl('', Validators.required),
    reportDate: new FormControl('2018-09-30', Validators.required)
  });

  displayReport = false ;

  toggleDisplayReport(){
    this.displayReport = !this.displayReport ; // false
  }

  onSubmit(){
    console.table(this.listingInput.value) ;

    // form-processing code
    this.displayReport = true ; // show container for the results

    console.log( this.today.toDateString ) ;

    this.receipt = this.receipts[ Math.floor( Math.random() * Math.floor( this.receipts.length ) )  ] ; 
  }

  receipt: any ;
  
  today = new Date() ;

  // dbg. dummy data for receipt items
  application = "Policy" ; // Group Life System, or Sundry Receipts

  // flag for print-preview data
  printPreview = false ;

  togglePrintPreview()
  {
    this.printPreview = ! this.printPreview ;

    // call pdf print preview pop up window here
  }

  // An Array to hold dynamic data - Receipts
  receipts = [
    { application: "Group Life System", transactionType: "Group Funeral Premium Receipts", paypointID: "", paypointName: "", amount: "123.45"},
    { application: "Policy", transactionType: "Credit Class Premiums", policyNo: "1234567", payer: "John Doe", period: "21-Jun-11", amount: "678.90"},
    { application: "Sundry Receipts", transactionType: "Sundry Re-imbursement of Staff Advances", amount: "101.11"}
  ]
}

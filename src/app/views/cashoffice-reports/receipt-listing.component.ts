// Daily Receipt Listing - Cash Office Reports module

import { Component, NgModule, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'; 

import * as _ from 'underscore'; /// npm install underscore

import { apiURL } from '../../_nav' ;

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

    // this.receipt = this.receipts[ Math.floor( Math.random() * Math.floor( this.receipts.length ) )  ] ; 

  }

  // receipt: any ;
  
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
    { receiptNo: 1234, drawee: "", refNo: 44214, refDate: "24-Jan-2012", payeeType: "", rctAmount: 801.24, 
      application: "Group Life System", transactionType: "Group Funeral Premium Receipts", paypointID: "", paypointName: "", appAmount: "123.45"},
    { receiptNo: 1235, drawee: "", refNo: 44215, refDate: "25-Jun-2013", payeeType: "", rctAmount: 811.35, 
      application: "Policy", transactionType: "Credit Class Premiums", policyNo: "1234567", payer: "John Doe", period: "21-Jun-11", appAmount: "678.90"},
    { receiptNo: 1236, drawee: "", refNo: 44216, refDate: "27-Nov-2014", payeeType: "", rctAmount: 821.46, 
      application: "Sundry Receipts", transactionType: "Sundry Re-imbursement of Staff Advances", appAmount: "101.11"}
  ]
  
}

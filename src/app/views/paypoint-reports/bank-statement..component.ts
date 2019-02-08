import { Component, OnInit, NgModule } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'; 
// import { ReceiptListingComponent } from './receipt-listing.component';

@NgModule({
  imports: [
    FormControl,
    FormGroup, 
    FormsModule,
    ReactiveFormsModule]
})

@Component({
  templateUrl: './bank-statement.component.html'
})
export class BankStatementComponent {

  today = new Date() ;

  receiptInput = new FormGroup({
    bankStatementID: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$") ] ) 
  } ) ;

  onSubmit(){
    this.displayReport = true ; // show container for the results
  
    console.table(this.receiptInput.value) ;

    // dbg: get a random item from the array
    this.receipt = this.receipts[ Math.floor( Math.random() * Math.floor( this.receipts.length ) )  ] ; 

  }

  receipt: any ;
  
  displayReport = false ;

  toggleDisplayReport() { 
    this.displayReport = ! this.displayReport ;
  }

  // printPreview = false ;

  // togglePrintPreview()
  // {
  //   this.printPreview = ! this.printPreview ;

  //   // call pdf print preview pop up window here
    
  // }

  // Dynamic Data: 
  receivedFrom = "Janet Dozen" ; 
  sum = 678.90 ;
  paymentType = "CSH" ;
  date = "21-Jun-11" ;
  branchCode = "102" ;
  cashier = "Janelle Dose" ;

  // An Array to hold dynamic data - Receipts
  receipts = [
    { application: "Group Life System", transactionType: "Group Funeral Premium Receipts", paypointID: "", paypointName: "", amount: "123.45"},
    { application: "Policy", transactionType: "Credit Class Premiums", policyNo: "1234567", payer: "John Doe", period: "21-Jun-11", amount: "678.90"},
    { application: "Sundry Receipts", transactionType: "Sundry Re-imbursement of Staff Advances", amount: "101.11"}
  ]

}

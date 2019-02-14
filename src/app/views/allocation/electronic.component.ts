import { Component, NgModule } from '@angular/core';
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
  templateUrl: 'electronic.component.html'
})
export class ElectronicComponent {

  detailInput = new FormGroup({
    paypointID: new FormControl('', Validators.required),
    creditFiles: new FormControl('', Validators.required),
    receiptNo: new FormControl('', Validators.required),
    receiptPeriod: new FormControl({value:"", disabled: true}),
    statementNo: new FormControl('', Validators.required),
    statementPeriod: new FormControl({value:"", disabled: true}),
    allocatedPeriod: new FormControl('2018-09-30', Validators.required),

    // 2nd column
    paypointName: new FormControl({value:"", disabled: true}),
    creditAmount: new FormControl({value:"", disabled: true}),
    grossAmountReceipt: new FormControl({value:"", disabled: true}),
    grossAmountStatement: new FormControl({value:"", disabled: true})

    // buttons

  });

  electronicAllocation(){
    console.table(this.detailInput.value) ; //dbg
    this.detailInput.disable() ; 

    // form processing code
  }

/// bgn code copy

today = new Date() ;

  receiptInput = new FormGroup({
    bankStatementID: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$") ] ) 
  } ) ;

  onSubmit(){
    this.displayAllocation = true ; // show container for the results
  
    console.table(this.receiptInput.value) ;

    // dbg: get a random item from the array
    this.receipt = this.receipts[ Math.floor( Math.random() * Math.floor( this.receipts.length ) )  ] ; 

  }

  receipt: any ;
  
  displayAllocation = false ;

  toggleDisplayAllocation() { 
    this.displayAllocation = ! this.displayAllocation ;
    this.detailInput.enable() ;
  }

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

  // An Array to hold dynamic data - Bank Statements
  bankStatement =
    { bankAccNo: 747, bankStmID: 243, stmtNo: 10932, fromDate: "27-Jul-14", toDate: "27-Aug-14",
      openingBalance: 442.11, bankName: "Ftown Bank", inputDate: "08-Aug-14", cashierCode: 256, 
      cashierName: "Al Gore", closingBalance: 452.45 }
  
  // An Array to hold dynamic data - Statment Transations
  stmTransactions = [
    {bankStmID: 243, transDesc: "Auto Transfers", policyNo: "", policyPayor:"", payMode:"BSO", amount: 532.99},
    {bankStmID: 247, transDesc: "Bank Charges", policyNo: "", policyPayor:"", payMode:"BSO", amount: 232.61},
    {bankStmID: 243, transDesc: "Premium Receipts", policyNo: "", policyPayor:"", payMode:"BSO", amount: 362.55},
    {bankStmID: 243, transDesc: "Bank Charges", policyNo: "", policyPayor:"", payMode:"BSO", amount: 232.61}    
  ]

  netMovement: number = 
    this.stmTransactions.reduce( function(accumulator, currentValue){ return accumulator +  currentValue.amount}, 0 ) ;


/// end code copy

}

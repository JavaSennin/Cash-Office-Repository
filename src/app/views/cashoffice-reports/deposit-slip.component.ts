// REPRINT DEPOSIT SLIP

import { Component,NgModule, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'; 


@NgModule({
  imports: [
    FormControl,
    FormGroup, 
    FormsModule,
    ReactiveFormsModule,
  Validators]
})

@Component({
  // selector: 'app-user-management',
  templateUrl: './deposit-slip.component.html'
})
export class DepositSlipComponent {

  depositNumber = new FormControl('', [ Validators.required, Validators.pattern("^[0-9]*$") ]) ;

  // reprintReceipt = new FormGroup({}) ;

  viewReport(){
    console.log('Receipt No. ' + this.depositNumber.value) ;
    this.displayReport = true ; // show container for the results
  
  }

  displayReport = false ;

  toggleDisplayReport() { 
    this.displayReport = ! this.displayReport ;
  }

  printPreview = false ;

  togglePrintPreview()
  {
    this.printPreview = ! this.printPreview ;

    // call pdf print preview pop up window here
  }

  // Dynamic Data
  accountNumber = 123456789;
  accountName = "Dollars Bank Inc";
  valueDate = "21-Jun-11";
  reference = "GHO";
  totalCash: number = 0.00 ;
  
  // An Array to hold dynamic data - Cheques
  cheques = [
    {drawer:"Gaborone Motors", chequeNo:"123", amount: 125.05},
    {drawer:"Matsapa Butchery Inc", chequeNo:"346", amount: 200.00},
    {drawer:"Tlokweng Insurance", chequeNo:"789", amount: 150.05}
  ]

  totalCheques: number = 
    this.cheques.reduce( function(accumulator, currentValue){ return accumulator +  currentValue.amount}, 0 ) ;

}

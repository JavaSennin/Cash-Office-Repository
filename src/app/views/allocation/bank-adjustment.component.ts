// Bank Statement Adjustment Voucher - Allocation Module

import { Component, NgModule } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { FormBuilder, FormArray } from '@angular/forms'; // form array things require FormGroup as well

@NgModule({
  imports: [
    FormControl,
    FormGroup, 
    FormsModule,
    ReactiveFormsModule,
    Validators
  
  , FormArray, FormBuilder]
})

@Component({
  templateUrl: 'bank-adjustment.component.html'
})
export class BankAdjustmentComponent {

  bankStatementID = new FormControl('', Validators.required) ;

  bnkAccDetails = new FormGroup({
    paymentMode: new FormControl({value:'', disabled: true}),
    creationDate: new FormControl({value:"2018-09-01", disabled: true}),
    modifiedDate: new FormControl({value:"2018-09-30", disabled: true}),

    bankName: new FormControl({value:'', disabled: true}),
    accountNo: new FormControl({value:'', disabled: true}),
    accountDesc: new FormControl({value:'', disabled: true})

  }) ;

  searchSucceeded: boolean = false ;

  clear(){
    // clearing code here: 

    this.searchSucceeded = false ; // hide control buttons
  }

  search(x){
    console.log('Searching ' + x) ; // dbg

    // form-processing code here: 

    this.searchSucceeded = true ; // show control buttons
  }

  bnkStmtDetails = new FormGroup({
    statementNo: new FormControl({value: '', disabled: true}),
    fromDate: new FormControl({value: '2018-09-01', disabled: true }),
    openingBalance: new FormControl({value: '', disabled: true}),

    postingStatus: new FormControl({value:'', disabled: true}),
    toDate: new FormControl({value: '2018-09-30', disabled: true }),
    closingBalance: new FormControl({value: '', disabled: true}),

    glPostingStatus: new FormControl({value:'', disabled: true}),
    loginName: new FormControl({value: '', disabled: true}),
    branch: new FormControl({value: '', disabled: true})

  }) ;

}

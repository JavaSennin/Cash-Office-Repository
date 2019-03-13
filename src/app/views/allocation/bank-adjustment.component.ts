// Bank Statement Adjustment Voucher - Allocation Module

import { Component, NgModule } from '@angular/core';
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
  templateUrl: 'bank-adjustment.component.html'
})
export class BankAdjustmentComponent {

  branchCode = new FormControl('', Validators.required) ;

  viewBranchReport(){
    console.log('Branch Code: ' + this.branchCode.value) ;
  }
}

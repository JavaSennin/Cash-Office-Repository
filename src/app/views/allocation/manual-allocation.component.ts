// TO-DO: vlaueChanges subsription for receiptNumber field

import { Component, OnInit, NgModule } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms'; 


@NgModule({
  imports: [
    FormControl,
    FormGroup, 
    FormsModule,
    ReactiveFormsModule]
})

@Component({
  // selector: 'reprint-receipt',
  templateUrl: './manual-allocation.component.html'
})
export class ManualAllocationComponent {

  receiptNumber = new FormControl('') ;

  // reprintReceipt = new FormGroup({}) ;

  viewReport(){
    // this.receiptNumber.setValue('R' +  this.receiptNumber.value ) ;
    console.log('Receipt No. ' + this.receiptNumber.value) ;
  }

  // constructor() { 
  //   // this.receiptNumber.setValue('234') ;
  // }
}

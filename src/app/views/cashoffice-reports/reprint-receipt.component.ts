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
  selector: 'reprint-receipt',
  templateUrl: './reprint-receipt.component.html'
})
export class ReprintReceiptComponent {

  receiptNumber = new FormControl('') ;

  reprintReceipt = new FormGroup({
    
  }) ;

  viewReport(){
    this.receiptNumber.setValue('R' +  this.receiptNumber.value ) ;
    console.log(this.receiptNumber.value) ;
  }

  // constructor() { 
  //   // this.receiptNumber.setValue('234') ;
  // }
}

// direct debit

import { Component,NgModule, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms'; 


@NgModule({
  imports: [
    FormControl,
    FormGroup, 
    FormsModule,
    ReactiveFormsModule]
})

@Component({
  // selector: 'app-user-management',
  templateUrl: './direct-debit.component.html'
})
export class DirectDebitComponent {

  depositNumber = new FormControl('') ;

  // reprintReceipt = new FormGroup({}) ;

  viewReport(){
    // this.receiptNumber.setValue('R' +  this.receiptNumber.value ) ;
    console.log('Receipt No. ' + this.depositNumber.value) ;
   }
   exitReport(){
    // this.receiptNumber.setValue('R' +  this.receiptNumber.value ) ;
    console.log('Exit Report') ;
   }
}

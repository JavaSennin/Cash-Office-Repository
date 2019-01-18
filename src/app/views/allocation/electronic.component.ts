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
    receiptPeriod: new FormControl(''),
    statementNo: new FormControl('', Validators.required),
    statementPeriod: new FormControl(''),
    allocatedPeriod: new FormControl('2018-09-30', Validators.required),

    // 2nd column
    paypointName: new FormControl(''),
    creditAmount: new FormControl(''),
    grossAmountReceipt: new FormControl(''),
    grossAmountStatement: new FormControl('')

    // buttons

  });

  electronicAllocation(){
    console.table(this.detailInput.value) ; //dbg

    // form processing code
  }

}

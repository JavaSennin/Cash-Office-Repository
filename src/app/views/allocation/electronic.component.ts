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

  });

  detailReport(){
    console.table(this.detailInput.value) ; //dbg

    // dbg
    console.log("Paypoint ID is " + this.detailInput.get("paypointID").value ) ;
    this.detailInput.get("paypointName").setValue("pp name") ;
    console.log("Paypoint Name is " + this.detailInput.get("paypointName").value ) ;
  }

  allocate(){
    console.log("Paypoint ID is " + this.detailInput.get("paypointID").value ) ;
    this.detailInput.get("paypointName").setValue("pp name") ;
    console.log("Paypoint Name is " + this.detailInput.get("paypointName").value ) ;
  }

}


// import { Component, NgModule } from '@angular/core';
// import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'; 

// @NgModule({
//   imports: [
//     FormControl,
//     FormGroup, 
//     FormsModule,
//     ReactiveFormsModule,
//     Validators
// ]
// })

// @Component({
//   // selector: '',
//   templateUrl: './electronic.component.html'
// })
// export class ElectronicComponent {
 
//   eAllocationInput = new FormGroup({
//     paypointID: new FormControl('sdssc'),
//     paypointName: new FormControl('') 

//   });

//   onSubmit(){
//     this.eAllocationInput.patchValue( {paypointName: "PN" + this.eAllocationInput.get('paypointID').value});
//     console.table(this.eAllocationInput.value) ;
//     // this.cashierInput.paypoint; // paypointID.s = this.cashierInput.get(branchCode) ;
//     this.eAllocationInput.get('paypointName').value
// }
// }
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
  templateUrl: 'bank-processing.component.html'
})
export class BankProcessingComponent {

  BankStatInput = new FormGroup({
    paymentMode: new FormControl('', Validators.required),
    Bdid: new FormControl('', Validators.required),
    BName: new FormControl('', Validators.required),
    accNumber: new FormControl('', Validators.required),
    CrDate: new FormControl('', Validators.required),
    mdDate: new FormControl('', Validators.required),
    AccDesc: new FormControl('', Validators.required),
    statementNumber: new FormControl('', Validators.required),
    postingStatus: new FormControl('UNPOSTED', Validators.required),
    dateFrom: new FormControl('', Validators.required),
    dateTo: new FormControl('', Validators.required),
    loginName: new FormControl('tkadimo', Validators.required),
    opBalance: new FormControl('', Validators.required),
    closingBalance: new FormControl('', Validators.required),
    Branch: new FormControl('Gaborone HQ', Validators.required),
  });

  summaryReport(){
    console.table(this.BankStatInput.value) ;

    // form-processing code
  }

}

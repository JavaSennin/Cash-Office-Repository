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

  summaryInput = new FormGroup({
    branchCode: new FormControl('', Validators.required),
    fromDate: new FormControl('2018-09-01', Validators.required),
    toDate: new FormControl('2018-09-30', Validators.required)
  });

  summaryReport(){
    console.table(this.summaryInput.value) ;

    // form-processing code
  }

}

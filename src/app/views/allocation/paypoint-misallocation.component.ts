import { Component,NgModule, OnInit } from '@angular/core';
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
  // selector: 'app-user-management',
  templateUrl: './paypoint-misallocation.component.html'
})
export class PaypointMisallocationComponent {
 
  cashierInput = new FormGroup({
    branchCode: new FormControl('', Validators.required),
    cashOfficeCode: new FormControl('', Validators.required)
  });

  onSubmit(){
    console.table(this.cashierInput.value) ;
}
}
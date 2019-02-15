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
  // templateUrl: 'query-report.component.html'
  templateUrl: 'query-receipt.component.html'

})
export class QueryReceiptComponent {
  QueryReciept = FormGroup;
  cashOfficeForm = new FormGroup({
    recieptDesc: new FormControl('', Validators.required),
    cashier: new FormControl('', Validators.required),
    startDate: new FormControl('', Validators.required),
    endDate: new FormControl('', Validators.required)

  });
  onSubmit(){
    this.displayReport = true ; // show container for the results. 
  
    console.table(this.cashOfficeForm.value) ;
  }

  
  
  displayReport = false ;

  toggleDisplayReport(){
    this.displayReport = !this.displayReport ; // false
  }
}

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
  templateUrl: 'collection-app-summary.component.html'
})
export class CollectionAppSummaryComponent {

  detailInput = new FormGroup({
    branchCode: new FormControl('', Validators.required),
    fromDate: new FormControl('2018-09-01', Validators.required),
    toDate: new FormControl('2018-09-30', Validators.required)
  });
 

  detailReport(){

    this.displayReport = true ;
    console.table(this.detailInput.value) ;

    // form-processing code
  }
  displayReport = false ;

  toggleDisplayReport(){
    this.displayReport = !this.displayReport ; // false
  }
  //Array for Dummy data
  payments_p: any[]= [
    {payment_method:"Cheque",amount:"258,896.00",count:245},
    {payment_method:"Cash",amount:"558,896.00",count:240},
    {payment_method:"Cash",amount:"8,896.00",count:502},
    {payment_method:"Cash",amount:"8,896.00",count:802},
  
  ];

  payments_s: any[]= [
    {payment_method:"Cheque",amount:"258,896.00",count:245},
    {payment_method:"Cash",amount:"558,896.00",count:240},
    {payment_method:"Cheque",amount:"8,896.00",count:502},
    {payment_method:"Cash",amount:"8,896.00",count:802},
  
  ];

  payments_gls: any[]= [
    {payment_method:"Cheque",amount:"258,896.00",count:245},
    {payment_method:"Cash",amount:"558,896.00",count:240},
    {payment_method:"Cheque",amount:"8,896.00",count:6062},
    {payment_method:"Cash",amount:"8,896.00",count:802},
  
  ];
  payments_gls2: any[]= [
    {payment_method:"Cheque",amount:"258,896.00",count:245},
    {payment_method:"Cash",amount:"558,896.00",count:240},
    {payment_method:"Cheque",amount:"8,896.00",count:6062},
    {payment_method:"Cheque",amount:"8,896.00",count:802},
  
  ];
}

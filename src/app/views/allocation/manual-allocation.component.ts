// TO-DO: vlaueChanges subsription for receiptNumber field

import { Component, OnInit, NgModule } from '@angular/core';
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
  // selector: 'reprint-receipt',
  templateUrl: './manual-allocation.component.html'
})
export class ManualAllocationComponent {

  
  ManualAll = new FormGroup({
    receiptNumber: new FormControl('', Validators.required),
    receiptNumberLa: new FormControl('', Validators.required)
  });

  onSubmit(){
    this.displayReport = true;
    console.table(this.ManualAll.value) ;
}

displayReport = false;

recNo=[
  {receNo:"Bank Statement"},
  {receNo:"Reciept Number"}
  
];
table1data=[
  {pID:"7985236",per:"12/03/2019",gamount:2345.45,ramount:123.89,aamount:345.53,uamount:897.55}
  
];
table2data=[
  {pCode:"7985236",per:"12/03/2019",pID:123451,eamount:234.98,purpose:"IDK",purposeid:2445,pstatus:"Posted",aamount:235.23}
  
];

}

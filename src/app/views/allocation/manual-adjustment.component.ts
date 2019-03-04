import { Component, NgModule, OnInit } from '@angular/core';
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
  templateUrl: './manual-adjustment.component.html'
})
export class ManualAdjustmentComponent {

  today = new Date() ; 

  newTransInput = new FormGroup({
    policyCode: new FormControl('', Validators.required),
    amount: new FormControl('', Validators.required),
    period: new FormControl('2018-09-01', Validators.required),
    transType: new FormControl('', Validators.required),
    comments: new FormControl('', Validators.required),

    bnkStmtNo: new FormControl({value:'', disabled: true})

  });

  // radios = new FormControl('', Validators.required)  ;

  // An Array to hold dynamic data - Manual Adjustments:  
  adjustments = [
    {
      mnAdjID: 20, policyCode: "100210611", transType: "Premium Allocation", policyID: "210611", 
       comments: "Unprocessed Allocation", amount: 432.11, postingStatus: "POSTED", bobiRefNo: 123456, period: "2012-06-21"
    },
    {
      mnAdjID: 14, policyCode: "100210617", transType: "Reverse Offset", policyID: "210617", 
       comments: "Review the Allocation", amount: 114.32, postingStatus: "UNPOSTED", bobiRefNo: 123457, period: "2013-06-21"
    },
    {
      mnAdjID: 12, policyCode: "100210618", transType: "Premium Allocation", policyID: "210618", 
       comments: "Unprocessed Allocation", amount: 413.12, postingStatus: "POSTED", bobiRefNo: 123458, period: "2014-06-21"
    }
  ]

  // Record for Posting Controls
  
  item ; 

  onSelect(x, i) {
    this.item = x ;
    // console.log("Selected item Id: " + selectedItem.policyCode); // You get the Id of the selected item here
    console.log("this trans type is " + this.item.transType ) ;
    console.log(this.adjustments[i].comments)
}

  // New Transaction Controls
  clear(){

  }

  exit(){ this.clear() ;  }

  post(){

  }

  save(){

  }

}

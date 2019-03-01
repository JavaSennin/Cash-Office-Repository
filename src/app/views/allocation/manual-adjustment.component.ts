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

  // bgn: import rsp-tab

  unspecifiedInput = new FormGroup({
    fromDate: new FormControl('2018-09-01', Validators.required),
    toDate: new FormControl('2018-09-30', Validators.required)
  });
  
  onSubmit(){
    // this.unspecifiedInput.disable() ;

    // this.displayReport = true ; // show container for the results
  
    // console.table(this.unspecifiedInput.value) ;

  }

  displayReport = false ;

  toggleDisplayReport(){
    // this.displayReport = !this.displayReport ; // false
    // this.unspecifiedInput.enable() ;
  }
      

  // bgn: working items

  today = new Date() ; 

  newTransInput = new FormGroup({
    policyCode: new FormControl('', Validators.required),
    amount: new FormControl('', Validators.required),
    period: new FormControl('2018-09-01', Validators.required),
    transType: new FormControl('', Validators.required),
    comments: new FormControl('', Validators.required),

    bnkStmtNo: new FormControl({value:'', disabled: true})

  });

  radios = new FormControl('', Validators.required)  ;

  // An Array to hold dynamic data - Manual Adjustments:  
  adjustments = [
    {
      mnAdjID: 20, policyCode: "100210611", transType: "Premium Allocation", policyID: "210611", 
       comments: "Unprocessed Allocation", purpose: 2, postingStatus: "POSTED", bobiRefNo: 123456, creation: "21-Jun-2012"
    },
    {
      mnAdjID: 14, policyCode: "100210617", transType: "Premium Allocation", policyID: "210617", 
       comments: "Review the Allocation", purpose: 4, postingStatus: "UNPOSTED", bobiRefNo: 123457, creation: "21-Jun-2013"
    },
    {
      mnAdjID: 12, policyCode: "100210618", transType: "Premium Allocation", policyID: "210618", 
       comments: "Unprocessed Allocation", purpose: 5, postingStatus: "POSTED", bobiRefNo: 123458, creation: "21-Jun-2014"
    }
  ]

  // Record for Posting Controls
  onSelect(selectedItem: any, x: any) {
    console.log("Selected item Id: " + selectedItem.policyCode); // You get the Id of the selected item here
    console.log("the items is at row " + x) ;
}

  // New Transaction Controls
  clear(){

  }

  exit(){ this.clear() ;  }

  post(){

  }

  save(){

  }

  // end: working items

  // end: import rsp-tab

}

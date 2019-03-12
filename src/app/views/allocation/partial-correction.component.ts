// Partial MisAllocation Correction - Allocation Module

import { Component,NgModule, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'; 

import { FormBuilder, FormArray } from '@angular/forms'; // form array things require FormGroup as well

@NgModule({
  imports: [
    FormControl,
    FormGroup, 
    FormsModule,
    ReactiveFormsModule,
    Validators

    , FormArray, FormBuilder
]
})

@Component({
  templateUrl: './partial-correction.component.html'
})
export class PartialCorrectionComponent {
 
  viewMisallocations = false ;
  makeCorrections = true ; // show editable table for "Premium Reallocation" transactions.

  toggleMakeCorrections(transaction_type){
    if ( transaction_type == 'allocate')
    {
      this.makeCorrections = true ;
    }

    if ( transaction_type == 'reverse')
    {
      this.makeCorrections = false ;
    }
  }

  search(x){
    console.log("Searching " + x) ;
    this.viewMisallocations = true ;
  }
    
  misallocatedInput = new FormGroup({
    policyCode: new FormControl('', Validators.required),
    period: new FormControl("2018-09-01", Validators.required),

    misallocationID: new FormControl({value: '', disabled: true}),

    radios: new FormControl(''), // radio button things

    transType: new FormControl('') // radio button things
  }) ;

// An Array to hold dynamic data - Collection History:  
collections = [
  {
    collID: 20, xpectedAmount: 210.61, transType: "Premium Allocation", policyID: "210611", period: "2012-06-21",
     comments: "Unprocessed Allocation", amount: 432.11, collStatus: "C", receiptNo: 123456, collPeriod: "2012-06-21"
  },
  {
    collID: 14, xpectedAmount: 270.41, transType: "Reverse Offset", policyID: "210617", period: "2013-06-21",
     comments: "Review the Allocation", amount: 114.32, collStatus: "D", receiptNo: 123457, collPeriod: "2013-06-21"
  },
  {
    collID: 12, xpectedAmount: 240.84, transType: "Premium Allocation", policyID: "210618", period: "2014-06-21",
     comments: "Unprocessed Allocation", amount: 413.12, collStatus: "C", receiptNo: 123458, collPeriod: "2014-06-21"
  }
]

selectedItem: any ; // placeholder for a specific collection item
 
onSelect(x, position) 
{
  this.selectedItem = x ;
  console.log("Selected item No. " + ( position +1 ) ) ; // dbg
}

clear(){
  window.location.reload() ;
}

exit(){
  // Re-direct to app landing page
  window.location.href = "http://localhost:4200/#/dashboard" ;
}

save(){}

post(){}

/// bgn: firebase form array

myForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      email: '',
      phones: this.fb.array([])
    })

  }

  get phoneForms() {
    return this.myForm.get('phones') as FormArray
  }

  addPhone() {

    const phone = this.fb.group({ 
      area: [],
      prefix: [],
      line: [],
    })

    this.phoneForms.push(phone);
  }

  deletePhone(i) {
    this.phoneForms.removeAt(i)
  }

  postPhone(){
    console.table(this.myForm.get('phones').value) ;
  }

  // displayReport = false ;
  // disableForm = false;

  // detailInput = new FormGroup({
  //   PayPointID: new FormControl('', Validators.required),
    
  //   Paypoint_Name: new FormControl({value:"", disabled: true}, Validators.required),

  //   bankStatementID: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$") ] ) 
  // });

  // detailReport(){
  //   this.detailInput.disable() ;
  //   this.displayReport = true ;
    
  //   console.table(this.detailInput.value) ; // dbg

  //   // form-processing code
  // }

  strikeTotal: number = 136.22 ;

}
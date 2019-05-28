// Payment Receipt Component - Transactions Module

import { Component, NgModule } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'; 

// import { Tpol } from './tpol' ; 

@NgModule({
  imports: [
    FormArray,
    FormBuilder,
    FormControl,
    FormGroup, 
    FormsModule,
    ReactiveFormsModule,
    Validators]
})

@Component({
  templateUrl: 'payment-receipt.component.html'
})
export class PaymentReceiptComponent {

  receiptDetails =  new FormGroup({
    // 1st Column
    paymentMethod: new FormControl('', Validators.required), 
    cashOffice: new FormControl({value: '', disabled: true }), 
    receiptAmount: new FormControl(), 
    receiptNumber: new FormControl({value: '', disabled: true }, Validators.required),
    receivedFrom: new FormControl('', Validators.required), 

    // 2nd Column
    cashierName: new FormControl({value: '', disabled: true }),
    postedStatus: new FormControl({value: '', disabled: true}), 
    receiptDate: new FormControl('2018-09-01', Validators.required)
  }) ;

  paymentDetails = new FormGroup({
    // 1st Column
    bankName: new FormControl('', Validators.required),
    drawee: new FormControl('', Validators.required),
    referenceNumber: new FormControl('', Validators.required),

    // 2nd Column
    branchName: new FormControl('', Validators.required),
    referenceDate: new FormControl('2018-09-01', Validators.required)
  }) ;

  receiptApplications = new FormGroup({}) ; 

  // Placeholders - Dynamic Data: 
  bankNames = ["", "Bank ABC", "Bank Gaborone", "Barclays Bank", "FNB Botswana"] ;
  branchNames = ["", "ABC Mall", "BankGC - HQ", "Barclays Plaza", "WesBank Int."] ;
  paymentMethods = ["", "CSH", "CHQ", "DDE" ] ; 
  receiptAllocations = [] ;
  totalAmount: number = 0.0 ; // receipt allocations section

  // Editable Table Things
  myForm: FormGroup ;
  myForm5: FormGroup ;
  viewtable = false ;
  viewtable5 = false ; 

  // why not have separate form in different ts files, inject in constructor below 
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      corrections: this.fb.array([])
    });

    this.myForm5 = this.fb.group({
      corrections5: this.fb.array([])
    });

  }

  get correctionForms() {
    return this.myForm.get('corrections') as FormArray
  }

  get correctionForms5() {
    return this.myForm5.get('corrections5') as FormArray
  }

  addCorrection() {

    const correction = this.fb.group({ 
      corTransType:[], // Activity
      corPeriod: [],
      corPolicyCode: [],
      corPayerName: [],
      corExpectedAmnt: [],
      corAllocatedAmnt: [],
      corSunTransType: [],
      corDescription: [],
      corTransDate: [],
      corAllocatedAmnt1: [],
      corSunTransType1: [],
      corDescription1: [],
      corTransDate1: [],
      corAllocatedAmnt2: [],

      corActivityDesc: [],
      corArrears: [],
      corDealNumber: [],
      corGrossAmount: [],
      corPaypoint: [],
      corProductCode: [],
      corReceiptedAmount: [],
      corStatus: [],
      corUnitsEncashed: []
      
    })

    this.correctionForms.push(correction);
    this.viewtable = true;
  }

  addCorrection5() {

    const correction = this.fb.group({ 
      corTransType:[], // Activity
      corPeriod: [],
      corPolicyCode: [],
      corPayerName: [],
      corExpectedAmnt: [],
      corAllocatedAmnt: [],
      corSunTransType: [],
      corDescription: [],
      corTransDate: [],
      corAllocatedAmnt1: [],
      corSunTransType1: [],
      corDescription1: [],
      corTransDate1: [],
      corAllocatedAmnt2: [],

      corActivityDesc: [],
      corArrears: [],
      corDealNumber: [],
      corGrossAmount: [],
      corPaypoint: [],
      corProductCode: [],
      corReceiptedAmount: [],
      corStatus: [],
      corUnitsEncashed: []
      
    })

    this.correctionForms5.push(correction);
    this.viewtable5 = true;
  }

  deleteCorrection(i) {
    this.correctionForms.removeAt(i)
  }

  deleteCorrection5(i) {
    this.correctionForms5.removeAt(i)
  }

  clear(){}

  exit(){}

  save(){}

}

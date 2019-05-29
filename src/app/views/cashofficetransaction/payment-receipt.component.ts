// Payment Receipt Component - Transactions Module

import { Component, NgModule } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'; 

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

  // bgn. Editable Table Things

  myFormACL: FormGroup ;
  totalAmountACL: number = 0.0 ;
  viewtableACL = false ;

  myFormGPL: FormGroup ;
  totalAmountGPL: number = 0.0 ;
  viewtableGPL = false ;

  myFormSUN: FormGroup ;
  totalAmountSUN: number = 0.0 ;
  viewtableSUN = false ;

  myFormTPOL: FormGroup ;
  totalAmountTPOL: number = 0.0 ;
  viewtableTPOL = false ;

  myFormTPP: FormGroup ;
  totalAmountTPP: number = 0.0 ;
  viewtableTPP = false ;

  myFormUPR: FormGroup ;
  totalAmountUPR: number = 0.0 ;
  viewtableUPR = false ;  
    
  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.myFormACL = this.fb.group({
      correctionsACL: this.fb.array([])
    });

    this.myFormGPL = this.fb.group({
      correctionsGPL: this.fb.array([])
    });

    this.myFormSUN = this.fb.group({
      correctionsSUN: this.fb.array([])
    });

    this.myFormTPOL = this.fb.group({
      correctionsTPOL: this.fb.array([])
    });

    this.myFormTPP = this.fb.group({
      correctionsTPP: this.fb.array([])
    });

    this.myFormUPR = this.fb.group({
      correctionsUPR: this.fb.array([])
    });

  }

  // ACL
  get correctionFormsACL() {
    return this.myFormACL.get('correctionsACL') as FormArray
  }
  
  addCorrectionACL() {

    const correction = this.fb.group({ 
    
      corActivity: [],
      corAllocatedAmount: [],
      corDescription: [],
      corDealNumber: [],
      corPeriod: [],
      corSelect: []
      
    })

    this.correctionFormsACL.push(correction);
    this.viewtableACL = true;
  }
  
  deleteCorrectionACL(i) {
    this.correctionFormsACL.removeAt(i)
  }

  // GPL
  get correctionFormsGPL() {
    return this.myFormGPL.get('correctionsGPL') as FormArray
  }
  
  addCorrectionGPL() {

    const correction = this.fb.group({ 
    
      corActivity: [],
      corAllocatedAmount: [],
      corDescription: [],
      corPeriod: [],
      corSelect: []
      
    })

    this.correctionFormsGPL.push(correction);
    this.viewtableGPL = true;
  }
  
  deleteCorrectionGPL(i) {
    this.correctionFormsGPL.removeAt(i)
  }

  // SUN
  get correctionFormsSUN() {
    return this.myFormSUN.get('correctionsSUN') as FormArray
  }
  
  addCorrectionSUN() {

    const correction = this.fb.group({ 
      
      corActivity: [],
      corAllocatedAmount: [],
      corDescription: [],
      corPeriod: [],
      corSelect: []
      
    })

    this.correctionFormsSUN.push(correction);
    this.viewtableSUN = true;
  }
  
  deleteCorrectionSUN(i) {
    this.correctionFormsSUN.removeAt(i)
  }

  // TPOL
  get correctionFormsTPOL() {
    return this.myFormTPOL.get('correctionsTPOL') as FormArray
  }
  
  addCorrectionTPOL() {

    const correction = this.fb.group({ 

      corActivity: [],      
      corAllocatedAmount: [],
      corArrears: [],
      corExpectedAmount: [],
      corPayerName: [],
      corPeriod: [],
      corPurpose: [],
      corSelect: [],
      corStatus: [],
      
    })

    this.correctionFormsTPOL.push(correction);
    this.viewtableTPOL = true;
  }
  
  deleteCorrectionTPOL(i) {
    this.correctionFormsTPOL.removeAt(i)
  }

  // TPP
  get correctionFormsTPP() {
    return this.myFormTPP.get('correctionsTPP') as FormArray
  }
  
  addCorrectionTPP() {

    const correction = this.fb.group({ 

      corActivity: [],
      corActivityDesc: [],
      corGrossAmount: [],
      corPaypoint: [],
      corPeriod: [],
      corReceiptedAmount: [],
      corSelect: []
      
    })

    this.correctionFormsTPP.push(correction);
    this.viewtableTPP = true;
  }
  
  deleteCorrectionTPP(i) {
    this.correctionFormsTPP.removeAt(i)
  }

  // UPR
  get correctionFormsUPR() {
    return this.myFormUPR.get('correctionsUPR') as FormArray
  }

  addCorrectionUPR() {

    const correction = this.fb.group({ 
      
      corActivity: [],
      corAllocatedAmount: [],
      corPayer: [],
      corPeriod: [],
      corPolicyCode: [],
      corProductCode: [],
      corSelect: [],
      corStatus: [],
      corUnitsEncashed: []
      
    })

    this.correctionFormsUPR.push(correction);
    this.viewtableUPR = true;
  }

  deleteCorrectionUPR(i) {
    this.correctionFormsUPR.removeAt(i)
  }

  // end: Editable Table Things

  clear(){}

  exit(){}

  save(){}

}

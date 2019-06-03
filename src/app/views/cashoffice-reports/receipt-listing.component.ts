// Daily Receipt Listing - Cash Office Reports module
// Sample Listing - Branch 106 Office LOBA 14-Jan-2019 Cashier SHLA

import { Component, NgModule, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'; 

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import * as _ from 'underscore'; /// npm install underscore

import { apiURL } from '../../_nav' ;

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
  templateUrl: './receipt-listing.component.html'
})
export class ReceiptListingComponent {

  listingInput = new FormGroup({
    branchCode: new FormControl('', Validators.required),
    cashOfficeCode: new FormControl('', Validators.required),
    cashierCode: new FormControl('', Validators.required),
    reportDate: new FormControl('2018-09-30', Validators.required)
  });

  branchCodes :any;
  
  cashierCodes: any ;
  cashOfficeCodes :any;
  
  displayReport = false ;
  
  receipts : any ;

  today = new Date() ;

  url : string;

  constructor(private http:HttpClient){}

  ngOnInit(){
    
    const httpOptions ={
      headers : new HttpHeaders({'Content-Type':'application/json','responseType':'application/json'})
     }
   this.url = apiURL + "collection-branch/"
   this.http.get(this.url,httpOptions)
    .subscribe((response)=>{
      const obj = response;
      
      this.branchCodes = obj; 

    }
    ,err => this.handleError(err));
  }

  getCashierCodes(){

    console.log(this.listingInput.get('branchCode').value) ; // dbg.

    let bc = this.listingInput.get('branchCode').value ;
    // let coc = this.listingInput.get('cashOfficeCode').value ; 

    const httpOptions ={
      headers : new HttpHeaders({'Content-Type':'application/json','responseType':'application/json'})
     }
   this.url = apiURL + "collection-branch/cashier-codes/" + bc ; //+ "&" + coc ;
   this.http.get(this.url,httpOptions)
    .subscribe((response)=>{
      const obj = response;
      
      this.cashierCodes = obj; 

    }
    ,err => this.handleError(err));
  }

  getCashOfficeCodes(){

    console.log(this.listingInput.get('branchCode').value) ; // dbg.

    const httpOptions ={
      headers : new HttpHeaders({'Content-Type':'application/json','responseType':'application/json'})
     }
   this.url = apiURL + "collection-branch/cash-office-codes/" + this.listingInput.get('branchCode').value ;
   this.http.get(this.url,httpOptions)
    .subscribe((response)=>{
      const obj = response;
      
      this.cashOfficeCodes = obj; 

    }
    ,err => this.handleError(err));
  }
  
  onSubmit(){

    this.receipts = [ // dbg. 
      { receiptNo: 1234, drawee: "", refNo: 44214, refDate: "24-Jan-2012", payeeType: "", rctAmount: 801.24, 
        application: "Group Life System", transactionType: "Group Funeral Premium Receipts", paypointID: "", paypointName: "", appAmount: "123.45"},
      { receiptNo: 1235, drawee: "", refNo: 44215, refDate: "25-Jun-2013", payeeType: "", rctAmount: 811.35, 
        application: "Policy", transactionType: "Credit Class Premiums", policyNo: "1234567", payer: "John Doe", period: "21-Jun-11", appAmount: "678.90"},
      { receiptNo: 1236, drawee: "", refNo: 44216, refDate: "27-Nov-2014", payeeType: "", rctAmount: 821.46, 
        application: "Sundry Receipts", transactionType: "Sundry Re-imbursement of Staff Advances", appAmount: "101.11"}
    ]

    if ( this.receipts.length == 0 ) // do error handling. Put all-else in ELSE part
    {
      console.log("No Receipts caputered" ) ;

      window.alert("No Receipts caputered" ) ;
    }
    // else 
    {
      console.table(this.listingInput.value) ;

      // form-processing code
      // this.receipt = this.receipts[ Math.floor( Math.random() * Math.floor( this.receipts.length ) )  ] ; 

      this.displayReport = true ; // show container for the results
    }

  }

  private handleError(error:Response){
    console.log(error); // dbg. 
    return Observable.throw('server error');
  }
  
  toggleDisplayReport(){
    this.displayReport = !this.displayReport ;
  }

  //////////////////////////////////////////////////////////////

  // receipt: any ;

  // dbg. dummy data for receipt items
  application = "Policy" ; // Group Life System, or Sundry Receipts

  // flag for print-preview data
  printPreview = false ;

  togglePrintPreview()
  {
    this.printPreview = ! this.printPreview ;

    // call pdf print preview pop up window here
  }

  // An Array to hold dynamic data - Receipts
  
}

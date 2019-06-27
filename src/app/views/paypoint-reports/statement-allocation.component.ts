
// Bank Statement Allocation - Paypoint Reports Module

import { Component, NgModule } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'; 

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subscription} from 'rxjs'; // rfc: Subscription

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
  templateUrl: 'statement-allocation.component.html'
})
export class StatementAllocationComponent {

  detailInput = new FormGroup({
    PayPointID: new FormControl('', Validators.required),
    
    Paypoint_Name: new FormControl({value:"", disabled: true}),

    bankStatementID: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$") ] ) 
  });

  allocations : any ; 

  disableForm = false;
  displayReport = false ;

  paypoints: any ;

  statement: any ; // Bank Statement Details
  strikeTotal: number = 0.0 ;
  subscription: Subscription ; // rfc. 
  subscription2: Subscription ; 
  
  today = new Date() ;
  totalAmount: number = 0.0 ;

  url: string = "" ;

  constructor(private http:HttpClient){}

  ngOnInit(){
    
    const httpOptions = {
      headers : new HttpHeaders({'Content-Type':'application/json','responseType':'application/json'})
     }

   this.url = apiURL + "collection-branch/paypoints" ; // returns array-list: {[paypoint_id, paypoint_name]}

   this.subscription = 
    this.http.get(this.url,httpOptions)
      .subscribe((response)=>{
        const obj = response;
        
        this.paypoints = obj; 

      }
      ,err => this.handleError(err))
    
      ;
  }
  
  detailReport()
  {
    this.detailInput.disable() ;
    console.table(this.detailInput.value) ; // dbg.

    if ( !this.subscription.closed ) 
    {
      this.subscription.unsubscribe() ; // rfc. /? 
    }

    let paypoint = this.detailInput.get('PayPointID').value[0] ;
    console.log("Summary for PPID " + paypoint + "\n") ; // dbg.
    let bnkStmtID = this.detailInput.get('bankStatementID').value ;

    // form-processing code
    let url = apiURL + "paypoint-reports/statement-allocation/" + paypoint + "&" + bnkStmtID ; /// actual fuctionality

    const httpOptions ={
      headers : new HttpHeaders({'Content-Type':'application/json','responseType':'application/json'})
     } ; 

     this.subscription2 =
   this.http.get(url, httpOptions).subscribe(
      
        (response)=>{ this.allocations = response ; }

      , err => this.handleError(err)

      , () => this.sums() 
    );
  }

  print(){
    // Print-handler functionality
    console.log("Printing...") ; //
  }

  private handleError(error:Response){
    console.log(error);
    return Observable.throw('server error');
  }
  
  private sums(){

    if ( this.allocations.length == 0 ) // Error handling. Put all-else in ELSE part
    {
      console.log("No Matching Data Found" ) ;

      window.alert("No Matching Data Found" ) ;

      this.detailInput.enable() ;
      this.detailInput.get('Paypoint_Name').disable();
    }
    else // bgn: Actual Data Functionality
    {
      // console.log( this.allocations ) ; // dbg.
                               
      // { stmtID: "210", bankName: "First Nation Bank", stmtNo: "FNB42/12012019", accNo: "4638001", accDesc: "DDE Collection Account", period: "21-Jan-2017", strikeDate: "21-Mar-17", allocatedAmount: 451.05} ;
      this.statement = this.allocations[0] ;
      
      // confirm column
      this.strikeTotal = this.allocations.reduce( function(accumulator, currentValue){ return accumulator +  currentValue.premium}, 0 ) ;

      // confirm column
      this.totalAmount = this.allocations.reduce( function(accumulator, currentValue){ return accumulator +  currentValue.amount}, 0 ) ;

      this.displayReport = true ;
    } // end: Actual Data Functionality
  }

  toggleDisplayReport(){
    this.displayReport = !this.displayReport ; // false
    
    this.detailInput.enable() ;
    this.detailInput.get('Paypoint_Name').disable();
  } 

  ngOnDestroy() 
  {
    if ( !this.subscription.closed ) 
    {
      this.subscription.unsubscribe() ;
    }

    if ( !this.subscription2.closed ) 
    {
      this.subscription2.unsubscribe() ;
    }
  }
}

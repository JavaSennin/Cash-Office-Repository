// Paypoint Summary - Paypoint Reports Module
// http://localhost:8080/cash/paypoint-reports/paypoint-summary/604&2011-10-01
// Tested PIDs: 150, 283,505,508,517,552,578,582,588,604,628,634,640,642,649,659,660,786,802,820,825 Period: 2011-10-01

import { Component, NgModule, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'; 

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';

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
  templateUrl: 'paypoint-summary.component.html'
})
export class paypointSummaryComponent implements OnInit {

  detailInput = new FormGroup({
    PayPointID: new FormControl('', Validators.required),
    Paypoint_Name: new FormControl({value:"", disabled: true}),
    Period: new FormControl('2011-10-01', Validators.required)
  });
  
  disableForm = false;
  displayReport = false ;
  
  paypointIds: any ;
  ppReport: any ; 
  
  subscription: Subscription ; // rfc. 
  subscription2: Subscription ; 
  
  today = new Date() ;
  totalDayTotals: number = 0.0 ;
  totalRaisedAmount: number = 0.0 ;

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
        
        this.paypointIds = obj; 

      }
      ,err => this.handleError(err))
    
      ;
  }
  
  detailReport(){
    this.detailInput.disable() ;
    console.table(this.detailInput.value) ; // dbg.

    if ( !this.subscription.closed ) 
    {
      this.subscription.unsubscribe() ; // rfc. /? 
    }

    let paypoint = this.detailInput.get('PayPointID').value[0] ;
    console.log("Summary for PPID " + paypoint + "\n") ; // dbg.
    let period = this.detailInput.get('Period').value ;

    // form-processing code
    let url = apiURL + "paypoint-reports/paypoint-summary/" + paypoint + "&" + period ; /// actual fuctionality

    const httpOptions ={
      headers : new HttpHeaders({'Content-Type':'application/json','responseType':'application/json'})
     } ; 

     this.subscription2 =
   this.http.get(url, httpOptions).subscribe(
      
        (response)=>{ this.ppReport = response ; }

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

    if ( this.ppReport.length == 0 ) // Error handling. Put all-else in ELSE part
    {
      console.log("No Receipts captured" ) ;

      window.alert("No Receipts captured" ) ;

      this.detailInput.enable() ;
      this.detailInput.get('Paypoint_Name').disable();
    }
    else // bgn: Actual Data Functionality
    {
      // console.log( this.ppReport ) ; // dbg.

      this.totalDayTotals = this.ppReport.reduce( function(accumulator, currentValue){ return accumulator +  parseFloat(currentValue.day_total)}, 0 ) ;
      this.totalRaisedAmount = this.ppReport[0].total_raised_amount ;

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

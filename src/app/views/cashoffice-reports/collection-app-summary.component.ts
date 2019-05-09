// http://localhost:8080/cash/collection-summary/106&2019-01-01&2019-01-31

import { Component, NgModule } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import * as _ from 'underscore' ; /// npm install underscore

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
    fromDate: new FormControl('2019-01-01', Validators.required),
    toDate: new FormControl('2019-01-31', Validators.required)
  });

  branchCodes : any
  branchName: string = "" ;  

  displayReport = false ;

  receipts : any ;
  receipts_gls : any ; // Group Life System
  receipts_sun : any ; // Sundry Receipts
  receipts_tpol : any ; // 

  // Collection Receipt Counters
  totalGCount : number = 0 ; 
  totalPCount : number = 0 ; 
  totalSCount : number = 0 ; 

  // Collection Amount Totals
  totalBranch: number = 0.0 ; 
  totalGls: number = 0.0 ; 
  totalSun: number = 0.0 ; 
  totalTPOL: number = 0.0 ; 
  
  url : string;

  constructor(private http:HttpClient){}

  ngOnInit(){
    
    const httpOptions ={
      headers : new HttpHeaders({'Content-Type':'application/json','responseType':'application/json'})
     }
   this.url ="http://localhost:8080/cash/collection-branch/"
   this.http.get(this.url,httpOptions)
    .subscribe((response)=>{
      const obj = response;
      
      this.branchCodes = obj; 

    }
    ,err => this.handleError(err));

    this.showGroupies() ;
  }

  detailReport(){

    let bc = this.detailInput.get('branchCode').value ;
    let fd = this.detailInput.get('fromDate').value ;
    let td = this.detailInput.get('toDate').value ;

    let url ="http://localhost:8080/cash/collection-summary/" + bc + "&" + fd  + "&" + td ;

    const httpOptions ={
      headers : new HttpHeaders({'Content-Type':'application/json','responseType':'application/json'})
     }
   this.http.get(url, httpOptions)
    .subscribe((response)=>
    {
      this.receipts = response; 
      
      // this.cashOfficeCollection = this.receipts.reduce( function(accumulator, currentValue){ return accumulator +  parseFloat(currentValue.receipt_amount)}, 0 ) ;
           
      // this.branchCollection = this.receipts.reduce( function(accumulator, currentValue){ return accumulator +  parseFloat(currentValue.receipt_amount)}, 0 ) ;
    }
    ,err => this.handleError(err)
    , () => this.sums() 
  );

    this.displayReport = true ;

  }

  // returns all items that have "filter" from the "list"
  filterApp(list, filter) { return list.filter( e => e.app_desc.includes( filter ) ) ; }

  private handleError(error:Response){
    console.log(error);
    return Observable.throw('server error');
  }

  private sums(){
    this.branchName = this.receipts[0].branch_name ;

    this.receipts_gls = this.filterApp(this.receipts, "GROUP LIFE") ;
    this.receipts_sun = this.filterApp(this.receipts, "SUNDRY") ;
    this.receipts_tpol = this.filterApp(this.receipts, "POLICY") ;

    this.totalBranch = this.receipts.reduce( function(accumulator, currentValue){ return accumulator +  parseFloat(currentValue.allocated_amount)}, 0 ) ;

    this.totalGls = this.receipts_gls.reduce( function(accumulator, currentValue){ return accumulator +  parseFloat(currentValue.allocated_amount)}, 0 ) ;
    this.totalSun = this.receipts_sun.reduce( function(accumulator, currentValue){ return accumulator +  parseFloat(currentValue.allocated_amount)}, 0 ) ;
    this.totalTPOL = this.receipts_tpol.reduce( function(accumulator, currentValue){ return accumulator +  parseFloat(currentValue.allocated_amount)}, 0 ) ;

    this.totalGCount = this.receipts_gls.reduce( function(accumulator, currentValue){ return accumulator +  parseInt(currentValue.receipt_count)}, 0 ) ;
    this.totalPCount = this.receipts_tpol.reduce( function(accumulator, currentValue){ return accumulator +  parseInt(currentValue.receipt_count)}, 0 ) ;
    this.totalSCount = this.receipts_sun.reduce( function(accumulator, currentValue){ return accumulator +  parseInt(currentValue.receipt_count)}, 0 ) ;

    this.showGroupies() ;
  }

  toggleDisplayReport(){
    this.displayReport = !this.displayReport ; // false
  }
  
   /// Nestle => report container to show all apps dynamically

   reciepts: any[]= [
    {s_no:"",reciept_number:1234,reciept_date:"27/09/67",amount:"258896.00"},
    {s_no:"",reciept_number:4567,reciept_date:"27/09/97",amount:"458253.00"},
    {s_no:"",reciept_number:4867,reciept_date:"02/09/97",amount:"488253.00"},
    {s_no:"",reciept_number:4567,reciept_date:"02/11/07",amount:"888253.00"},
    {s_no:"",reciept_number:9897,reciept_date:"09/11/07",amount:"1888253.00"}
  ];

  groupies : any ;
  groupies2 : any ;

  showGroupies(){
    // console.log( _.groupBy(this.reciepts, "reciept_number") ) ;
    console.log( _.groupBy(this.receipts, "app_desc") ) ;

    // this.groupies = _.groupBy(this.reciepts, "reciept_number") ;
    this.groupies = _.groupBy(this.receipts, "app_desc") ;

    this.groupies2 = JSON.stringify(this.groupies) ; 
    
    console.log( this.groupies2 ) ;
  }

  getCount(x: any): number {
    // console.log(x) ;
    return  x.reduce( function(accumulator, currentValue){ return accumulator +  parseInt(currentValue.receipt_count)}, 0 ) ;
  }

  getSum(x: any): number {
    // console.log(x) ;
    return  x.reduce( function(accumulator, currentValue){ return accumulator +  parseFloat(currentValue.allocated_amount)}, 0 ) ;
  }
}
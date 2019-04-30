import { Component,NgModule, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'; 
import { NgxXml2jsonService } from 'ngx-xml2json'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@NgModule({
  imports: [
    FormControl,
    FormGroup, 
    FormsModule,
    ReactiveFormsModule,
    Validators,
    HttpClient,
]
})

@Component({
  templateUrl: './cashier-assignment.component.html'
})
export class CashierAssignmentComponent {

  cashierInput = new FormGroup({
    branchCode: new FormControl('', Validators.required),
    cashOfficeCode: new FormControl('', Validators.required)
  });
  url : string;
  branchCodes :any;
  cashCodes :any;
  paymentMethod:any;
  reportNumber:Number;
  branchName:string;
  applications:any;
  cashiers:any;

  constructor(private http:HttpClient){

  }
  
 
  ngOnInit(){
    
  
    const httpOptions ={
      headers : new HttpHeaders({'Content-Type':'application/json','responseType':'application/json'})
     }
   this.url ="http://localhost:8080/cash/cashier-assignment/branchCodes"
   this.http.get(this.url,httpOptions)
    .subscribe((response)=>{
      const obj = response;
      
      this.branchCodes = obj; 
      

    }
    ,err => this.handleError(err));
   
    
  }
getCashCodes(){

  let bc  = this.cashierInput.get('branchCode').value;
  const httpOptions ={
    headers : new HttpHeaders({'Content-Type':'application/json','responseType':'application/json'})
   }
 this.url ="http://localhost:8080/cash/cashier-assignment/CashCodes/"+bc;
 this.http.get(this.url,httpOptions)
  .subscribe((response)=>{
    const obj = response;
    console.log(obj);
    this.cashCodes = obj; 
    console.log(this.cashCodes);

  }
  ,err => this.handleError(err));
 

}
  private handleError(error:Response){
    console.log(error);
    return Observable.throw('server error');
  }
  

  displayReport = false ;

  toggleDisplayReport(){
    this.displayReport = !this.displayReport ; // false
  }
  
  // An Method to hold dynamic data - Payment Methods: 
 getPaymentMethods(){

  let bc  = this.cashierInput.get('branchCode').value;
  let co  = this.cashierInput.get('cashOfficeCode').value;
  const httpOptions ={
    headers : new HttpHeaders({'Content-Type':'application/json','responseType':'application/json'})
   }
 this.url ="http://localhost:8080/cash/cashier-assignment/paymentMethods/"+bc+"&"+co;
 this.http.get(this.url,httpOptions)
  .subscribe((response)=>{
    const obj = response;
   
    this.paymentMethod = obj; 
    this.branchName = this.paymentMethod[1][4];

    

  }
  ,err => this.handleError(err));
 


 }
   // An Method to hold dynamic data - Application: 
 getApplication(){

  let bc  = this.cashierInput.get('branchCode').value;
  let co  = this.cashierInput.get('cashOfficeCode').value;
  const httpOptions ={
    headers : new HttpHeaders({'Content-Type':'application/json','responseType':'application/json'})
   }
 this.url ="http://localhost:8080/cash/cashier-assignment/application/"+bc+"&"+co;
 this.http.get(this.url,httpOptions)
  .subscribe((response)=>{
    const obj = response;
   
    this.applications = obj; 
   

    

  }
  ,err => this.handleError(err));
 


 }
 getCashiers(){

  let bc  = this.cashierInput.get('branchCode').value;
  let co  = this.cashierInput.get('cashOfficeCode').value;
  const httpOptions ={
    headers : new HttpHeaders({'Content-Type':'application/json','responseType':'application/json'})
   }
 this.url ="http://localhost:8080/cash/cashier-assignment/cashier/"+bc+"&"+co;
 this.http.get(this.url,httpOptions)
  .subscribe((response)=>{
    const obj = response;
   
    this.cashiers = obj; 
   

    

  }
  ,err => this.handleError(err));
 


 }  
 
 

  currentDate = new Date();

  randomInt(){
    let max=10000000;
    let min=1346;
    
    this.reportNumber =Math.floor(Math.random() * (max - min + 1)) + min;
 }
 
  onSubmit(){
    this.getPaymentMethods();
    this.getApplication();
    this.getCashiers();
    this.displayReport = true ; // show container for the results
   

  }
}
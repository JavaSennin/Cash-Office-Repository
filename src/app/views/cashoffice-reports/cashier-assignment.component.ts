import { Component, NgModule, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
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
export class CashierAssignmentComponent implements OnInit {

  cashierInput = new FormGroup({
    branchCode: new FormControl('', Validators.required),
    cashOfficeCode: new FormControl('', Validators.required),
  });
  url: string;
  branchCodes: any;
  cashCodes: any;
  paymentMethod: any;
  reportNumber: Number;
  branchName: string;
  cashOfficeDesc: string;
  applications: any;
  cashiers: any;
  allReports: any;

  constructor(private http: HttpClient) {

  }

  displayAll = false;
  displayReport = false;
  currentDate = new Date();
  errormsg = false;

  ngOnInit() {


    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'responseType': 'application/json' }),
    };
    this.url = 'http://localhost:8080/cash/cashier-assignment/branchCodes';
    this.http.get(this.url, httpOptions)
      .subscribe((response) => {
        const obj = response;

        this.branchCodes = obj;


      }
        , err => this.handleError(err));


  }
  getCashCodes() {

    const bc = this.cashierInput.get('branchCode').value;
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'responseType': 'application/json' })
    };
    this.url = 'http://localhost:8080/cash/cashier-assignment/CashCodes/' + bc;
    this.http.get(this.url, httpOptions)
      .subscribe((response) => {
        if (response != null) {
          const obj = response;
          this.cashCodes = obj;

        } else {
          this.errormsg = true;
        }

      }
        , err => this.handleError(err));


  }
  private handleError(error: Response) {
    console.log(error);
    return 'Erorr';
  }


  toggleDisplayReport() {
    this.displayReport = !this.displayReport; // false
  }
  selectMeth() {

  }  // An Method to hold dynamic data - Payment Methods:
  getPaymentMethods() {

    const bc = this.cashierInput.get('branchCode').value;
    const co = this.cashierInput.get('cashOfficeCode').value;
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'responseType': 'application/json' })
    };
    this.url = 'http://localhost:8080/cash/cashier-assignment/paymentMethods/' + bc + '&' + co;
    this.http.get(this.url, httpOptions)
      .subscribe((response) => {
        const obj = response;
        console.log(obj);
        this.paymentMethod = obj;
        this.branchName = this.paymentMethod[0].branch_name;
        this.cashOfficeDesc = this.paymentMethod[0].cash_office_desc;



      }
        , err => this.handleError(err));



  }
  getAllPaymentMethods() {

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'responseType': 'application/json' })
    };
    this.url = 'http://localhost:8080/cash/cashier-assignment/allpaymentMethods';
    this.http.get(this.url, httpOptions)
      .subscribe((response) => {
        const obj = response;
        console.log(obj);
        this.paymentMethod = obj;
        this.branchName = this.paymentMethod[0].branch_name;
        this.cashOfficeDesc = this.paymentMethod[0].cash_office_desc;



      }
        , err => this.handleError(err));



  }

  // An Method to hold dynamic data - Application:
  getApplication() {

    const bc = this.cashierInput.get('branchCode').value;
    const co = this.cashierInput.get('cashOfficeCode').value;
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'responseType': 'application/json' })
    };
    this.url = 'http://localhost:8080/cash/cashier-assignment/application/' + bc + '&' + co;
    this.http.get(this.url, httpOptions)
      .subscribe((response) => {
        const obj = response;

        this.applications = obj;
 
      }
        , err => this.handleError(err));



  }
  getAllApplication() {

    const bc = this.cashierInput.get('branchCode').value;
    const co = this.cashierInput.get('cashOfficeCode').value;
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'responseType': 'application/json' })
    };
    this.url = 'http://localhost:8080/cash/cashier-assignment/application/' + bc + '&' + co;
    this.http.get(this.url, httpOptions)
      .subscribe((response) => {
        const obj = response;

        this.applications = obj;




      }
        , err => this.handleError(err));



  }
  getCashiers() {

    const bc = this.cashierInput.get('branchCode').value;
    const co = this.cashierInput.get('cashOfficeCode').value;
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'responseType': 'application/json' })
    };
    this.url = 'http://localhost:8080/cash/cashier-assignment/cashier/' + bc + '&' + co;
    this.http.get(this.url, httpOptions)
      .subscribe((response) => {
        const obj = response;

        this.cashiers = obj;




      }
        , err => this.handleError(err));



  }

  getAllCashiers() {

    const bc = this.cashierInput.get('branchCode').value;
    const co = this.cashierInput.get('cashOfficeCode').value;
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'responseType': 'application/json' })
    }
    this.url = 'http://localhost:8080/cash/cashier-assignment/cashier/' + bc + '&' + co;
    this.http.get(this.url, httpOptions)
      .subscribe((response) => {
        const obj = response;

        this.cashiers = obj;




      }
        , err => this.handleError(err));



  }





  randomInt() {
    let max = 10000000;
    let min = 1346;

    this.reportNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getAllreports() {

    this.displayAll = true;

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'responseType': 'application/json' })
    };
    this.url = 'http://localhost:8080/cash/cashier-assignment/allreports';
    this.http.get(this.url, httpOptions)
      .subscribe((response) => {
        const obj = response;
        this.allReports = obj;
        console.log(this.allReports);


      }
        , err => this.handleError(err));


  }

  onSubmit() {

    const x: number = this.cashierInput.get('branchCode').value.length;
    const y: number = this.cashierInput.get('cashOfficeCode').value.length;

    if (y < 1) {

      console.log('Please Complete all fields')
      this.displayReport = !this.displayReport;
      // show container for the results
    } else {
      console.log(y);
      this.getPaymentMethods();
      this.getApplication();
      this.getCashiers();
      this.displayReport = true;
      // this.cashierInput.disabled;
    }

  }
}

import { Component, NgModule, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
<<<<<<< HEAD
=======
import { Observable } from 'rxjs';
// import { NgxPrintModule } from 'ngx-print'; // npm install ngx-print
// import { NgxSpinnerService } from 'ngx-spinner'; //npm install ngx-spinner
>>>>>>> ffadf0f3d19e70c2605ceac51989cec349ad95d5
import * as _ from 'underscore'; /// npm install underscore

@NgModule({
  imports: [
    FormControl,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
    Validators,
    HttpClient,
<<<<<<< HEAD


  ],

=======
    // NgxPrintModule,
 
  ]
>>>>>>> ffadf0f3d19e70c2605ceac51989cec349ad95d5
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
  All_paymentMethod: any;
  reportNumber: Number;
  branchName: string;
  cashOfficeDesc: string;
  applications: any;
  cashiers: any;
  allReports: any;
  receipts: any;
  groupies: any;
  err_msg: any;


<<<<<<< HEAD
  constructor(private http: HttpClient) { }
=======
  // constructor(private http: HttpClient, private spinner: NgxSpinnerService) {
    constructor(private http: HttpClient) {

  }
>>>>>>> ffadf0f3d19e70c2605ceac51989cec349ad95d5

  displayAll = false;
  displayReport = false;
  currentDate = new Date();
  error_message = false;

  ngOnInit() {

<<<<<<< HEAD
=======
  
/** spinner starts on init */
// this.spinner.show();
 
// setTimeout(() => {
//     /** spinner ends after 5 seconds */
//     this.spinner.hide();
// }, 5000);


>>>>>>> ffadf0f3d19e70c2605ceac51989cec349ad95d5
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'responseType': 'application/json' }),
    };
    this.url = 'http://localhost:8080/cash/cashier-assignment/branchCodes';
    this.http.get(this.url, httpOptions)
      .subscribe((response) => {
        const obj = response;

        this.branchCodes = obj;
        this.error_message = false;


      }
        ,
        (err) => {
          this.err_msg = 'Server unreachable | Check if ts running';
          this.cashierInput.disabled;
          this.error_message = true;
        });
  }

  getCashCodes() {

    const bc = this.cashierInput.get('branchCode').value;
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'responseType': 'application/json' })
    };
    this.url = 'http://localhost:8080/cash/cashier-assignment/CashCodes/' + bc;
    this.http.get(this.url, httpOptions)
      .subscribe((response) => {


        const obj = response;
        this.cashCodes = obj;

      }, (err) => {
        this.error_message = true;

      });

  }

  toggleDisplayReport() {
    this.displayAll = !this.displayAll; // false
    this.displayReport = !this.displayReport; // false
  }
  // An Method to hold dynamic data - Payment Methods:
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
        , (err) => {
          this.err_msg = 'Could not reach Server, Payment Methods = Null!! ' + err;
          console.log(this.err_msg);
        });



  }
  checkOffice(x: any) {
    console.log(x);
  }

  getAll_PaymentMethods(bc: any, co: any) {

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'responseType': 'application/json' })
    };
    this.url = 'http://localhost:8080/cash/cashier-assignment/paymentMethods/' + bc + '&' + co;
    this.http.get(this.url, httpOptions)
      .subscribe((response) => {

        const obj = response;
        this.All_paymentMethod = obj;

        console.log(this.All_paymentMethod.branch_name);

      }
        , (err) => {
          this.err_msg = 'Server unreachable | Check if ts running ' + err;
          console.error(this.err_msg);
        });

    console.log(this.All_paymentMethod);
    return this.All_paymentMethod;
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
        ,
        (err) => {
          this.err_msg = 'Server unreachable | Check if ts running ' + err;
          console.error(this.err_msg);
        });



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
        ,
        (err) => {
          this.err_msg = 'Server unreachable | Check if ts running ' + err;
          console.error(this.err_msg);
        });



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
        ,
        (err) => {
          this.err_msg = 'Server unreachable | Check if ts running ' + err;
          console.error(this.err_msg);
        });



  }

  getAllCashiers() {

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
        ,
        (err) => {
          this.err_msg = 'Server unreachable | Check if ts running ' + err;
          console.error(this.err_msg);
        });



  }

  randomInt() {
    const max = 10000000;
    const min = 1346;

    this.reportNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getAll_reports() {

    this.displayReport = !this.displayReport;
    this.displayReport = false;
    this.displayAll = true;

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'responseType': 'application/json' })
    };
    this.url = 'http://localhost:8080/cash/cashier-assignment/all-ca/';
    this.http.get(this.url, httpOptions)
      .subscribe((response) => {
        const obj = response;
        this.allReports = obj;

        console.log(this.allReports);

      },
        (err) => {
          this.err_msg = 'Server unreachable | Check if ts running ' + err;
          console.error(this.err_msg);
        }
        , () => this.sums());


  }

  // bgn. processing for "when no input"


  sums() {

    // this.branchName = this.receipts[0].branch_name;

    // this.totalBranch = this.receipts.reduce(function (accumulator, currentValue)
    // { return accumulator + parseFloat(currentValue.allocated_amount) }, 0);

    this.showGroupies();
  }


  showGroupies() {
    this.groupies = _.groupBy(this.allReports, 'branch_code'); // or sort cash_office_desc

    // console.log(this.groupies);
  }
  // end. processing for "when no input"
  sort_value(x: any) {
    return _.groupBy(x, 'cash_office_code');
  }

  sort_value_Pay(x: any) {
    return _.groupBy(x, 'pay_method_code');
  }
  sort_value_Cashiers(x: any) {
    return _.groupBy(x, 'cashier_code');
  }

  sort_value_Applications(x: any) {


    return _.groupBy(x, 'app_code');

  }


  onSubmit() {

    this.displayAll = !this.displayAll;
    const x: number = this.cashierInput.get('branchCode').value.length;
    const y: number = this.cashierInput.get('cashOfficeCode').value.length;

    if (y < 1) {

      console.log('Please Complete all fields');
      this.displayReport = !this.displayReport;
      // show container for the results
    } else {

      this.getPaymentMethods();
      this.getApplication();
      this.getCashiers();
      this.displayReport = true;
      // this.cashierInput.disabled;
    }

  }
}

import { Component, NgModule, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as _ from 'underscore'; /// npm install underscore

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
  // selector: 'app-user-management',
  templateUrl: './cashier-assignment.component.html'
})
export class CashierAssignmentComponent implements OnInit {


  cashierInput = new FormGroup({
    branchCode: new FormControl('', Validators.required),
    cashOfficeCode: new FormControl('', Validators.required),

  });
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
  url: any;


  constructor(private http: HttpClient) { }

  displayAll = false;
  displayReport = false;
  currentDate = new Date();
  error_message = false;
  DisplayPrint = false;

  // Get Branch Codes
  ngOnInit() {

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
          this.err_msg = 'Server unreachable | Check if ts running |  available branch codes not retrieved';
          this.error_message = true;
          this.displayReport = false;
        });
  }

  // Get Cash Office Codes for the Corresponding Branch Codes
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

        this.err_msg = 'No Cash Office Codes';
        this.error_message = true;
        this.displayReport = false;
      });

  }

  ExitReport() {
    this.displayReport = false;
    this.displayAll = false;
    this.cashierInput.reset();
    this.DisplayPrint = false;
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
        this.paymentMethod = obj;
        this.branchName = this.paymentMethod[0].branch_name;
        this.cashOfficeDesc = this.paymentMethod[0].cash_office_desc;

      }
        , (err) => {
          this.err_msg = 'Could not reach Server, Payment Methods = Null!! ';
          this.error_message = true;
        });

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
      }
        , (err) => {
          this.err_msg = 'Server unreachable | Check if ts running ' + err;
          this.error_message = true;

        });
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
          this.err_msg = 'Server unreachable | Check if ts running ';
          this.error_message = true;
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
          this.err_msg = 'Server unreachable | Check if ts running ';
          this.error_message = true;
        });



  }

  randomInt() {
    const max = 10000000;
    const min = 1346;

    this.reportNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getAll_reports() {

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'responseType': 'application/json' })
    };
    this.url = 'http://localhost:8080/cash/cashier-assignment/all-ca/';
    this.http.get(this.url, httpOptions)
      .subscribe((response) => {
        const obj = response;
        this.allReports = obj;
        this.displayReport = false;
        this.displayAll = true;
        this.DisplayPrint = true;
      },
        (err) => {
          this.err_msg = 'Server unreachable | Check if ts running ';
          this.error_message = true;
          this.displayReport = false;
          this.displayAll = false;
          this.DisplayPrint = false;
        }
        , () => this.sums());
  }

  // bgn. processing for "when no input"


  sums() {
    this.showGroupies();
  }


  showGroupies() {
    this.groupies = _.groupBy(this.allReports, 'branch_code'); // or sort cash_office_desc
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

    this.displayAll = false;
    this.getPaymentMethods();
    this.getApplication();
    this.getCashiers();
    this.displayReport = true;
    this.DisplayPrint = true;
    this.cashierInput.reset();
  }
  printWindow(divName) {

    const innerContents = document.getElementById(divName).innerHTML;
    // open a popup window to draw your html
    const popup = window.open('', '_blank', 'width=600,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
    popup.document.open();
    // embed your css file and CDN css file into head, embed html content into body
    popup.document.write('<html><head><link rel="stylesheet" type="text/css" href="style.css" /><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" /></head><body onload="window.print()">' + innerContents + '</html>');
    popup.document.close();
  }

}


import { Component, NgModule } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { apiURL } from '../../_nav'; // dbg
// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

@NgModule({
  imports: [
    FormControl,
    FormGroup, 
    FormsModule,
    ReactiveFormsModule,
    Validators]
})

@Component({
  templateUrl: 'cash-officeactivity.component.html'
})


 export class cashofficeactivityComponent {

 
  activity: FormGroup;
  activityDetails :any;
  // constructor(private http: HttpClient) {
  //   this.activity = new FormGroup(
  //     {
  //       activityId: new FormControl('',Validators.required),
  //       CFCode: new FormControl('',Validators.required),
  //       BCode: new FormControl('',Validators.required),
  //       RDate: new FormControl('',Validators.required)
  //     }
  //   )
  // }




  ngOnInit() {
    // let obs = this.http.get(apiURL+'/activity');
    // obs.subscribe(response => {
    //   console.log(response);
    //   this.activityDetails =response;
    // }
    // );
  }
  
  
  displayReport = false ;

  toggleDisplayReport(){
    this.displayReport = !this.displayReport ; // false
  }
}
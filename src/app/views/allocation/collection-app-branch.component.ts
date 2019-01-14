import { Component, NgModule } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'; 

@NgModule({
  imports: [
    FormControl,
    FormGroup, 
    FormsModule,
    ReactiveFormsModule,
    Validators]
})

@Component({
  templateUrl: 'collection-app-branch.component.html'
})
export class CollectionAppBranchComponent {

  branchCode = new FormControl('', Validators.required) ;

  viewBranchReport(){
    console.log('Branch Code: ' + this.branchCode.value) ;
  }
}

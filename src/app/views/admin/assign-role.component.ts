// Assign Role - Admin Module 

import { Component, NgModule } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@NgModule({
  imports: [
    FormControl,
    FormGroup,
    FormsModule,
    ReactiveFormsModule
  ]
})

@Component({
  templateUrl: 'assign-role.component.html'
})
export class AssignRoleComponent {

  roleInput = new FormGroup({
    roleID: new FormControl('', Validators.required),
    roleDesc: new FormControl('', Validators.required)
  }) ;

  // Array to hold dynamic data - Current Roles
  currentRoles = [
    {roleID: "role_adm_cash", roleName: "Admin Authority for Cash Office"},
    {roleID: "role_adm_cash", roleName: "Admin Authority for Paypoint"},
    {roleID: "role_adm_grp", roleName: "Admin Authority for Groups"}
  ] ;

  save(){}

  find(){}

  assignRole(){}

  clear(){
    this.roleInput.reset() ;
  }

  exit(){
    // Re-direct to app landing page
    window.location.href = "http://localhost:4200/#/dashboard" ;
  }

}

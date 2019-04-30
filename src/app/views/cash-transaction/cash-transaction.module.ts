import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// import { ButtonsComponent } from './buttons.component';

// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// CashTransaction Routing
import { CashTransactionRoutingModule } from './cash-transaction-routing.module';
import { cashofficeactivityComponent } from './cash-officeactivity.component';
import { cashofficeactivity3Component } from './cash-officeactivity3.component';

// Cash Office - ADMIN Module
import { AssignRoleComponent } from './assign-role.component';
import { GroupMasterComponent } from './group-master.component';
import { PageAccessComponent } from './page-access.component' ;
import { ResetPasswordComponent } from './reset-password.component' ;
import { UserManagementComponent } from './user-management.component';
import { AppComponent } from './app/app.component' ;

// import { GroupMasterService } from './group-master.service'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    CashTransactionRoutingModule,
    BsDropdownModule.forRoot(),
    FormsModule, ReactiveFormsModule
    , HttpClientModule
  ],
  declarations: [

    // GroupMasterService,

    cashofficeactivityComponent,
    cashofficeactivity3Component,

    // ButtonsComponent,
    AssignRoleComponent,
    GroupMasterComponent,
    PageAccessComponent,
    ResetPasswordComponent,
    UserManagementComponent,
    AppComponent
  ]
})
export class CashTransactionModule { }

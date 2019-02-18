import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// CashOffice Transactions Routing 
import { TransactionsRoutingModule } from './transactions-routing.module';

import { CashierAssignmentComponent } from './cashier-assignment.component';

@NgModule({
  declarations: [
    CashierAssignmentComponent
  ],
  imports: [
    BsDropdownModule.forRoot(),
    CommonModule,
    FormsModule,
    NgModule,
    ReactiveFormsModule,
    TransactionsRoutingModule
  ]
})
export class TransactionsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { QueryReceiptComponent } from './query-receipt.component' ;
import { CashOfficeTransactionRoutingModule } from './cash-office-transaction-routing.module';

@NgModule({
  declarations: [
    FormsModule,
    ReactiveFormsModule,
    QueryReceiptComponent
  ],
  imports: [
    CommonModule,
    CashOfficeTransactionRoutingModule
  ]
})
export class CashOfficeTransactionModule { }

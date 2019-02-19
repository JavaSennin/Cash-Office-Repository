import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { queryReceiptComponent } from './query-receipt.component' ;
import { CashOfficeTransactionRoutingModule } from './cash-office-transaction-routing.module';
// Collapse Component
import { CollapseModule } from 'ngx-bootstrap/collapse';


@NgModule({
  declarations: [
   
    queryReceiptComponent,
 
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CashOfficeTransactionRoutingModule,
    CollapseModule.forRoot()
    
  ]
})
export class CashOfficeTransactionModule { }

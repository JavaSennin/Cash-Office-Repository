import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { PaypointReportsRoutingModule } from './paypoint-reports-routing.module';

import { OversandUndersComponent } from './oversandunders.component' ;
import { rejectionsComponent } from './rejections.component' ;
import { UnspecifiedBankComponent } from './unspecified-bank.component' ;
import { UnspecifiedGsoesoComponent } from './unspecified-gsoeso.component' ;
import { BankStatementComponent } from './bank-statement..component' ;

// custom pipe
// import { MyFilterPipe } from './my-filter-pipe.component' ;

@NgModule({
  declarations: [
    OversandUndersComponent,
    rejectionsComponent,
    UnspecifiedBankComponent,
    UnspecifiedGsoesoComponent,
    BankStatementComponent
    // ,    MyFilterPipe
  ],

  imports: [
    PaypointReportsRoutingModule,
    CommonModule,
    BsDropdownModule.forRoot(),
    FormsModule, ReactiveFormsModule
  ]
})
export class PaypointReportsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { PaypointReportsRoutingModule } from './paypoint-reports-routing.module';

import { OversandUndersComponent } from './oversandunders.component' ;
import { UnspecifiedBankComponent } from './unspecified-bank.component' ;
import { UnspecifiedGsoesoComponent } from './unspecified-gsoeso.component' ;

@NgModule({
  declarations: [
    OversandUndersComponent,
    UnspecifiedBankComponent,
    UnspecifiedGsoesoComponent
  ],

  imports: [
    PaypointReportsRoutingModule,
    CommonModule,
    BsDropdownModule.forRoot(),
    FormsModule, ReactiveFormsModule
  ]
})
export class PaypointReportsModule { }

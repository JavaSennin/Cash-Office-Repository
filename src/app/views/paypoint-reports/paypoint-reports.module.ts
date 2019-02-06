import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// import { ButtonsComponent } from './buttons.component';

// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { PaypointReportsRoutingModule } from './paypoint-reports-routing.module';

import { OversandUndersComponent } from './oversandunders.component' ;

@NgModule({
  declarations: [OversandUndersComponent],
  imports: [
    PaypointReportsRoutingModule,
    CommonModule,
    BsDropdownModule.forRoot(),
    FormsModule, ReactiveFormsModule
  ]
})
export class PaypointReportsModule { }

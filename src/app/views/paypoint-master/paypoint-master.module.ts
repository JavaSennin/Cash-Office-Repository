import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DftaComponent } from './dfta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PaypointMasterRoutingModule } from './paypoint-master-routing.module';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
@NgModule({
  declarations: [DftaComponent],
  imports: [
    CommonModule,
    PaypointMasterRoutingModule,
    BsDropdownModule.forRoot(),
    FormsModule, ReactiveFormsModule
  ]
})
export class PaypointMasterModule { }

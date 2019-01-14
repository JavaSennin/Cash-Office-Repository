import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// import { ButtonsComponent } from './buttons.component';

// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// Admin Routing
import { AllocationRoutingModule } from './allocation-routing.module';

// Cash Office - CASH OFFICE REPORTS Module
import { CashierAssignmentComponent } from './electronic.component';
import { CollectionAppBranchComponent } from './collection-app-branch.component';
import { CollectionAppDetailComponent } from './collection-app-detail.component';
import { CollectionAppSummaryComponent } from './collection-app-summary.component';
import { DepositSlipComponent } from './deposit-slip.component' ;
import { ReceiptListingComponent } from './receipt-listing.component' ;
import { ReprintReceiptComponent } from './reprint-receipt.component' ;

@NgModule({
  imports: [
    CommonModule,
    AllocationRoutingModule,
    BsDropdownModule.forRoot(),
    FormsModule, ReactiveFormsModule
  ],
  declarations: [
    CashierAssignmentComponent,
    CollectionAppBranchComponent,
    CollectionAppDetailComponent,
    CollectionAppSummaryComponent,
    DepositSlipComponent,
    ReceiptListingComponent,
    ReprintReceiptComponent
  ]
})
export class AllocationModule { }

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// import { ButtonsComponent } from './buttons.component';

// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// Admin Routing
import { CashOfficeReportsRoutingModule } from './cash-office-reports-routing.module';

// Cash Office - CASH OFFICE REPORTS Module
import { CashierAssignmentComponent } from './cashier-assignment.component';
import { CollectionAppBranchComponent } from './collection-app-branch.component';
import { CollectionAppDetailComponent } from './collection-app-detail.component';
import { CollectionAppSummaryComponent } from './collection-app-summary.component';
import { ReceiptListingComponent } from './receipt-listing.component' ;

@NgModule({
  imports: [
    CommonModule,
    CashOfficeReportsRoutingModule,
    BsDropdownModule.forRoot(),
    FormsModule
  ],
  declarations: [
    CashierAssignmentComponent,
    CollectionAppBranchComponent,
    CollectionAppDetailComponent,
    CollectionAppSummaryComponent,
    ReceiptListingComponent
  ]
})
export class CashOfficeReportsModule { }

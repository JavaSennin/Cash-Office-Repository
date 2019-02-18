import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { CashierAssignmentComponent } from './cashier-assignment.component';

const routes: Routes = [
  {
    path: '',
    data: { title: 'CashOffice Transactions' } ,

    children: [
      { // Placeholder Child
        path: 'cashier-assignment',
        component: CashierAssignmentComponent,
        data: {
          title: 'Cashier Assignment'
        }        
      },
      {
        path: '**',
        redirectTo: '' /// dbg. TO-DO 404: Page Not Found component.
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionsRoutingModule {}  
  
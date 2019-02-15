import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QueryReceiptComponent } from './query-receipt.component' ;

const routes: Routes = [
  {
    path: '',
    data: { title: 'CashOffice Transactions' } ,

    children: [
      {
        path: 'query-receipt',
        component: QueryReceiptComponent,
        data: {
          title: 'Query Receipts'
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
export class CashOfficeTransactionRoutingModule {}  

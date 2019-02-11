import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OversandUndersComponent } from './oversandunders.component' ;
import { rejectionsComponent } from './rejections.component' ;
import { UnspecifiedBankComponent } from './unspecified-bank.component';
import { UnspecifiedGsoesoComponent } from './unspecified-gsoeso.component' ;
import { BankStatementComponent } from './bank-statement.component' ;
import { ManualAdjustmentComponent } from './manual-adjustment.component' ;
import { StatementAllocationComponent } from './statement-allocation.component' ;

const routes: Routes = [
  {
    path: '',
    // component: PaypointReportsModule, 
    data: { title: 'PayPoint Reports' } ,

    children: [
      {
        path: 'oversandunders',
        component:OversandUndersComponent,
        data: {
          title: 'Overs and Unders'
        }
      },
      {
        path: 'rejections',
        component:rejectionsComponent,
        data: {
          title: 'Rejections'
        }
      },
      {
        path: 'unspecified-bank',
        component: UnspecifiedBankComponent,
        data: {
          title: 'Unspecified Bank'
        }
      },
      {
        path: 'unspecified-gsoeso',
        component: UnspecifiedGsoesoComponent,
        data: {
          title: 'Unspecified GSO-ESO'
        }
      },
      {
        path: 'bank-statement',
        component: BankStatementComponent,
        data: {
          title: 'Bank Statement'
        }
      },
      {
        path: 'manual-adjustment',
        component: ManualAdjustmentComponent,
        data: {
          title: 'Manual Adjustment'
        }
      },
      {
        path: 'statement-allocation',
        component: StatementAllocationComponent,
        data: {
          title: 'Bank Statement Allocation'
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
export class PaypointReportsRoutingModule {}  
  
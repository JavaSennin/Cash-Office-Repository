import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OversandUndersComponent } from './oversandunders.component' ;
import { UnspecifiedBankComponent } from './unspecified-bank.component';

const routes: Routes = [
  {
    path: '',
    // component: PaypointMasterModule, 
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
        path: 'unspecified-bank',
        component: UnspecifiedBankComponent,
        data: {
          title: 'Unspecified Bank'
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
  
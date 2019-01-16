import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DftaComponent } from './dfta.component' ;



const routes: Routes = [
  {
    path: '',
    // component: CashOfficeReportsComponent, 
    data: { title: 'PayPoint Master' } ,

    children: [
      {
        path: 'dfta',
        component:DftaComponent,
        data: {
          title: 'Debit File Template'
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
export class PaypointMasterRoutingModule {}  
  
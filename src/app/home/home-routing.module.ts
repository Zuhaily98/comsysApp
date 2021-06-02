import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'create',
        loadChildren: () => import('../complaints/create/create.module').then( m => m.CreatePageModule)
      },
      {
        path: 'search',
        loadChildren: () => import('../complaints/search/search.module').then( m => m.SearchPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}

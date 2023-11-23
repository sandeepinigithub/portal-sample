import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalComponent } from './portal.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: PortalComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalRoutingModule { }

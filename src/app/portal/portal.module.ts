import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalRoutingModule } from './portal-routing.module';
import { PortalComponent } from './portal.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    PortalComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PortalRoutingModule
  ]
})
export class PortalModule { }

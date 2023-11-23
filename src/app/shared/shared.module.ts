import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderPortalComponent } from './header-portal/header-portal.component';



@NgModule({
  declarations: [
    NavigationComponent,
    SidebarComponent,
    HeaderPortalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavigationComponent,
  ]
})
export class SharedModule { }

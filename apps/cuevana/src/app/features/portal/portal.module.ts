import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalComponent } from './portal.component';
import { PortalHomeComponent } from './views/home/home.component';
import { PortalRoutingModule } from './portal-routing.module';
import { PortalCategoryComponent } from './views/category/category.component';

@NgModule({
  imports: [
    CommonModule,
    PortalRoutingModule
  ],
  declarations: [
    PortalComponent,
    PortalHomeComponent,
    PortalCategoryComponent
  ]
})
export class PortalModule { }

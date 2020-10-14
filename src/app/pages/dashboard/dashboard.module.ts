import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { MainComponent } from './main/main.component';
import { DefaultComponent } from './default/default.component';


@NgModule({
  declarations: [
  MainComponent,
  DefaultComponent
],
  imports: [
    FormsModule,
    CommonModule,
    DashboardRoutingModule
  ],
  providers: [
  ]
})
export class DashboardModule { }

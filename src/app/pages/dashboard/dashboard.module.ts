import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardHeaderComponent, DashboardSidebarComponent } from 'src/app/components';

import { MainComponent } from './main/main.component';
import { DefaultComponent } from './default/default.component';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { BootstrapCarouselComponent, OwlCarouselComponent } from './carousel';


@NgModule({
  declarations: [
    MainComponent,
    DefaultComponent,
    DashboardHeaderComponent,
    DashboardSidebarComponent,
    LoginComponent,
    ForgetPasswordComponent,
    BootstrapCarouselComponent,
    OwlCarouselComponent
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

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { EditorModule } from '@tinymce/tinymce-angular';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardHeaderComponent, DashboardSidebarComponent } from 'src/app/components';

import { MainComponent } from './main/main.component';
import { DefaultComponent } from './default/default.component';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { BootstrapCarouselComponent, OwlCarouselComponent } from './carousel';
import { IconsComponent } from './icons/icons.component';
import { CkeditorComponent, TinymceComponent } from './editors';
import { ChartJsComponent } from './charts/chart-js/chart-js.component';


@NgModule({
  declarations: [
    MainComponent,
    DefaultComponent,
    DashboardHeaderComponent,
    DashboardSidebarComponent,
    LoginComponent,
    ForgetPasswordComponent,
    BootstrapCarouselComponent,
    OwlCarouselComponent,
    IconsComponent,
    CkeditorComponent,
    TinymceComponent,
    ChartJsComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    EditorModule,
    CKEditorModule,
    DashboardRoutingModule
  ],
  providers: [
  ]
})
export class DashboardModule { }

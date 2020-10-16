import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { BootstrapCarouselComponent, OwlCarouselComponent } from './carousel';
import { IconsComponent } from './icons/icons.component';
import { CkeditorComponent, TinymceComponent } from './editors';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'forget-password', component: ForgetPasswordComponent },
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', redirectTo: 'default', pathMatch: 'full' },
      { path: 'default', component: DefaultComponent },
      { path: 'bootstrap-carousel', component: BootstrapCarouselComponent },
      { path: 'owl-carousel', component: OwlCarouselComponent },
      { path: 'icons', component: IconsComponent },
      { path: 'ckeditor', component: CkeditorComponent },
      { path: 'tinymce', component: TinymceComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
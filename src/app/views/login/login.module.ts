import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import { LoginFormComponent } from '../../components/common/login-form/login-form.component'
import { RegisterFormComponent } from '../../components/common/register-form/register-form.component'
import { LoginComponent } from './login.component'
@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    LoginFormComponent,
    RegisterFormComponent,
    LoginComponent
  ]
})
export class LoginModule { }

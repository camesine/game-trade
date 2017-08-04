import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms'

import { LoginFormComponent } from '../../components/common/login-form/login-form.component'
import { RegisterFormComponent } from '../../components/common/register-form/register-form.component'
import { LoginComponent } from './login.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    LoginFormComponent,
    RegisterFormComponent,
    LoginComponent
  ]
})
export class LoginModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MainModule } from './views/main/main.module'
import { LoginModule } from './views/login/login.module'
import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MainModule,
    LoginModule,
    BrowserModule,
    ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

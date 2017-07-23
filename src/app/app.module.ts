import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";

import { MainModule } from './views/main/main.module'
import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    MainModule,
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

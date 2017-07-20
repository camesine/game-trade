import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component'
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { AsideComponent } from '../../components/aside/aside.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule
  ],
  declarations: [
    MainComponent,
    HeaderComponent,
    FooterComponent,
    AsideComponent
  ]
})
export class MainModule { }

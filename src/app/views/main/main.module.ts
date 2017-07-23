import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component'
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from "@angular/router";

import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { AsideComponent } from '../../components/aside/aside.component';
import { CartComponent } from '../../components/cart/cart.component';
import { InventoryComponent } from '../../components/inventory/inventory.component'
import { FilterComponent } from '../../components/filter/filter.component'
import { HomeComponent } from '../../components/home/home.component'
import { PostComponent } from '../../components/post/post.component'

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule
  ],
  declarations: [
    MainComponent,
    HeaderComponent,
    FooterComponent,
    AsideComponent,
    CartComponent,
    InventoryComponent,
    FilterComponent,
    HomeComponent,
    PostComponent
  ]
})
export class MainModule { }

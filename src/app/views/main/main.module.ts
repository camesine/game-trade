import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component'
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from "@angular/router";

import { HeaderComponent } from '../../components/common/header/header.component';
import { FooterComponent } from '../../components/common/footer/footer.component';
import { AsideComponent } from '../../components/common/aside/aside.component';
import { CartComponent } from '../../components/common/cart/cart.component';
import { InventoryComponent } from '../../components/layouts/inventory/inventory.component'
import { FilterComponent } from '../../components/common/filter/filter.component'
import { HomeComponent } from '../../components/layouts/home/home.component'
import { PostComponent } from '../../components/common/post/post.component'
import { DetailComponent } from '../../components/layouts/detail/detail.component'

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
    PostComponent,
    DetailComponent
  ]
})
export class MainModule { }

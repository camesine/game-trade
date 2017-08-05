import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component'
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from "@angular/router";

import { HeaderComponent } from '../../components/common/header/header.component';
import { AsideComponent } from '../../components/common/aside/aside.component';
import { CartComponent } from '../../components/common/cart/cart.component';
import { InventoryComponent } from '../../components/layouts/inventory/inventory.component'
import { FilterComponent } from '../../components/common/filter/filter.component'
import { HomeComponent } from '../../components/layouts/home/home.component'
import { PostComponent } from '../../components/common/post/post.component'
import { DetailComponent } from '../../components/layouts/detail/detail.component'
import { ProfileComponent } from '../../components/layouts/profile/profile.component'
import { DetailProfileComponent } from '../../components/common/detail-profile/detail-profile.component'
import { ProfileFormComponent } from '../../components/layouts/profile-form/profile-form.component'
import { ActivitesComponent } from '../../components/common/activites/activites.component'

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule
  ],
  declarations: [
    MainComponent,
    HeaderComponent,
    AsideComponent,
    CartComponent,
    InventoryComponent,
    FilterComponent,
    HomeComponent,
    PostComponent,
    DetailComponent,
    ProfileComponent,
    DetailProfileComponent,
    ActivitesComponent,
    ProfileFormComponent
  ]
})
export class MainModule { }

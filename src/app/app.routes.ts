import { Routes } from "@angular/router";
import { MainComponent } from './views/main/main.component'
import { InventoryComponent } from './components/layouts/inventory/inventory.component'
import { HomeComponent } from './components/layouts/home/home.component'
import { DetailComponent } from './components/layouts/detail/detail.component'

export const ROUTES : Routes = [
    {
        path:'',
        component: MainComponent,
        children: [
            {
                path: '',
                component: HomeComponent
            }
        ]
    },
    {
        path:'inventory',
        component: MainComponent,
        children: [
            {
                path: '',
                component: InventoryComponent
            }
        ]
    },
    {
        path:'detail',
        component: MainComponent,
        children: [
            {
                path: '',
                component: DetailComponent
            }
        ]
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch:'full'
    },
    {
        path:'**',
        redirectTo:'home'
    }
] 
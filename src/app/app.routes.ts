import { Routes } from "@angular/router";
import { MainComponent } from './views/main/main.component'
import { InventoryComponent } from './components/inventory/inventory.component'
import { HomeComponent } from './components/home/home.component'

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
        path: '',
        redirectTo: 'home',
        pathMatch:'full'
    },
    {
        path:'**',
        redirectTo:'home'
    }
] 
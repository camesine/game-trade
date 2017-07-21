import { Routes } from "@angular/router";
import { MainComponent } from './views/main/main.component'
import { InventoryComponent } from './components/inventory/inventory.component'

export const ROUTES : Routes = [

    {
        path: '',
        redirectTo: '',
        pathMatch:'full'
    },
    {
        path:'**',
        redirectTo:''
    },
    {
        path:'',
        component: MainComponent,
        children: [
            {
                path: '',
                component: MainComponent
            }
        ]
    }
] 
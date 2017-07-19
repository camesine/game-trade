import { Routes } from "@angular/router";
import { HomeComponent } from './views/home/home.component'

export const ROUTES : Routes = [

    {
        path: '',
        redirectTo: 'starterview',
        pathMatch:'full'
    },
    {
        path:'**',
        redirectTo:'starterview'
    },
    {
        path:'starterview',
        component: HomeComponent
    }
] 
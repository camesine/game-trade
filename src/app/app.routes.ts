import { Routes } from "@angular/router";
import { MainComponent } from './views/main/main.component'

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
        component: MainComponent
    }
] 
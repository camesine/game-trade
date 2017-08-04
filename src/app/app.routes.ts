import { Routes } from "@angular/router";
import { RouterModule } from "@angular/router";
import { MainComponent } from './views/main/main.component'
import { InventoryComponent } from './components/layouts/inventory/inventory.component'
import { HomeComponent } from './components/layouts/home/home.component'
import { DetailComponent } from './components/layouts/detail/detail.component'
import { ProfileComponent } from './components/layouts/profile/profile.component'
import { LoginComponent } from './views/login/login.component'
import { LoginFormComponent } from './components/common/login-form/login-form.component'
import { RegisterFormComponent } from './components/common/register-form/register-form.component'

export const ROUTES = RouterModule.forRoot([
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
        path:'profile',
        component: MainComponent,
        children: [
            {
                path: '',
                component: ProfileComponent
            }
        ]
    },
    {
        path:'login',
        component: LoginComponent,
        children: [
            {
                path: '',
                component: LoginFormComponent
            }
        ]
    },
    {
        path:'register',
        component: LoginComponent,
        children: [
            {
                path: '',
                component: RegisterFormComponent
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
] )

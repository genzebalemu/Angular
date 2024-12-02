import { Routes } from '@angular/router';
import { SignupComponent } from './components/auth/signup/signup.component';
import { LoginComponent } from './components/auth/login/login.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:"login", component:LoginComponent},
    {path:"signup", component:SignupComponent} 
];


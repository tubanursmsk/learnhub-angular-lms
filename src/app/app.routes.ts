import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';

export const routes: Routes = [ // Routes kavramını export(dışa açılmasını sağlar) etmezsek app.congig içinde import edemeyiz
    { path: "", component: Login}, 
    { path:"register", component: Register}, 
];

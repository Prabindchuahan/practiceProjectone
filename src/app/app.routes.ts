import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
HomeComponent
export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: HomeComponent }, // ✅ Add this route
  { path: '', redirectTo: 'login', pathMatch: 'full' } // Redirect to login by default
];

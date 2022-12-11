import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableauComponent } from './tableau/tableau.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { AppComponent } from './app.component';
import { ModifierComponent } from './modifier/modifier.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from "./shared/auth.guard";






const routes: Routes = [
  
        {path: '', redirectTo : '/cpt3', pathMatch : 'full'},
        { path: '', redirectTo: '/login', pathMatch: 'full' },
        { path: 'login', component: LoginComponent },
        { path: 'inscription', component: InscriptionComponent },
        { path: 'user-profile/:id', component: UserProfileComponent, canActivate: [AuthGuard] },
        {
          path : 'cpt1', component : TableauComponent
        },
        {
          path : 'cpt2', component : HeaderComponent
        },
        {
          path : 'cpt4', component : LoginComponent
        },
        {
          path : 'cpt5', component : AppComponent
        },
        
        {
          path : 'cpt3', component : InscriptionComponent
        },
        { path: 'cpt6/:id', component: ModifierComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }


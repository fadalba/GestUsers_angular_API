import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableauComponent } from './tableau/tableau.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  
  {path: '', redirectTo : '/cpt3', pathMatch : 'full'},
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
        }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableauComponent } from './tableau/tableau.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { AppComponent } from './app.component';
import { ModifierComponent } from './modifier/modifier.component';
import { AuthGuard } from './shared/auth.guard';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TabUsersComponent } from './tab-users/tab-users.component';
import { ListArchivesComponent } from './list-archives/list-archives.component';




const routes: Routes = [
  
  {path: '', redirectTo : '/cpt4', pathMatch : 'full'},
        { path : 'cpt1', component : TableauComponent},
        { path : 'cpt8', component : ListArchivesComponent},
        { path : 'cpt7', component : TabUsersComponent},
        { path : 'cpt2', component : HeaderComponent},
        { path : 'cpt4', component : LoginComponent},
        { path : 'cpt5', component : AppComponent},
        { path : 'cpt3', component : InscriptionComponent},
        { path: 'cpt6/:id', component: ModifierComponent },
        { path: 'user-profile/:id',component: UserProfileComponent,
          canActivate: [AuthGuard],
        },


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* import { HttpClient } from '@angular/common/http'; */
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { TableauComponent } from './tableau/tableau.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ModifierComponent } from './modifier/modifier.component';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { PaginationComponent } from './pagination/pagination.component';
import { HeaderAcceuilComponent } from './header-acceuil/header-acceuil.component';
import { ListArchivesComponent } from './list-archives/list-archives.component';

import { AppComponent } from './app.component';

import { ModifierComponent } from './modifier/modifier.component';


import { PaginationComponent } from './pagination/pagination.component';




@NgModule({
  declarations: [

    AppComponent,
    TableauComponent,
    InscriptionComponent,
    ModifierComponent,
    HeaderComponent,
    LoginComponent,

    PaginationComponent,
    HeaderAcceuilComponent,
    ModifierComponent,

    ModifierComponent
  

    PaginationComponent,


  ],
  imports: [

    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        {path: '', redirectTo : '/cpt3', pathMatch : 'full'},
        {
          path : 'cpt1', component : TableauComponent
        },
        {
          path : 'cpt2', component : ListArchivesComponent
        },
        {
          path : 'cpt3', component : InscriptionComponent
        },
        {
          path : 'cpt4', component : LoginComponent
        },
        {
          path : 'cpt5', component : AppComponent
        },

        {
          path : 'cpt6', component : ModifierComponent
        }

      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }






import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
/* import { HttpClient } from '@angular/common/http'; */
import { ListArchivesComponent } from './list-archives/list-archives.component';
import { TabUsersComponent } from './tab-users/tab-users.component';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { HeaderAcceuilComponent } from './header-acceuil/header-acceuil.component';
// import { ListArchivesComponent } from './list-archives/list-archives.component';
// import { AppComponent } from './app.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter'; /* recherche */
import { AuthInterceptor } from './shared/authconfig.interceptor';
// import { TabUsersComponent } from './tab-users/tab-users.component';
import { UserProfileComponent } from './user-profile/user-profile.component';




@NgModule({
  declarations: [
    UserProfileComponent,
    AppComponent,
    ListArchivesComponent,
    TableauComponent,
    InscriptionComponent,
    ModifierComponent,
    HeaderComponent,
    LoginComponent,
    /* PaginationComponent, */
    HeaderAcceuilComponent,
    ModifierComponent,
    ModifierComponent,
    TabUsersComponent,
    ListArchivesComponent,
    TableauComponent,
    UserProfileComponent


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
    // MdbRadioModule,
    // MdbRangeModule,
    // MdbRippleModule,
    // MdbScrollspyModule,
    // MdbTabsModule,
    // MdbTooltipModule,
    MdbValidationModule,
    FormsModule,
    ReactiveFormsModule,
    // BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    // AngularFileUploaderModule

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }






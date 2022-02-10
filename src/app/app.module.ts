import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
//import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StronaGlownaComponent } from './strona-glowna/strona-glowna.component';
import { GeneratorComponent } from './generator/generator.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { MatDividerModule, MatIconModule, MatMenuModule, MatSidenavModule, MatToolbarModule, MatListModule, MatButtonModule, MatCardModule, MatInputModule, MatTableModule, MatCheckboxModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule, MatStepperModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { FlexLayoutModule, StyleUtils, StylesheetMap, LayoutStyleBuilder, MediaMarshaller, LayoutAlignStyleBuilder, LayoutGapStyleBuilder, FlexStyleBuilder } from '@angular/flex-layout';
import { ɵMatchMedia, BreakPointRegistry, PrintHook } from '@angular/flex-layout/core';
import { ProfilComponent } from './profil/profil.component';
import { PracownicyComponent } from './pracownicy/pracownicy.component';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule, NgxMatNativeDateModule } from '@angular-material-components/datetime-picker';
import { GeneratorContainerComponent } from './generator-container/generator-container.component';
import { KierowcyGeneratorComponent } from './kierowcy-generator/kierowcy-generator.component';
import { MojeTrasyComponent } from './moje-trasy/moje-trasy.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserService } from './shared/user.service';
import { ToastrModule } from 'ngx-toastr';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ApplicationComponent } from './application/application.component';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
    //NavMenuComponent,
    StronaGlownaComponent,
    GeneratorComponent,
    HeaderComponent,
    SidebarComponent,
    ProfilComponent,
    GeneratorContainerComponent,
    KierowcyGeneratorComponent,
    MojeTrasyComponent,
    LoginComponent,
    RegisterComponent,
    PracownicyComponent,
    ForbiddenComponent,
    ApplicationComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    MatStepperModule,
    HttpClientModule,
    MatSelectModule,
    MatSortModule,
    MatPaginatorModule,
    FormsModule,
    NgxMatNativeDateModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      {
        path: 'application', component: ApplicationComponent,  children: [
          { path: 'home', component: StronaGlownaComponent,  },
          { path: 'generator', component: GeneratorContainerComponent,  data: { permittedRoles: ['Admin', 'Logistician'] } },
          { path: 'pracownicy', component: PracownicyComponent, data: { permittedRoles: ['Admin'] } },
          { path: 'profil', component: ProfilComponent,  data: { permittedRoles: ['Admin', 'Driver', 'Logistician'] } },
          { path: 'mojeTrasy', component: MojeTrasyComponent,  data: { permittedRoles: ['Admin', 'Driver', 'Logistician'] } },
          { path: 'forbidden', component: ForbiddenComponent },
        ]
      },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },

    ]),
    BrowserAnimationsModule,
    MatSidenavModule,
    MatDividerModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,//AIzaSyDPbBeyVPKFlbQ5ubei7A6Q1o_Q02KQUYs
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    FlexLayoutModule,
    AgmDirectionModule,
    ToastrModule.forRoot({
      progressBar: true
    }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAPGqbW8VP99sTovydmWmMNtpRjb6a977g'
    }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDPbBeyVPKFlbQ5ubei7A6Q1o_Q02KQUYs',
      libraries: ["places"]
    })
  ],
  providers: [
    PrintHook,
    StyleUtils,
    StyleSheet,
    StylesheetMap,
    LayoutAlignStyleBuilder,
    LayoutStyleBuilder,
    LayoutGapStyleBuilder,
    FlexStyleBuilder,
    MediaMarshaller,
    ɵMatchMedia,
    BreakPointRegistry,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

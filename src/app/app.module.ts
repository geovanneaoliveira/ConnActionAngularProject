import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { CadastroComponentComponent } from './cadastro-component/cadastro-component.component';
import { CustomPasswordInputComponent } from './custom-password-input/custom-password-input.component';
import { CustomSubmitComponent } from './custom-submit/custom-submit.component';
import { CustomTextInputComponent } from './custom-text-input/custom-text-input.component';
import { SerUmVoluntarioComponent } from './ser-um-voluntario/ser-um-voluntario.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BasicAuthInterceptor } from './helpers/basic-auth.interceptor';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    CadastroComponentComponent,
    CustomPasswordInputComponent,
    CustomSubmitComponent,
    CustomTextInputComponent,
    SerUmVoluntarioComponent,
    LandingPageComponent,
    QuemSomosComponent,
    SouUmaOngComponent,
    CadastroOngComponentComponent,
    DashboardComponent,
    EventodivComponent,
    MenuComponentComponent,
    AtualizarPerfilComponent,
    ContribuicaoComponent,
    SetTagsComponent,
    CriarEventoComponent,
    CriarOrgComponent,
    CriarContribuicaoComponent,
    MinhasOrgsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

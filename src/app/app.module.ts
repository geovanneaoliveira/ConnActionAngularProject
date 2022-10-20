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
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { FazerContribuicaoComponent } from './fazer-contribuicao/fazer-contribuicao.component';
import { VagasOrganizacaoComponent } from './vagas-organizacao/vagas-organizacao.component';
import { TesteComponent } from './teste/teste.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    CadastroComponentComponent,
    CustomPasswordInputComponent,
    CustomSubmitComponent,
    CustomTextInputComponent,
    LandingPageComponent,
    NavbarComponent,
    QuemSomosComponent,
    FazerContribuicaoComponent,
    VagasOrganizacaoComponent,
    TesteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

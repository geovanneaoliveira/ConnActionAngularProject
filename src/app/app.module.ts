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
import { VagasOrganizacaoComponent } from './vagas-organizacao/vagas-organizacao.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BasicAuthInterceptor } from './helpers/basic-auth.interceptor';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { SouUmaOngComponent } from './sou-uma-ong/sou-uma-ong.component';
import { CadastroOngComponentComponent } from './cadastro-ong-component/cadastro-ong-component.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventodivComponent } from './eventodiv/eventodiv.component';
import { SetTagsComponent } from './set-tags/set-tags.component';
import { CriarEventoComponent } from './criar-evento/criar-evento.component';
import { AtualizarCadastroComponent } from './atualizar-cadastro/atualizar-cadastro.component';
import { CriarOrgComponent } from './criar-org/criar-org.component';
import { CriarContribuicaoComponent } from './criar-contribuicao/criar-contribuicao.component';
import { MinhasOrgsComponent } from './minhas-orgs/minhas-orgs.component';
import { SetTagsEventoComponent } from './set-tags-evento/set-tags-evento.component';
import { MenuComponent } from './menu/menu.component';
import { MeusEventosComponent } from './meus-eventos/meus-eventos.component';
import { MinhasContribuicoesComponent } from './minhas-contribuicoes/minhas-contribuicoes.component';
import { HistoricoComponent } from './historico/historico.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { SupervisorComponent } from './supervisor/supervisor.component';
import { OrgSupervisorComponent } from './org-supervisor/org-supervisor.component';
import { FooterComponent } from './footer/footer.component';

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
    VagasOrganizacaoComponent,
    SouUmaOngComponent,
    CadastroOngComponentComponent,
    DashboardComponent,
    EventodivComponent,
    MenuComponent,
    SetTagsComponent,
    CriarEventoComponent,
    AtualizarCadastroComponent,
    CriarEventoComponent,
    CriarOrgComponent,
    CriarContribuicaoComponent,
    MinhasOrgsComponent,
    SetTagsEventoComponent,
    MeusEventosComponent,
    MinhasContribuicoesComponent,
    HistoricoComponent,
    SideMenuComponent,
    SupervisorComponent,
    OrgSupervisorComponent,
    FooterComponent
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

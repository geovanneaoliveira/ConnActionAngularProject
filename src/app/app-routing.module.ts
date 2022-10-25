import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtualizarCadastroComponent } from './atualizar-cadastro/atualizar-cadastro.component';
import { CadastroComponentComponent } from './cadastro-component/cadastro-component.component';
import { CriarContribuicaoComponent } from './criar-contribuicao/criar-contribuicao.component';
import { CriarEventoComponent } from './criar-evento/criar-evento.component';
import { VagasOrganizacaoComponent } from './vagas-organizacao/vagas-organizacao.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { SerUmVoluntarioComponent } from './ser-um-voluntario/ser-um-voluntario.component';
import { SetTagsComponent } from './set-tags/set-tags.component';
import { SouUmaOngComponent } from './sou-uma-ong/sou-uma-ong.component';
import { MenuComponent } from './menu/menu.component';
import { SupervisorComponent } from './supervisor/supervisor.component';
import { AuthGuard } from './helpers/auth.guard';
import { OrgSupervisorComponent } from './org-supervisor/org-supervisor.component';
import { EventoSupervisorComponent } from './evento-supervisor/evento-supervisor.component';
import { VagaEventosComponent } from './vaga-eventos/vaga-eventos.component';
import { EventoInfosComponent } from './evento-infos/evento-infos.component';
import { OrgInfosComponent } from './org-infos/org-infos.component';
import { MeuPerfilComponent } from './meu-perfil/meu-perfil.component';


const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'login',
    component: LoginComponentComponent
  },
  {
    path: 'cadastrar',
    component: CadastroComponentComponent
  },
  {
    path: 'quemsomos',
    component: QuemSomosComponent
  },
  {
    path: 'voluntariado',
    component: SerUmVoluntarioComponent
  },
  {
    path: 'ong',
    component: SouUmaOngComponent
  },
  {
    path: 'menu',
    component: MenuComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'criarEvento',
    component: CriarEventoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'tags',
    component: SetTagsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'criarEvento',
    component: CriarEventoComponent
  },
  {
    path: 'vagas-organizacao',
    component: VagasOrganizacaoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'atualizarCadastro',
    component: AtualizarCadastroComponent
  },
  {
    path: 'vagas-organizacao',
    component: VagasOrganizacaoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'atualizarCadastro',
    component: AtualizarCadastroComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'supervisor',
    component: SupervisorComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'orgsupervisor/:id',
    component: OrgSupervisorComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'eventoorgsupervisor/:id',
    component: EventoSupervisorComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'perfil',
    component: MeuPerfilComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'contribuicao',
    component: CriarContribuicaoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'vagaseventos',
    component: VagaEventosComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'eventoinfos/:id',
    component: EventoInfosComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'orginfos/:id',
    component: OrgInfosComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

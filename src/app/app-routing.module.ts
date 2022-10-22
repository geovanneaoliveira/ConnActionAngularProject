import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CadastroComponentComponent } from './cadastro-component/cadastro-component.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './helpers/auth.guard';
import { AuthenticationService } from './helpers/auth.service';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { MenuComponentComponent } from './menu-component/menu-component.component';
import { MinhasOrgsComponent } from './minhas-orgs/minhas-orgs.component';
import { SerUmVoluntarioComponent } from './ser-um-voluntario/ser-um-voluntario.component';
import { SetTagsComponent } from './set-tags/set-tags.component';
import { SouUmaOngComponent } from './sou-uma-ong/sou-uma-ong.component';

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
    path: 'quem-somos',
    component:QuemSomosComponent
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
    path: 'dashboard',
    component: DashboardComponent
  },

  {
    path: 'menu',
    component: SetTagsComponent
  },
  {
    path: 'minhasorgs',
    component: MinhasOrgsComponent
  },
  {
    path: 'settags',
    component: SetTagsComponent
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

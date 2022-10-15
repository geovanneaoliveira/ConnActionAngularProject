import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CadastroComponentComponent } from './cadastro-component/cadastro-component.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { OiComponent } from './oi/oi.component';

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
    path: 'oi',
    component: OiComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

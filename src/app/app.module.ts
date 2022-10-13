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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    CadastroComponentComponent,
    CustomPasswordInputComponent,
    CustomSubmitComponent,
    CustomTextInputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent {

  loginForm;

  constructor(private formBuilder:FormBuilder){
    this.loginForm = this.formBuilder.group({
      login: [''],
      senha: [''],
    });
  }

  onSubmit() {
    console.log(this.loginForm.value);
  }

}

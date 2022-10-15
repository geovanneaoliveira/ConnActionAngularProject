import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../helpers/auth.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent {

  loginForm: FormGroup = this.formBuilder.group({
    login: ['', Validators.required],
    senha: ['', Validators.required]
  });
  loading = false;
  submitted = false;
  returnUrl: string = this.route.snapshot.queryParams['returnUrl'];
  error = '';

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService: AuthenticationService
  ) { 
      // redirect to home if already logged in
      if (this.authenticationService.userValue) { 
          this.router.navigate(['/cadastrar']);
      }
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.loginForm!.invalid) {
          return;
      }
      this.loading = true;
      this.authenticationService.login(this.loginForm.get('login')?.value, this.loginForm.get('senha')?.value)
          .pipe(first())
          .subscribe(
              data => {
                  this.router.navigate([this.returnUrl ?? '']);
              },
              error => {
                  this.error = error;
                  this.loading = false;
              });
  }

}

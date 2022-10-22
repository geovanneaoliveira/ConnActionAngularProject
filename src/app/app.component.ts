import { Component, OnInit } from '@angular/core';
import { Route, Router, Routes } from '@angular/router';
import { AuthenticationService } from './helpers/auth.service';
import { User } from './types/types';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ConnActionAngularProject';

  user: User | null = null;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.user.subscribe(x => this.user = x);
    }
  ngOnInit(): void {
    console.log(this.user?.id);
  }

    logout() {
        this.authenticationService.logout();
    }
}

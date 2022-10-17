import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthenticationService } from '../helpers/auth.service';
import { LoginComponentComponent } from '../login-component/login-component.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private auth:AuthenticationService) { }

  ngOnInit(): void {
  }

  logout = () => {
    this.auth.logout();
  }

}

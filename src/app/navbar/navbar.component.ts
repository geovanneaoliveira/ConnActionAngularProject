import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoginComponentComponent } from '../login-component/login-component.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() logoutemitter: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  logout = () => {
    this.logoutemitter.emit(null);
  }

}

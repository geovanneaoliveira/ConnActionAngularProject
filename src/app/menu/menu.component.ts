import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../helpers/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
  name: String;
  
  constructor(private auth:AuthenticationService) {
    this.name = this.auth.userValue.nome;
    console.log(this.auth.userValue);
  }

  ngOnInit(): void { }

}

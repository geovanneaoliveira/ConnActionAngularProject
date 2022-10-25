import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../helpers/auth.service';
import { User } from '../types/types';

@Component({
  selector: 'app-meu-perfil',
  templateUrl: './meu-perfil.component.html',
  styleUrls: ['./meu-perfil.component.css']
})
export class MeuPerfilComponent implements OnInit {

  user: User;

  constructor(private auth:AuthenticationService) {
    this.user = this.auth.userValue;
    console.log(this.auth.userValue);
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-fazer-contribuicao',
  templateUrl: './fazer-contribuicao.component.html',
  styleUrls: ['./fazer-contribuicao.component.css']
})
export class FazerContribuicaoComponent implements OnInit {


  constructor(){
  }

 
  name = new FormControl('');
  ngOnInit(): void {
  }

}

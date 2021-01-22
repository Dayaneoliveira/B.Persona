import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../model/UserLogin';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  userLogin: UserLogin = new UserLogin() 

  constructor() { }

  ngOnInit(): void {
  }

}

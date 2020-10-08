import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {Observable} from 'rxjs';
import {Auth} from '../../model/Auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user$: Observable<Auth>;
  userName: string;
  userPassword: string;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.user$ = this.authService.userLogged;
  }

  doConnection($event: MouseEvent): void {
    this.authService.login(this.userName, this.userPassword);
  }

  doDeconnection($event: MouseEvent): void {
    this.authService.logout();
    this.userName = '';
    this.userPassword = '';
  }
}

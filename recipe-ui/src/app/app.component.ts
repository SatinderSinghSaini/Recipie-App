import { Component, OnInit } from '@angular/core';
import { User } from './models/User';
import { UserService } from './services/user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'recipe-ui';
  public user: any;
  constructor(private userSvc: UserService) {
    this.userSvc.userSubjectObv.subscribe((value: any) => {
      const userData = sessionStorage.getItem('userData')!;
      if (userData) {
        this.user = JSON.parse(userData);
      } else {
        this.user = null;
      }
    });
  }
  ngOnInit(): void {}
}

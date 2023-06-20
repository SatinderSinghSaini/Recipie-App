import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent implements OnInit {
  constructor(private userSvc: UserService, private routerSvc: Router) {}
  ngOnInit(): void {
    sessionStorage.setItem('userData', '');
    sessionStorage.setItem('XSRF-TOKEN', '');
    this.userSvc.userChanged('');
    this.routerSvc.navigate(['/']);
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  RequiredValidator,
  Validators,
} from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { getCookie } from 'typescript-cookie';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public userForm!: FormGroup;
  private user: User;
  constructor(
    private loginSvc: LoginService,
    private userSvc: UserService,
    private routerSvc: Router
  ) {
    this.user = new User();
  }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm() {
    this.userForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  public onSubmit() {
    this.loginSvc.login(this.userForm.value).subscribe(
      (response) => {
        this.user = response.body;
        this.user.authStatus = true;
        let xsrf = getCookie('XSRF-TOKEN')!;
        window.sessionStorage.setItem('XSRF-TOKEN', xsrf);
        window.sessionStorage.setItem('userData', JSON.stringify(this.user));
        this.userSvc.userChanged('');
        this.routerSvc.navigate(['/home']);
      },
      (error) => console.log(error)
    );
  }
}

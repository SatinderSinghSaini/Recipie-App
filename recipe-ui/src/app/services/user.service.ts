import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService implements OnInit {
  private userSubject = new BehaviorSubject(null);
  public userSubjectObv = this.userSubject.asObservable();

  constructor() {}
  ngOnInit(): void {}

  userChanged(value: any) {
    this.userSubject.next(value);
  }
}

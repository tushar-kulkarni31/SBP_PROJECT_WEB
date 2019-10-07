import { User } from './user.model';
import { Subject } from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';

const BACKEND_URL = environment.apiURL;

@Injectable({providedIn: 'root'})
export class UserService {
  private users: User[] = [];
  private userUpdated = new Subject<User[]>();

  constructor(private http: HttpClient) {}

  getUsers() {
    this.http.get<{ status: string, data: any }>(BACKEND_URL + 'users')
      .subscribe(response => {
        this.users = response.data;
        this.userUpdated.next([...this.users]);
      });
  }

  getUser(userId: number) {
    return this.http
    .get<{_id: number, taskName: string, parentId: string, startDate: string, endDate: string, priority: number, taskId: number, __v: any}>
    (BACKEND_URL + 'users/' + userId);
  }

  addUser(user: User) {
    this.http.post<{message: string}>(BACKEND_URL + 'users', user)
      .subscribe((resData) => {
        this.users.push(user);
        this.userUpdated.next([...this.users]);
      });
  }

  updateUser(user: User) {
    this.http.put(BACKEND_URL + 'users/' + user.userId, user)
      .subscribe(response => {
        const updateUsers = [...this.users];
        const oldTaskIndex = updateUsers.findIndex(t => t.userId === user.userId);
        updateUsers[oldTaskIndex] = user;
        this.users = updateUsers;
        this.userUpdated.next([...this.users]);
      });
  }

  deleteUser(userId: number) {
    this.http.delete(BACKEND_URL + 'users/' + userId)
    .subscribe(() => {
      const updateUsers = this.users.filter(user => user.userId !== userId);
      this.users = updateUsers;
      this.userUpdated.next([...this.users]);
    });
  }

  getTaskUpdateListener() {
    return this.userUpdated.asObservable();
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import {} from '../../environments/environment';
import { environment } from '../../environments/environment';

/*Non serve dato che stiamo lavorando con json-server
export interface User {
  id: number;
  name: string;
  lastName: string;
  email: string;
  fiscalCode: string;
  phone: string;
  province: string;
}*/

@Injectable({
  providedIn: 'root',
})
export class UserService {
  /*Non serve dato che stiamo lavorando con json-server
  userUpdated = new Subject<User>();
  userCreated = new Subject<User>();
  userDeleted = new Subject<User>();
  */

  apiurl = environment.APIURL;
  construct(http: HttpClient) {
    
  }

  getUsers(): User[] {
    return this.users;
  }

  getUser(id: number): User | null {
    const idx = this.users.findIndex((ele) => ele.id === id);

    if (idx === -1) {
      return null;
    }
    return { ...this.users[idx] };
  }

  constructor() {
    console.log('user service created');
  }

  deleteUser(user: User): void {
    const idx = this.users.findIndex((ele) => ele.id === user.id);
    this.users.splice(idx, 1);
  }

  updateUser(user: User): boolean {
    const idx = this.users.findIndex((ele) => ele.id === user.id);

    if (idx === -1) {
      return false;
    }

    this.users[idx] = { ...user };

    return true;
  }

  createUser(user: User): boolean {
    const idx = this.users.findIndex(
      (ele) => ele.fiscalCode === user.fiscalCode
    );

    if (idx !== -1) {
      alert('Fiscal Code already exist !!');
      return false;
    }

    user.id = this.users.length + 1;
    this.users.push(user);

    return true;
  }
}

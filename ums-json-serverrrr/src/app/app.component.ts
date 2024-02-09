import { Subscription } from 'rxjs';
import { User, UserService } from './users/user.service';
import { Component, OnDestroy, inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnDestroy {
  //userCol = 12;
  //formCol = 0;
  title = 'User Managment System';
  //selectedUser: User | null = null;
  userService = inject(UserService);
  //users = this.userService.getUsers();
  userUpdatedSub: Subscription;
  userDeletedSub: Subscription;
  userCreatedSub: Subscription;

  constructor() {
    this.userUpdatedSub = this.userService.userUpdated.subscribe((user) => {
      //this.onUserUpdate(user);
    });

    this.userDeletedSub = this.userService.userDeleted.subscribe((user) => {
      this.onDeleteUser(user);
    });

    this.userCreatedSub = this.userService.userCreated.subscribe((user) => {
      this.onUserCreate(user);
    });
  }

  ngOnDestroy(): void {
    this.userUpdatedSub.unsubscribe();
    this.userDeletedSub.unsubscribe();
    console.log('app destroyed');
  }

  onDeleteUser(user: User): void {
    this.userService.deleteUser(user);
    //this.users = this.userService.getUsers();
  }

  /*showUserForm(user: User): void {
    if (this.selectedUser != null) {
      this.selectedUser = null;
      this.userCol = 12;
      this.formCol = 0;
    } else {
      this.selectedUser = { ...user }; //clonare un oggetto, oppure si può con Object.assign({}, user)
      this.userCol = 8;
      this.formCol = 4;
    }
  }*/

  onUserUpdate(user: User): void {
    this.userService.updateUser(user);
    //this.users = this.userService.getUsers();
    //this.selectedUser = null; //toglie le colonne del form dopo il "submit"
  }


  onUserCreate(user: User): void {
    this.userService.createUser(user);
    //this.users = this.userService.getUsers();
    //this.selectedUser = null; //toglie le colonne del form dopo il "submit"
  }
}

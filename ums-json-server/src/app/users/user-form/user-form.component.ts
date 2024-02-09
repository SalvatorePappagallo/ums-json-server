import { UserService } from '../../Services/user.service';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  inject,
} from '@angular/core';
import { User } from '../../Services/user.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css',
})
export class UserFormComponent implements OnInit {
  user: User | null = null;
  originalUser: Partial<User> = {};
  @Output() updateUser = new EventEmitter<User>();

  //UserService = inject(UserService); O usiamo l'injector oppure il costruttore, come sotto
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.originalUser = { ...this.user };
    this.route.paramMap.subscribe((p) => {
      const segment = p.get('id');
      if (!segment) {
        this.initUser();
        return;
      }
      const id = Number(segment);
      this.user = this.userService.getUser(id);
    });
  }

  resetForm(f: NgForm) {
    f.resetForm(this.originalUser);
  }

  onSubmitForm(f: NgForm) {
    const id = this.user?.id ?? 0;
    const userUpdated = { ...f.value, id: id };

    if (!id) {
      this.userService.userCreated.next(userUpdated);
    } else {
      this.userService.userUpdated.next(userUpdated);
    }

    //this.userService.updateUser(userUpdated);
    this.router.navigateByUrl('/users');
    //f.reset(); //resetta il form dopo il "submit"
  }

  private initUser() {
    this.user = {
      id: 0,
      name: '',
      fiscalCode: '',
      lastName: '',
      email: '',
      phone: '',
      province: '',
    };
  }
}

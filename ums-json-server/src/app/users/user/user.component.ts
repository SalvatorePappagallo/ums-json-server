import { Component, Input } from '@angular/core';
import { User } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() user: User

  @Input({
    required: true,
    transform: (v: number) => v + 1
  }) counter = 0;

  constructor() {
    this.user = {
      id:-1,
      name: '',
      lastName: '',
      email: '',
      fiscalCode: '',
      phone: '',
      province: ''
    }
  }
}

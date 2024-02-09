import { Router } from '@angular/router';
import { User, UserService } from '../../Services/user.service';
import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';

/* Per il servizio è aggiunta nel file del servizio
interface User{
  name: string;
  lastName: string;
  email: string;
  fiscalCode: string;
  phone: string;
  province: string;
}*/

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent{
 //implements OnInit {
  /* SE VOLESSIMO UTILIZZARE UN SERVIZIO I DATI VENGONO SPOSTATI NEL SERVIZIO
     IN QUESTO CASO, IL FILE DEL SERVIZIO E' "user.service.ts"
  users: User[] = [
    { name: "Mario", lastName: "Rossi", fiscalCode: "RSSMRA80A01H501U", phone: "1234567890", province: "Roma", email: "mario.rossi@example.com" },
    { name: "Luigi", lastName: "Bianchi", fiscalCode: "BNCLGU80A01H501V", phone: "0987654321", province: "Milano", email: "luigi.bianchi@example.com" },
    { name: "Giulia", lastName: "Verdi", fiscalCode: "VRDGIL80A01H501K", phone: "2345678901", province: "Torino", email: "giulia.verdi@example.com" },
    { name: "Elena", lastName: "Gialli", fiscalCode: "GLLELN80A01H501S", phone: "3456789012", province: "Napoli", email: "elena.gialli@example.com" },
    { name: "Marco", lastName: "Neri", fiscalCode: "NRIMRC80A01H501N", phone: "4567890123", province: "Palermo", email: "marco.neri@example.com" },
    { name: "Alessia", lastName: "Marrone", fiscalCode: "MRRALS80A01H501Q", phone: "5678901234", province: "Genova", email: "alessia.marrone@example.com" },
    { name: "Andrea", lastName: "Celeste", fiscalCode: "CLSTND80A01H501Z", phone: "6789012345", province: "Bologna", email: "andrea.celeste@example.com" },
    { name: "Sara", lastName: "Rosa", fiscalCode: "RSASRA80A01H501X", phone: "7890123456", province: "Firenze", email: "sara.rosa@example.com" },
    { name: "Paolo", lastName: "Viola", fiscalCode: "VLAPAO80A01H501C", phone: "8901234567", province: "Venezia", email: "paolo.viola@example.com" },
    { name: "Simone", lastName: "Arancio", fiscalCode: "ARNSMN80A01H501M", phone: "9012345678", province: "Catania", email: "simone.arancio@example.com" },
    { name: "Chiara", lastName: "Azzurra", fiscalCode: "AZZCHR80A01H501R", phone: "0123456789", province: "Bari", email: "chiara.azzurra@example.com" }
  ];*/

  users_list: User [] = [];
  /* Non serve farlo così se si usa il "constructor" come sotto
  userService = inject(UserService);
  router = inject(Router);*/
  constructor(private userService: UserService, private router: Router){

  }

  //@Output() userDeleted = new EventEmitter<User>();
  //@Output() userToBeUpdate = new EventEmitter<User>();


  trackUser(index: number, user: User): string {
    return user.email;
  }

  /*COMMENTATO POICHE' FACCIAMO TUTTO NEL PADRE "app.component.ts"
  constructor(private userService: UserService) {
    this.users_list = this.getUser();

  }

  private getUser(): User [] {
    return this.userService.getUser();
  }
*/
  ngOnInit(): void {
    this.users_list = this.userService.getUsers();
  }

  updateUser(user: User) {
    //this.router.navigate(['users', user.id]); Utilizziamo il linkaggio da HTML
    }

  deleteUser(user: User): void {
    this.userService.userDeleted.next(user);
    //this.userDeleted.emit(user);
  }
}

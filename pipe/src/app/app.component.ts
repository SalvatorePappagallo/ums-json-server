import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pipe configuration';
  fullName = 'Mario Rossi';
  birthDate = '01-01-1991';
  salary = 10474.22;
}

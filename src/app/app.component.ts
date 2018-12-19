import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  headerText = 'Создание своей директивы';
  current = 1;

  items = [1, 2, 3, 4, 5];

  onClick(number: number) {
    this.current = number;
  }
}

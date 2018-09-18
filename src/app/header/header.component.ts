import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  title = 'HN Feed';
  subtitle = 'We <3 hacker news!';
  
  constructor() { }

}

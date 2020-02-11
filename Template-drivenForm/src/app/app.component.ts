import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
topics = ['Angular', 'React', 'veu'];
userModel = new User('', 'rob@test.com', 97474783, '', 'morning', true);
}

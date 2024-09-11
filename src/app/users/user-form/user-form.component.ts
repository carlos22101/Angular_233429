import { Component } from '@angular/core';
import { IUser } from '../iuser';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {
user: IUser={
  id : 0,
  name :"",
  username :"",
  phone : "",
  website :""
}
}

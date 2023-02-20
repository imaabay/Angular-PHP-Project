import { Component, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  @Output() onSubmitUser = new EventEmitter();
  name: string = '';
  age: string = '';
  occupation: string = '';

  responseName: string = '';
  responseAge: string = '';
  responseOcc: string = '';

  constructor(private userService: UserService) {}

  onSubmitForm() {
    //Adding basic validation
    if (!this.name) {
      alert('Please add name');
      return;
    }
    if (!this.age) {
      alert('Please add age');
      return;
    }
    if (!this.occupation) {
      alert('Please add occupation');
      return;
    }

    const newUser = {
      name: this.name,
      age: this.age,
      occupation: this.occupation,
    };

    this.userService.addUser(newUser).subscribe((users) => {
      this.responseName = users.name;
      this.responseAge = users.age;
      this.responseOcc = users.occupation;
    });
  }
}

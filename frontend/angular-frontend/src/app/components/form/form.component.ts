import { Component, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  @Output() onSubmitUser = new EventEmitter();
  firstNumber: number | undefined;
  secondNumber: number | undefined;
  operation: string = '';

  result: number | undefined;

  constructor(private userService: UserService) {}

  onSubmitForm() {
    //Adding basic validation
    if (this.secondNumber == 0 && this.operation === '/') {
      alert('Division by zero error');
      return;
    }

    if (!this.firstNumber) {
      alert('Please enter number');
      return;
    }
    if (!this.secondNumber) {
      alert('Please enter number');
      return;
    }
    if (!this.operation) {
      alert('Please enter operation');
      return;
    }

    const method = {
      firstNumber: this.firstNumber,
      secondNumber: this.secondNumber,
      operation: this.operation,
    };

    this.userService
      .fetchCalculation(JSON.stringify(method))
      .subscribe((res) => {
        this.result = parseFloat(res);
      });

    //Clear form data
    this.firstNumber = undefined;
    this.secondNumber = undefined;
    this.operation = '';
  }
}

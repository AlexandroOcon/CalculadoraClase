import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: string = 'Calculadora básica';
  result: number = 0;

  calculate(operator: string, number1: string, number2: string): void {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);

    switch (operator) {
      case '+':
        this.result = num1 + num2;
        break;
      case '-':
        this.result = num1 - num2;
        break;
      case '*':
        this.result = num1 * num2;
        break;
      case '/':
        this.result = num1 /num2;
        break;
    }
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  display = '0';
  firstValue: number | null = null;
  action: string | null = null;

  numClick(val: { toString: () => string; }) {
    if (this.display === '0') {
      this.display = val.toString();
    } else {
      this.display = `${this.display}${val}`;
    }
  }

  oper(action: string | null) {
    this.firstValue = parseFloat(this.display);
    this.action = action;
    this.display = ' ';
  }

  calculate() {
    
    const a:any = this.firstValue;
    const b = parseFloat(this.display);

    let result:any;
    if (this.action === 'm') {
      result = a * b;
    }
    else if (this.action === 'd') {
      result = a / b;
    }
    else if (this.action === 'a') {
      result = a + b;
    }
    else if (this.action === 's') {
      result = a - b;
    }

    this.firstValue = result;
    this.display = result.toString();
  }


}

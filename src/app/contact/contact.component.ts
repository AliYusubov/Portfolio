import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})

export class ContactComponent {
  input1Focused: boolean = false;
  input2Focused: boolean = false;
  input3Focused: boolean = false;
  input4Focused: boolean = false;

  onFocus(inputNumber: number) {
    this.input1Focused = inputNumber === 1;
    this.input2Focused = inputNumber === 2;
    this.input3Focused = inputNumber === 3;
    this.input4Focused = inputNumber === 4;
  }

  onBlur() {
    this.input1Focused = false;
    this.input2Focused = false;
    this.input3Focused = false;
    this.input4Focused = false;
  }
}

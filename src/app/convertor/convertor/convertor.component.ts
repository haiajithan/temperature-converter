import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-convertor',
  templateUrl: './convertor.component.html',
  styleUrls: ['./convertor.component.css']
})
export class ConvertorComponent implements OnInit {
  title = 'Temperature Converter';
  firstChoiceValue: number;
  secondChoiceValue: number;
  firstChoice: any;
  secondChoice: any;

  form: FormGroup = new FormGroup({
    Fahrenheit: new FormControl(''),
    celcius: new FormControl(''),

  });
  constructor() { }


  ngOnInit(): void {

  }

  onFirstChange($event) {
    this.firstChoice = $event;

  }

  onSecondChange($event) {
    this.secondChoice = $event;
    if (this.secondChoiceValue !== undefined && this.firstChoiceValue !== undefined) {
      if (this.firstChoice === 'Fahrenheit' && this.secondChoice === 'Celsius') {
        this.secondChoiceValue = 5 / 9 * (this.firstChoiceValue - 32);
      } else if (this.firstChoice === 'Celsius' && this.secondChoice === 'Fahrenheit') {
        this.secondChoiceValue = (this.firstChoiceValue * 9 / 5) + 32;
      } else if (this.firstChoice === 'Celsius' && this.secondChoice === 'Kelvin') {
        this.secondChoiceValue = (this.firstChoiceValue + 273);
      } else if (this.firstChoice === 'Kelvin' && this.secondChoice === 'Celsius') {
        this.secondChoiceValue = (this.firstChoiceValue - 273);
      } else if (this.firstChoice === 'Fahrenheit' && this.secondChoice === 'Kelvin') {
        this.secondChoiceValue = (this.firstChoiceValue - 32) * 5 / 9 + 273.15;
      } else if (this.firstChoice === 'Kelvin' && this.secondChoice === 'Fahrenheit') {
        this.secondChoiceValue = (this.firstChoiceValue - 273) * 9 / 5 + 32;
      } else if (this.firstChoice === 'Kelvin' && this.secondChoice === 'Kelvin') {
        alert('Choose different temperature ');
      } else if (this.firstChoice === 'Fahrenheit' && this.secondChoice === 'Fahrenheit') {
        alert('Choose different temperature ');
      } else if (this.firstChoice === 'Celsius' && this.secondChoice === 'Celsius') {
        alert('Choose different temperature ');
      }
    }else{
      alert('Field cannot be empty');
    }


  }
}

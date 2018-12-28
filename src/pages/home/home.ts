import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  rolls = [];
  temp = [];
  constructor(public navCtrl: NavController) {

  }

  roll(int): void{
    var result = Math.floor(Math.random() * int) + 1;
    this.rolls.unshift(result);
    alert(this.rolls);
  }

  display(): void{
    this.temp = this.rolls;

  }

}

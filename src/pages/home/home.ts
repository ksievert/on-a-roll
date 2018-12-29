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
    document.getElementById("20rolls").innerHTML = "";
    var result = Math.floor(Math.random() * int) + 1;
    this.rolls.unshift(result);
    if(this.rolls.length > 5) {
      this.rolls.pop();
    }
    //alert(this.rolls);
    document.getElementById("20rolls").innerHTML += this.rolls;
  }

  display(): void{
    this.temp = this.rolls;

  }

}

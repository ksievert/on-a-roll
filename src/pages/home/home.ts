import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // d20, d12, d10, d8, d6, d4
  d20 = [];
  d12 = [];
  d10 = [];
  d8 = [];
  d6 = [];
  d4 = [];

  rolls = [this.d4, this.d6, this.d8, this.d10, this.d12, this.d20];
  temp = [];
  constructor(public navCtrl: NavController) {

  }

  roll(int): void{
    document.getElementById(int + "first").innerHTML = "";
    document.getElementById(int + "rolls").innerHTML = "";

    var result = Math.floor(Math.random() * int) + 1;
    this.rolls[this.getIndex(int)].unshift(result);
    if(this.rolls[this.getIndex(int)].length > 5) {
      this.rolls[this.getIndex(int)].pop();
    }

    document.getElementById(int + "first").innerHTML += this.rolls[this.getIndex(int)][0];
    for(var i = 1; i < this.rolls[this.getIndex(int)].length; i++) {
      document.getElementById(int + "rolls").innerHTML += ", " + this.rolls[this.getIndex(int)][i];
    }
  }

  getIndex(int) {
    if(int == 4) {
      return 0;
    }
    if(int == 6) {
      return 1;
    }
    if(int == 8) {
      return 2;
    }
    if(int == 10) {
      return 3;
    }
    if(int == 12) {
      return 4;
    }
    else {
      return 5;
    }
  }

  clear(int): void {
    document.getElementById(int + "first").innerHTML = "";
    document.getElementById(int + "rolls").innerHTML = "";
    this.rolls[this.getIndex(int)] = [];
  }

  clearAll(): void {
    document.getElementById("20first").innerHTML = "";
    document.getElementById("20rolls").innerHTML = "";

    document.getElementById("12first").innerHTML = "";
    document.getElementById("12rolls").innerHTML = "";

    document.getElementById("10first").innerHTML = "";
    document.getElementById("10rolls").innerHTML = "";

    document.getElementById("8first").innerHTML = "";
    document.getElementById("8rolls").innerHTML = "";

    document.getElementById("6first").innerHTML = "";
    document.getElementById("6rolls").innerHTML = "";

    document.getElementById("4first").innerHTML = "";
    document.getElementById("4rolls").innerHTML = "";
    for(var i = 0; i < this.rolls.length; i++) {
      this.rolls[i] = [];
    }
  }

}

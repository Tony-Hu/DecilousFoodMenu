import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hw2';
  result: string;
  public chickenWing = 0;
  public beef = 0;
  public soySauce = 0;
  public tomato = 0;
  public spice1 = 0;
  public spice2 = 0;
  showResult = false;

  outputResult() {
    this.showResult = true;
    this.result = '';
    let total;
    total = this.chickenWing + this.beef + this.soySauce + this.tomato + this.spice1 + this.spice2;
    if (total === 0) {
      this.result = '一锅空气';
    } else if (this.chickenWing > 0 && this.beef > 0) {
      if (this.chickenWing + this.beef > 2) {
        this.result = '一大锅';
      }
      this.result += '黑暗料理';
    } else if (this.beef > 0 && this.soySauce > 0) {
      if (this.beef > 4) {
        this.result += '一大盆';
      } else if (this.beef > 2) {
        this.result += '一大锅';
      }
      if (this.spice2 + this.spice1 > 0) {
        this.result += '超香的';
      }
      if (this.tomato > 0) {
        this.result += '西红柿';
      }
      this.result += '牛腩';
    } else if (this.chickenWing > 0) {
      this.result = '一锅鸡翅';
    } else if (this.spice2 + this.spice1 > 0) {
      this.result += '一锅咖喱';
    } else {
      this.result = '黑暗料理';
    }
  }
}

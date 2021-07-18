import { Component, OnInit ,Input, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'exam';
  public start = false;
  public submit = false;
  public maths = false;
  public physics = false;
  public chemistry = false;
  public interval:any;
  public timeLeft:any = 120;
  public timeLeft_min:any = 2;
  constructor(private http : HttpClient){}

  ngOnInit(){
   
  }
  Start() {
    this.start = true;
  }
  GoToMaths(){
    this.maths = true; this.physics = false; this.chemistry = false;
  }
  GoToPhysics(){
    this.maths = false; this.physics = true; this.chemistry = false;
  }
  GoToChemistry(){
    this.maths = false; this.physics = false; this.chemistry = true;
  }
  Submit(){
    this.submit = true;
  }
  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
        this.timeLeft_min = Math.floor(this.timeLeft/60);
      } else {
        this.submit = true;
      }
    },1000)
  }
}

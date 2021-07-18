import { Component, OnInit, Input } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-chemistry',
  templateUrl: './chemistry.component.html',
  styleUrls: ['./chemistry.component.css']
})
export class ChemistryComponent implements OnInit {
  @Input() public submitted:any; 
  public questions:any = [];
  public options:any[5][4] = [[],[],[],[],[]];
  public saved:any[5] = [];
  public visited:any[5] = [];
  public marked_for_review:any[5] = [];
  public question_number = 0;
  public marks:any[5] = [];
  public maths_marks = 0;
  one!: HTMLInputElement;two! :HTMLInputElement;three!: HTMLInputElement;four!: HTMLInputElement;
  constructor(private http : HttpClient){}

  ngOnInit(){
    this.http.get('assets/chemdata.json').subscribe((data)=>{
      this.questions = data as string[];
    })
    for(let x = 0; x<5; x++) {
      this.saved[x] = false;
      this.marked_for_review[x] = false;
      this.visited[x] = false;
      this.marks[x] = 0;
      for(let y = 0; y<4; y++) {
        this.options[x][y] = false;
      }
      this.visited[0] = true;
    }
  }
  GoToNextQuestion(first_option: HTMLInputElement,second_option: HTMLInputElement,third_option: HTMLInputElement,fourth_option: HTMLInputElement) {
    if(this.question_number<4) {
      this.question_number = this.question_number + 1;
    }
    if(this.saved[this.question_number] == false){
      first_option.checked = false; first_option.value = "false";
      second_option.checked = false; second_option.value = "false";
      third_option.checked = false; third_option.value = "false";
      fourth_option.checked = false; fourth_option.value = "false";
    }
    this.visited[this.question_number] = true;
  }
  GoToPreviousQuestion(first_option: HTMLInputElement,second_option: HTMLInputElement,third_option: HTMLInputElement,fourth_option: HTMLInputElement) {
    if(this.question_number>0) {
      this.question_number = this.question_number-1;
    }
    if(this.saved[this.question_number] == false){
      first_option.checked = false; first_option.value = "false";
      second_option.checked = false; second_option.value = "false";
      third_option.checked = false; third_option.value = "false";
      fourth_option.checked = false; fourth_option.value = "false";
    }
    this.visited[this.question_number] = true;
  }
  navigate(event: any,first_option: HTMLInputElement,second_option: HTMLInputElement,third_option: HTMLInputElement,fourth_option: HTMLInputElement,multi_first_option: HTMLInputElement,multi_second_option: HTMLInputElement,multi_third_option: HTMLInputElement,multi_fourth_option: HTMLInputElement) {
    this.question_number = event.target.value - 1;
    if(this.saved[this.question_number] == false){
      first_option.checked = false; first_option.value = "false";
      second_option.checked = false; second_option.value = "false";
      third_option.checked = false; third_option.value = "false";
      fourth_option.checked = false; fourth_option.value = "false";
      multi_first_option.checked = false;
      multi_second_option.checked = false;
      multi_third_option.checked = false;
      multi_fourth_option.checked = false;
    }
    this.visited[this.question_number] = true;
  }
  deSelect(event: any,first_option: HTMLInputElement,second_option: HTMLInputElement,third_option: HTMLInputElement,fourth_option: HTMLInputElement) {
    if(event.target.value == "false"){
      for(let i = 0; i<4; i++) {
        this.options[this.question_number][i] = false;
      }
      event.target.value = "true";
      event.target.checked = true;
    }
    else if(event.target.value == "true") {
      event.target.value = "false";
      event.target.checked = false;
    }
  }
  SaveandNext(event:any,questionType:string,first_option: HTMLInputElement,second_option: HTMLInputElement,third_option: HTMLInputElement,fourth_option: HTMLInputElement){
  if(questionType == 'Single-Correct'){
    if(first_option.value == "true"){
      for(let i = 0; i<4; i++) {
        if(i == 0) {
          this.options[this.question_number][i] = true;
        }
        else {
          this.options[this.question_number][i] = false;
        }
      }
    }
    if(second_option.value == "true"){
      for(let i = 0; i<4; i++) {
        if(i == 1) {
          this.options[this.question_number][i] = true;
        }
        else {
          this.options[this.question_number][i] = false;
        }
      }
    }
    if(third_option.value == "true"){
      for(let i = 0; i<4; i++) {
        if(i == 2) {
          this.options[this.question_number][i] = true;
        }
        else {
          this.options[this.question_number][i] = false;
        }
      }
    }
    if(fourth_option.value == "true"){
      for(let i = 0; i<4; i++) {
        if(i == 3) {
          this.options[this.question_number][i] = true;
        }
        else {
          this.options[this.question_number][i] = false;
        }
      }
    }
  }
  else {
    if(first_option.checked == true){
      this.options[this.question_number][0] = true;
    }
    if(second_option.checked == true) {
      this.options[this.question_number][1] = true;
    }
    if(third_option.checked == true) {
      this.options[this.question_number][2] = true;
    }
    if(fourth_option.checked == true) {
      this.options[this.question_number][3] = true;
    }
  }
    var k = 0,l = 0;
    var x = this.marks[this.question_number];
    for(l = 0; l<4; l++){
      if(!(this.options[this.question_number][l] == 0)){
        break;
      }
    }
    if(l!=4){
      for(k = 0; k<4; k++){
        if(this.options[this.question_number][k] != this.questions[this.question_number].answers[k]){
          this.marks[this.question_number] = -1;
          break;
        }
      }
    }
    if(k == 4){
      this.marks[this.question_number] = 4;
    }
    if(x!=this.marks[this.question_number]){
      this.maths_marks = this.maths_marks + this.marks[this.question_number];
    }
    if(event.target.value == "Save")
      this.saved[this.question_number] = true;
    else
      this.marked_for_review[this.question_number] = true;
    this.GoToNextQuestion(first_option,second_option,third_option,fourth_option);
    
    }
  timeLeft: number = 60;
  interval:any;

}

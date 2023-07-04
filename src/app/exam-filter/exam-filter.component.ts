import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-exam-filter',
  templateUrl: './exam-filter.component.html',
  styleUrls: ['./exam-filter.component.scss']
})
export class ExamFilterComponent implements OnInit {
  accordionSelected: boolean = true;
  exams = [{ exam: "National Wise" }, { exam: "State Wise" }, { exam: "National Wise" }, { exam: "State Wise" },]
  myForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      useremail: this.fb.array([])
      
    });
    if(/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
      // true for mobile device
      console.log("mobile device");
      this.accordionSelected = false
    }else{
      // false for not mobile device
      console.log("not mobile device");
      this.accordionSelected = true
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-course-filter',
  templateUrl: './course-filter.component.html',
  styleUrls: ['./course-filter.component.scss']
})
export class CourseFilterComponent implements OnInit {
  accordionSelected: boolean = true;
  courses = [{ course: "B.Com" }, { course: 'BA' },{ course: "B.Sc." },{ course: 'MA' }, { course: 'M.Sc.' },
  { course: 'B.Ed' }]
  myForm: FormGroup;
  constructor(private fb: FormBuilder) { }


  ngOnInit() {
    this.myForm = this.fb.group({
      usercourse: this.fb.array([])
      
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

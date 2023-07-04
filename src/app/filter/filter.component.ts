import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  collapsed = true;
  accordionSelected: boolean = true;
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }
  emails = [{ email: "MBA/PGDM(1882)" }, { email: "B.Sc.(1882)" }, { email: "BE/B.Tech(1334)" }, { email: 'M.Sc.(1350)' },
  { email: 'BBA/BBM (1883)' }, { email: 'BA (1276)' }, { email: 'MBA/PGDM(1882)' }, { email: 'B.Sc.(1882)' }, { email: 'BBA/BBM (1883)' }]
  myForm: FormGroup;
  ngOnInit() {
    this.myForm = this.fb.group({
      useremail: this.fb.array([])
      
    });
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
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

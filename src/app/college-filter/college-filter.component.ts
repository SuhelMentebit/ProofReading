import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DomSanitizer, Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-college-filter',
  templateUrl: './college-filter.component.html',
  styleUrls: ['./college-filter.component.scss']
})
export class CollegeFilterComponent implements OnInit {
  collapsed = true;
  accordionSelected: boolean = true;
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }
  emails = [{ email: "MBA/PGDM(1882)" }, { email: "B.Sc.(1882)" }, { email: "BE/B.Tech(1334)" }, { email: 'M.Sc.(1350)' },
  { email: 'BBA/BBM (1883)' }, { email: 'BA (1276)' }, { email: 'MBA/PGDM(1882)' }, { email: 'B.Sc.(1882)' }, { email: 'BBA/BBM (1883)' }]
  myForm: FormGroup;
  constructor(private fb: FormBuilder,
    private title: Title,
    private meta: Meta,
    private sanitizer: DomSanitizer, 
    @Inject(DOCUMENT) private dom
    ) {
      let links = [
        { rel: "canonical", href: " https://www.selectyouruniversity.com/college" },
        // { rel: "alternate", href: "https://www.selectyouruniversity.com", hreflang :'en-Us'  }
      ]
      links.forEach(lik => {
        let link: HTMLLinkElement = this.dom.createElement('link');
        this.dom.head.appendChild(link);
        link.setAttribute(lik.rel, lik.href);
      });
      let metas:any =[
        { name: "title", content: "  List of Top Colleges in India" },
        { name: "description", content: " Here is the list of top colleges to study in India. Select Your University, India's leading educational consultancy. Choose your college from these top options " },
      ]
      this.title.setTitle('  List of Top Colleges in India')
      metas.forEach(element => {
        this.meta.addTag(element);
      });
     }

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

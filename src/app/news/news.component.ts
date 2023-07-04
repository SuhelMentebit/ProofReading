import { Component, OnInit,Inject } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import * as newsData from './newsData';
import { DOCUMENT } from '@angular/common';
import { DomSanitizer, Meta, Title } from '@angular/platform-browser';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  newsCategorie:any =newsData.newsCategories
  data:any =newsData.newsdata
  url: any
  currentUrl: any
  news:any
  allBlog:any =[]
  latestBlog:any=[]
  carouselOptions = {
    margin: 0,
    nav: true,
    navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 2,
        nav: true
      },
      1000: {
        items: 4,
        nav: true,
        loop: false
      },
      1500: {
        items: 4,
        nav: true,
        loop: false
      }
    }
  }
  images = [
    {
      text: "HPBOSE 10th Result 2022 Released: 87.5% Students Passed,",
      image: "../../assets/img/Blog_Main_Icons/k.png"
    },
    {
      text: "HPBOSE 10th Result 2022 Released: 87.5% Students Passed,",
      image: "../../assets/img/Blog_Main_Icons/l.png"
    },
    {
      text: "HPBOSE 10th Result 2022 Released: 87.5% Students Passed,",
      image: "../../assets/img/Blog_Main_Icons/k.png"
    },
    {
      text: "HPBOSE 10th Result 2022 Released: 87.5% Students Passed,",
      image: "../../assets/img/Blog_Main_Icons/l.png"
    },
    
  ]
  images2 = [
    {
      text: "HPBOSE 10th Result 2022 Released: 87.5% Students Passed,",
      image: "../../assets/img/Blog_Main_Icons/k.png",
      time:"7"
    },
    {
      text: "HPBOSE 10th Result 2022 Released: 87.5% Students Passed,",
      image: "../../assets/img/Blog_Main_Icons/l.png",
      time:"5"
    }
    
  ]

  //form starts here
  modalRef: BsModalRef;
  form1 = true;
  form2 = false;
  form3 = false;
  form4 = false;
  RegistrationFrom1: FormGroup;
  RegistrationFrom2: FormGroup;
  RegistrationFrom3: FormGroup;
  RegistrationFrom4: FormGroup;
  nsrNo: any
  showMsg: boolean = false;



  
  constructor(
    private title: Title,
    private meta: Meta,
    private sanitizer: DomSanitizer,
    
    public bsModalRef: BsModalRef,
    public modalService: BsModalService,
    private fb: FormBuilder,
    private http: HttpClient,
    @Inject(DOCUMENT) private dom,
    private router: Router , private api: ApiService) {
   {
      let links = [
        { rel: "canonical", href: "  https://www.selectyouruniversity.com/news" },
        // { rel: "alternate", href: "https://www.selectyouruniversity.com", hreflang :'en-Us'  }
      ]
      links.forEach(lik => {
        let link: HTMLLinkElement = this.dom.createElement('link');
        this.dom.head.appendChild(link);
        link.setAttribute(lik.rel, lik.href);
      });
      let metas:any =[
        { name: "title", content: "Latest Education News 2023: Exam, Admission, Results, Colleges" },
        { name: "description", content: "Know more about the latest exams and educational announcements in Select Your University's news section. Click here." },
      ]
      this.title.setTitle('Latest Education News 2023: Exam, Admission, Results, Colleges')
      metas.forEach(element => {
        this.meta.addTag(element);
      });
     }
   }
  

  ngOnInit() {
    this.RegistrationFrom1 = this.fb.group({
      cCandidateName: ["", Validators.required],
      cEmail: ["", [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      cMobile: ["", [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
    });

    console.log('newsData: ', newsData);
    console.log('newsCategorie: ', this.newsCategorie);
    this.data.forEach((bg:any) => {
      bg.forEach((b:any) => {
          this.allBlog.push(b)
        });
      });
     this.allBlog.sort(function(a:any, b:any) {
       // convert date object into number to resolve issue in typescript
       return  +new Date(b.date) - +new Date(a.date);
      })
      this.latestBlog=  this.allBlog.splice(1, 2)
      console.log('this.allBlog: ', this.allBlog);
      console.log('this.latestBlog: ', this.latestBlog);
  }

  get m() {
    return this.RegistrationFrom1.controls;
  }

  public submitForm1() {
    if (this.RegistrationFrom1.valid) {
      this.bsModalRef.hide();
      this.router.navigate(['/thankyou-page/.']);
      // this.form3 = false
      // this.form4 = false
    }
    let data = this.RegistrationFrom1.value
    data['refNo'] = 777
    data['cAddressLine'] = 'Na'
    data['cState'] = 'Na'
    data['cPinCode'] = "Na"
    data['cParantNo'] = 'Na'
    data['cDataFrom'] = 1
    data['AllocatedTo'] = 0
    data['CurrentStatus'] = 0
    data['cRemarks'] = this.RegistrationFrom1.value.qeducation
    data['cCountry'] = "Na"
    data['cWebsite'] = 'http://demo.mentebit.com/#/'
    data['cCoutryCode'] = "Na"
    console.log('rom1', this.RegistrationFrom1.value)
    const { cCandidateName, cEmail, cMobile } = this.RegistrationFrom1.value;
    this.http.get(`https://bizcallcrmforms.com/response.php?cCandidateName=${cCandidateName}&cEmail=${cEmail}&cMobile=${cMobile}&cCity=Na&cCourse=Na&cLinkName=https://www.selectyouruniversity.com/news&section=insertdetails`)
      .subscribe((res) => {
        console.log('res', res)
        this.nsrNo = res

      })
    console.log('form 1', this.RegistrationFrom1.value)
    console.log('form 2', this.RegistrationFrom2.value)
    console.log('form 3', this.RegistrationFrom3.value)
  }

  public back1() {
    this.form1 = true;
    this.form2 = false;
    this.form3 = false;
  }
  public back2() {
    if (this.RegistrationFrom1.valid) {
      this.form1 = false;
      this.form2 = true;
      this.form3 = false;
    }
  }
  
  makeActive(tab:any) {
    this.router.navigate(['news/' + tab])
  }

  get(item:any){
    this.router.navigate(['news/category/' + item[0].Categories + '/.'], { state: item });
  }
  routeAllBlog(){
    this.router.navigate(['news/category/all-news/.']);
  }

  public signUp = false;
  singinUp() {
    console.log('this.email: ', this.email);
    let data =
    {
      "nSrNo": 0,
      "AllocatedTo": 1,
      "cEmail": this.email,
      "cISDCode": "null",
      "cCandidateFName": "null",
      "cCountryOfCitizenship": "null",
      "cGender": "null",
      "cParentISDCode": "null",
      "cStatus": "null"
    }

    this.api.create('syudstudentmaster/info', data).subscribe((res) => {
      console.log('res: ', res);

    })
    setTimeout(() => {
      this.signUp = true;
    })
  }
  email(arg0: string, email: any) {
    throw new Error('Method not implemented.');
  }

  
}


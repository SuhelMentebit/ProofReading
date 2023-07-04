import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import * as blogData from './blogData';
import { DOCUMENT } from '@angular/common';
import { DomSanitizer, Meta, Title } from '@angular/platform-browser';
import { ApiService } from '../api.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blogCategorie: any = blogData.blogCategories
  data: any = blogData.blogdata
  url: any
  currentUrl: any
  email: any
  allBlog: any = []
  latestBlog: any = []
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
      image: "../../assets/img/Blog_Main_Icons/k.png"
    },

  ]
  images2 = [
    {
      text: "HPBOSE 10th Result 2022 Released: 87.5% Students Passed,",
      image: "../../assets/img/Blog_Main_Icons/k.png",
      time: "7"
    },
    {
      text: "CLAT 2022 Provisional Merit List I Will Be Released Tomorrow",
      image: "../../assets/img/Blog_Main_Icons/l.png",
      time: "5"
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



  constructor(private router: Router,
    private title: Title,
    private meta: Meta,
    private sanitizer: DomSanitizer,

    public bsModalRef: BsModalRef,
    public modalService: BsModalService,
    private fb: FormBuilder,
    private http: HttpClient,
    @Inject(DOCUMENT) private dom,
    private api: ApiService) {
    let links = [
      { rel: "canonical", href: "  https://www.selectyouruniversity.com/blog" },
      // { rel: "alternate", href: "https://www.selectyouruniversity.com", hreflang :'en-Us'  }
    ]
    links.forEach(lik => {
      let link: HTMLLinkElement = this.dom.createElement('link');
      this.dom.head.appendChild(link);
      link.setAttribute(lik.rel, lik.href);
    });
    let metas: any = [
      { name: "title", content: "Education Blogs for Indian Students | Select Your University" },
      { name: "description", content: "Stay updated on top courses, latest news, admission process, fees structure, exam news, top universities & colleges and many more." },
    ]
    this.title.setTitle('Education Blogs for Indian Students | Select Your University')
    metas.forEach(element => {
      this.meta.addTag(element);
    });
  }

  ngOnInit() {
    this.RegistrationFrom1 = this.fb.group({
      cCandidateName: ["", Validators.required],
      cEmail: ["", [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      cMobile: ["", [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
    });
    
    this.data = blogData.blogdata
    console.log('this.data: ', this.data);
    console.log('blogData: ', blogData);
    console.log('blogCategorie: ', this.blogCategorie);
    this.data.forEach((bg: any) => {
      bg.forEach((b: any) => {
        this.allBlog.push(b)
      });
    });
    this.allBlog.sort(function (a: any, b: any) {
      // convert date object into number to resolve issue in typescript
      return +new Date(b.date) - +new Date(a.date);
    })
    this.latestBlog = this.allBlog.splice(1, 2)
    console.log('this.latestBlog: ', this.latestBlog);
    console.log('test: ', this.allBlog);
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
    this.http.get(`https://bizcallcrmforms.com/response.php?cCandidateName=${cCandidateName}&cEmail=${cEmail}&cMobile=${cMobile}&cCity=Na&cCourse=Na&cLinkName=https://www.selectyouruniversity.com/blog&section=insertdetails`)
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

  makeActive(tab: any) {
    this.router.navigate(['blog/' + tab])
  }

  get(item: any) {
    if (item[0].Categories === 'Top Colleges And Universities') {
      item.forEach((itm: any) => {
        itm.Categories = 'top-colleges-and-universitie'
      });
    }

    this.router.navigate(['blog/category/' + item[0].Categories + '/.'], { state: item });
  }

  routeAllBlog() {
    this.router.navigate(['blog/category/all-blogs/.']);
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


}



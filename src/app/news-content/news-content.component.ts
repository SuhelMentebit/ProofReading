import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import * as newsData from '../news/newsData';

@Component({
  selector: 'app-news-content',
  templateUrl: './news-content.component.html',
  styleUrls: ['./news-content.component.scss']
})
export class NewsContentComponent implements OnInit {
  console: any = console;
  newsCategorie: any = newsData.newsCategories
  data: any = newsData.newsdata
  isReadMore: any = true
  isShade: any = true
  newsData: any
  currentUrl: any
  url: any
  getUrl : any
  allBlog: any = []
  latestBlog: any = []
  displayBasic: any
  h1Title: any
  posturl: any;

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
   this.http.get(`https://bizcallcrmforms.com/response.php?cCandidateName=${cCandidateName}&cEmail=${cEmail}&cMobile=${cMobile}&cLinkName=https://www.selectyouruniversity.com/news/${this.currentUrl}&cCity=Na&cCourse=Na&section=insertdetails`)
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

  constructor(private router: Router,
    private title: Title,
    private meta: Meta,
    private sanitizer: DomSanitizer,

    public bsModalRef: BsModalRef,
    public modalService: BsModalService,
    private fb: FormBuilder,
    private http: HttpClient,
    @Inject(DOCUMENT) private dom
  ) {

  }

  showBasicDialog() {
    this.displayBasic = true;
  }

  ngOnInit() {
    //this.currentUrl = this.router.url.split('/').pop()
    this.getUrl = this.router.url.split('/'); 
    this.currentUrl = this.getUrl[this.getUrl .length-2];
    this.currentUrl = this.currentUrl+"/.";
    console.log(' this.data: ',  this.data);
    this.data.forEach((ndata: any) => {
      ndata.forEach((news: any) => {
        if (news.url === this.currentUrl) {
          this.newsData = news
        }
      });


    });
    this.data.forEach((bg: any) => {
      bg.forEach((b: any) => {
        this.allBlog.push(b)
      });
    });
    this.allBlog.sort(function (a: any, b: any) {
      // convert date object into number to resolve issue in typescript
      return +new Date(b.date) - +new Date(a.date);
    })
    this.latestBlog = this.allBlog.splice(0, 10)
    console.log('this.latestBlog: ', this.latestBlog);
    console.log('this.currentUrl: ', this.currentUrl);
    console.log('newsCategorie: ', this.newsCategorie);
    console.log('data: ', this.data);
    console.log('this.newsData: ', this.newsData);


    let link: HTMLLinkElement = this.dom.createElement('link');
    this.dom.head.appendChild(link);
    let metas: any
    let links: any
    let titles: any
    console.log('this.newsData: ', this.newsData);

    this.newsData.data.forEach((inf: any) => {
        if (inf.type === 'meta') {
          metas = inf.meta
        }
        if (inf.type === 'meta-title') {
          titles = inf.title
        }
        if (inf.type === 'meta-links') {
          links = inf.link
        }
      });
    console.log('titles: ', titles);
    console.log('links: ', links);
    console.log('metas: ', metas);

    this.title.setTitle(titles)
    links.forEach((lik: any) => {
      link.setAttribute(lik.rel, lik.href);
    });
    metas.forEach((met: any) => {
      this.meta.addTag(met);
    });

    this.newsData.data.forEach((un) => {
        if (un.type === 'title') {
          this.h1Title = un.title
        }
      })
    
    console.log('this.h1Title: ', this.h1Title);

    this.RegistrationFrom1 = this.fb.group({
      cCandidateName: ["", Validators.required],
      cEmail: ["", [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      cMobile: ["", [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
    });
  }

  routerParentPage(place: any) {
    console.log('this.newsData: ', this.newsData);
    console.log('place: ', place);
    let url = place.replaceAll(' ', '-')
    this.router.navigate([`news/category/${url.toLowerCase()}/`]);
  }

  showText() {

  }

}

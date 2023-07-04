import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import * as newsData from "./all-news";
@Component({
  selector: 'app-all-news',
  templateUrl: './all-news.component.html',
  styleUrls: ['./all-news.component.scss']
})
export class AllNewsComponent implements OnInit {
  newsCategorie = newsData.newsCategories;
  data:any = [];
  allData:any
  url: any;
  customeCat:any
  allNews:any=[]
  currentUrl: any;


  tages={
    'exam':{
      metas:[
        { name: "title", content: " Exam Category - News" },
        { name: "description", content: " Keep all the latest information and news about admission, timetables, postponement of exams, dates, and everything in Select Your University's news section." },
      ],
      titles:' Exam Category - News',
      links : [
        { rel: "canonical", href: "https://www.selectyouruniversity.com/news/category/exam" },
      ]
    },
    "general":{
      metas:[
        { name: "title", content: "General Category - News" },
        { name: "description", content: "Get all the latest and important updates related to general news here." },
      ],
      titles:'General Category - News',
      links : [
        { rel: "canonical", href: " https://www.selectyouruniversity.com/news/category/general" },
      ]
    },

    'all-news':{
      metas:[
        { name: "title", content: " All News Category" },
        { name: "description", content: "Check all the news updates at one place. " },
      ],
      titles:' All News Category',
      links : [
        { rel: "canonical", href: "https://www.selectyouruniversity.com/news/category/all-news" },
      ]
    },
  }

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
   this.http.get(`https://bizcallcrmforms.com/response.php?cCandidateName=${cCandidateName}&cEmail=${cEmail}&cMobile=${cMobile}&cCity=Na&cCourse=Na&cLinkName=https://www.selectyouruniversity.com/${this.url[1]}/${this.url[2]}/${this.url[3]}/&section=insertdetails`)
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
    (this.data = this.router.getCurrentNavigation()?.extras.state),
      console.log("data", this.data);
      let urls = this.router.url.split('/')
      let allTages = this.tages[urls[3]]
      console.log('allTages: ', allTages);
      allTages.links.forEach(lik => {
        let link: HTMLLinkElement = this.dom.createElement('link');
        this.dom.head.appendChild(link);
        link.setAttribute(lik.rel, lik.href);
      });
      this.title.setTitle(allTages.titles)
      allTages.metas.forEach(element => {
        this.meta.addTag(element);
      });
   } 

  ngOnInit(): void {
    this.url = this.router.url.split('/')
    if(!this.allData){
      newsData.newsdata.forEach(nd => {
            nd.forEach(n => {
                if(n.Categories === this.url[3]){
                  this.allData=nd
                }
              });
            });
          }
    if(this.url[3]==='all-news'){
      newsData.newsdata.forEach(bg => {
        bg.forEach(b => { 
            this.customeCat = 'All News'
            this.allNews.push(b)
          });
        });
      }


    this.url = this.router.url.split('/')
    if(!this.allData){
      newsData.newsdata.forEach(nd => {
        nd.forEach(n => {
          if(n.Categories === this.url[3]){
            this.allData=nd
          }
        });
      });
    }
    if(this.url[3]==='all-news'){
      newsData.newsdata.forEach(bg => {
        bg.forEach((b:any) => { 
            this.customeCat = 'All News'
            this.allNews.push(b)
          });
        });
      }else {
        this.data = this.allData
      }

      this.RegistrationFrom1 = this.fb.group({
        cCandidateName: ["", Validators.required],
        cEmail: ["", [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
        cMobile: ["", [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
      });

  }

  makeActive(tab:any) {
    this.router.navigate(['news/' + tab])
  }
}

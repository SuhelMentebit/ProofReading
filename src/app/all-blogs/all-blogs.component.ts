import { DOCUMENT } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DomSanitizer, Meta, Title } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import * as blogData from "./all-blogs";

@Component({
  selector: "app-all-blogs",
  templateUrl: "./all-blogs.component.html",
  styleUrls: ["./all-blogs.component.scss"],
})
export class AllBlogsComponent implements OnInit {
  blogCategorie = blogData.blogCategories;
  allData:any
  data: any;
  url: any;
  currentUrl: any;
  customeCat:any
  allBLogs:any=[]

  tages={
    "study-abroad":{
      metas:[
        { name: "title", content: "Study Abroad Category - Blog" },
        { name: "description", content: " All you need to know about studying abroad is here. From the admission process to visa, from the entrance exam to transfers, click here to know more. " },
      ],
      titles:'Study Abroad Category - Blog',
      links : [
        { rel: "canonical", href: "https://www.selectyouruniversity.com/blog/category/study-abroad" },
      ]
    },
    'exam':{
      metas:[
        { name: "title", content: "Exam Category - Blog" },
        { name: "description", content: "Get all the updates about Entrance exams, like NEET-UG, NEET-PG and others. Click here for more information and updates." },
      ],
      titles:'Exam Category - Blog',
      links : [
        { rel: "canonical", href: " https://www.selectyouruniversity.com/blog/category/exam" },
      ]
    },
    'general':{
      metas:[
        { name: "title", content: "General Category - Blog" },
        { name: "description", content: "Get all the updates about Entrance exams, like NEET-UG, NEET-PG and others. Click here for more information and updates." },
      ],
      titles:'General Category - Blog',
      links : [
        { rel: "canonical", href: " https://www.selectyouruniversity.com/blog/category/general" },
      ]
    },
    'how-to-guide':{
      metas:[
        { name: "title", content: "How to Guide Category - Blog" },
        { name: "description", content: " Get one step ahead with Select Your University's 'How to...' guide blogs. Click here to know about from how to prepare for any exam to how to take admission." },
      ],
      titles:'How to Guide Category - Blog',
      links : [
        { rel: "canonical", href: "https://www.selectyouruniversity.com/blog/category/how-to-guide" },
      ]
    },
    'career':{
      metas:[
        { name: "title", content: " Career Category - Blog" },
        { name: "description", content: "Don't know what to choose as a career? Click here to learn more about your career options of studying MBBS, Engineering, and MBA in India as well as abroad." },
      ],
      titles:' Career Category - Blog',
      links : [
        { rel: "canonical", href: "https://www.selectyouruniversity.com/blog/category/career" },
      ]
    },
    "top-colleges-and-universities":{
      metas:[
        { name: "title", content: "Top Colleges & Universities Category - Blog" },
        { name: "description", content: "Click here & get information about top colleges & universities. Know about medical & technical universities in Russia, Georgia, Uzbekistan, etc to study abroad." },
      ],
      titles:'Top Colleges & Universities Category - Blog',
      links : [
        { rel: "canonical", href: "https://www.selectyouruniversity.com/blog/category/top-colleges-and-universities" },
      ]
    },
    "neet-counselling":{
      metas:[
        { name: "title", content: "NEET Councelling Category - Blog" },
        { name: "description", content: " If you want to study MBBS in India, click here to know about the NEET counselling process in different states. Get information about Cutoffs and choice filling." },
      ],
      titles:'NEET Councelling Category - Blog',
      links : [
        { rel: "canonical", href: " https://www.selectyouruniversity.com/blog/category/neet-counselling" },
      ]
    },
    "all-blogs":{
      metas:[
        { name: "title", content: "All Blogs Category" },
        { name: "description", content: "Select Your University is your top option for studying abroad & in India. Read about different topics related to studying in foreign universities and courses." },
      ],
      titles:'All Blogs Category',
      links : [
        { rel: "canonical", href: "https://www.selectyouruniversity.com/blog/category/all-blogs" },
      ]
    }
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
    (this.data = this.router.getCurrentNavigation()?.extras.state),
      console.log("data", this.data);
  }

  ngOnInit() {
    console.log("blogData: ", blogData);
    this.url = this.router.url.split('/')
    console.log('this.url: ', this.url);
    console.log('blogData.blogdata: ', blogData.blogdata);
    if(!this.allData){
      blogData.blogdata.forEach(nd => {
        nd.forEach(n => {
          if(n.Categories === this.url[3]){
            this.allData=nd
          }
        });
      });
    }
    console.log('this.allData: ', this.allData);
    if(this.url[3]==='all-blogs'){
      blogData.blogdata.forEach(bg => {
        bg.forEach((b:any) => { 
            this.customeCat = 'All Blogs'
            this.allBLogs.push(b)
          });
        });
      }else {
        this.data = this.allData
      }
      console.log('this.allBLogs: ', this.allBLogs);
      console.log('this.data: ', this.data);
    console.log("blogCategorie: ", this.blogCategorie);

    this.RegistrationFrom1 = this.fb.group({
      cCandidateName: ["", Validators.required],
      cEmail: ["", [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      cMobile: ["", [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
    });
  }

  makeActive(tab:any) {
    this.router.navigate(['blog/' + tab])
  }

}

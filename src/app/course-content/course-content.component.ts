import { Component, OnInit, Renderer2, Inject, TemplateRef } from '@angular/core';
import { DOCUMENT } from '@angular/common'
import { NgxGalleryOptions } from '@kolkov/ngx-gallery';
import { NgxGalleryImage } from '@kolkov/ngx-gallery';
import { NgxGalleryAnimation } from '@kolkov/ngx-gallery';
import { GalleryItem, ImageItem } from 'ng-gallery';
import { ViewportScroller } from '@angular/common';
import { AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import *as collegeContent from './data'
import { Meta, Title } from '@angular/platform-browser';
import { ApiService } from '../api.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser'
import { DialogModule } from 'primeng/dialog';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-course-content',
  templateUrl: './course-content.component.html',
  styleUrls: ['./course-content.component.scss']
})
export class CourseContentComponent implements OnInit {

  Course: any = ['MBBS','BTech', 'MTech','MBA','PGDM','BCA','MCA', 'Bsc', 'Msc'];
  registrationForm = this.fb.group({
    cCourse: ['', [Validators.required]],
  });
  changeCourse(e: any) {
    this.cCourse?.setValue(e.target.value, {
      onlySelf: true,
    });
  }
  // Access formcontrols getter
  get cCourse() {
    return this.registrationForm.get('cCourse');
  }
  
  isShowDivIf = true;  
  RegistrationForm1: FormGroup;
  toggleDisplayDivIf() {  
    this.isShowDivIf = !this.isShowDivIf;
  }  
  

  modalRef: BsModalRef;
  form1 = true;
  form2 = false;
  form3 = false;
  form4 = false;
  RegistrationFrom1: FormGroup;
  RegistrationFrom2: FormGroup;
  RegistrationFrom3: FormGroup;
  RegistrationFrom4: FormGroup;
  nsrNo:any
  

 
  hide() {
    this.bsModalRef.hide();
  }

  get m(){
    return this.RegistrationFrom1.controls;
  }

  //second form
  form5 = true;
  form6 = false;
  get m2() {
    return this.RegistrationForm1.controls;
  }

  public submitFormS() {
    if (this.RegistrationForm1.valid) {
      this.bsModalRef.hide();
      this.router.navigate(['/thankyou-page/.']);
      // this.form3 = false
      // this.form4 = false
    }
    let data = this.RegistrationForm1.value;
    data['refNo'] = 777;
    data['cAddressLine'] = 'Na';
    data['cState'] = 'Na';
    data['cPinCode'] = 'Na';
    data['cParantNo'] = 'Na';
    data['cDataFrom'] = 1;
    data['AllocatedTo'] = 0;
    data['CurrentStatus'] = 0;
    //data['cRemarks'] = this.RegistrationFrom1.value.qeducation;
    //data['cCountry'] = 'Na';
    data['cWebsite'] = 'http://demo.mentebit.com/#/';
    data['cCoutryCode'] = 'Na';
    console.log('rom1', this.RegistrationForm1.value);
    const {
      //cCity,
      //cCourse,
      cCandidateName,
      cEmail,
      cMobile,
      //qeducation,
      //cLinkName,
    } = this.RegistrationForm1.value;
    this.http
      .get(
        `https://bizcallcrmforms.com/response.php?cCandidateName=${cCandidateName}&cEmail=${cEmail}&cMobile=${cMobile}&cLinkName=https://www.selectyouruniversity.com/${this.url[1]}/${this.url[2]}/${this.url[3]}&cCity=Na&cCourse=Na&section=insertdetails`
      )
      .subscribe((res) => {
        console.log('res', res);
        this.nsrNo = res;
      });
    console.log('form 1', this.RegistrationForm1.value);
    console.log('form 2', this.RegistrationFrom2.value);
    console.log('form 3', this.RegistrationFrom3.value);
  }

  public submitForm1() {
    if (this.RegistrationFrom1.valid) {
      this.modalRef.hide();
      this.router.navigate(['/thankyou-page/.']);
      // this.form3 = false
      // this.form4 = false
    }
    let data = this.RegistrationFrom1.value
    data['refNo']=777
    data['cAddressLine']='Na'
    data['cState']='Na'
    data['cPinCode']="Na"
    data['cParantNo']='Na'
    data['cDataFrom']=1
    data['AllocatedTo']=0
    data['CurrentStatus']=0
    //data['cRemarks']=this.RegistrationFrom1.value.qeducation
    data['cCountry']="Na"
    data['cWebsite']='http://demo.mentebit.com/#/'
    data['cCoutryCode']="Na"
    console.log('rom1', this.RegistrationFrom1.value)
    const {cCity, cCourse, cCandidateName, cEmail, cMobile, qeducation,cLinkName} = this.RegistrationFrom1.value;
    this.http.get( `https://bizcallcrmforms.com/response.php?cCity=${cCity}&cCourse=${cCourse}&cCandidateName=${cCandidateName}&cEmail=${cEmail}&cMobile=${cMobile}&cLinkName=${this.currentUrl}&section=insertdetails`)
    .subscribe((res) => {
      console.log('res', res)
    this.nsrNo= res
      
    })
    console.log('form 1', this.RegistrationFrom1.value )
    console.log('form 2', this.RegistrationFrom2.value )
    console.log('form 3', this.RegistrationFrom3.value )
  }
  public submitForm2() {
    const data = {
      "nsrNo":this.nsrNo.nSrNo,    
      "fldtext1":"Graduation Institute",
      "fldValue1":this.RegistrationFrom2.value.qgraduation,
      "fldtext2":'Graduation Course', 
      "fldValue2":this.RegistrationFrom2.value.qcourse,
      "fldtext3":"Graduation Percentage",
      "fldValue3":this.RegistrationFrom2.value.qgradper,
      "fldtext4":"Work Experience",
      "fldValue4":this.RegistrationFrom2.value.qexperience,
      "fldtext5":"Extra Tests",   
      "fldValue5":this.RegistrationFrom2.value.qextraExam,
      "fldtext6":"GATE Score", 
      "fldValue6":this.RegistrationFrom2.value.qgate,
      "fldtext7":"GRE Score", 
      "fldValue7":this.RegistrationFrom2.value.qgre,    
      }
    this.http.post( "https://18.189.207.215:8080/databaselisteducationmaster", data)
    .subscribe((res) => {
      console.log('res', res)
    })
    if (this.RegistrationFrom1.valid) {
      this.form1 = false;
      this.form2 = false;
      this.form3 = true;
      this.form4 = false;
    }
  }
  public submitForm3() {
    console.log('FROM3', this.RegistrationFrom3);
    const data = {
      "nsrNo":this.nsrNo.nSrNo,               
      "fldtext1":"Tenth Board",      
      "fldValue1":this.RegistrationFrom3.value.qtenthBoard,            
      "fldtext2":"Tenth Year",       
      "fldValue2":this.RegistrationFrom3.value.qtenthPassing,            
      "fldtext3":"Tenth Percentage", 
      "fldValue3":this.RegistrationFrom3.value.qtenthPercentage,              
      "fldtext4":"Tenth Institute",  
      "fldValue4":this.RegistrationFrom3.value.qschool,           
      "fldtext5":"NA",               
      "fldValue5":"NA",              
      "fldtext6":"NA",               
      "fldValue6":"NA",              
      "fldtext7":"NA",               
      "fldValue7":"NA"               
      
      }
        this.http.post( "https://18.189.207.215:8080/databaselisteducationmaster", data)
    .subscribe((res) => {
      console.log('res', res)
      
    })
    console.log("submitted")
    if (this.RegistrationFrom2.valid) {
      this.form1 = false;
      this.form2 = false;
      this.form3 = false;
      this.form4 = true;
    }
  }
  public submitFrom4(){
    console.log('FROM4', this.RegistrationFrom4);
   const data= {
      "nsrNo":this.nsrNo.nSrNo,                       
      "fldtext1":"Twelth Board",         
      "fldValue1":this.RegistrationFrom4.value.fldValue1,                
      "fldtext2":"Twelth Year",          
      "fldValue2":this.RegistrationFrom4.value.fldValue2,                
      "fldtext3":"Twelth Percentage",    
      "fldValue3":this.RegistrationFrom4.value.fldValue3,                  
      "fldtext4":"Twelth Institute",     
      "fldValue4":this.RegistrationFrom4.value.fldValue4,               
      "fldtext5":"Twelth Specialization",
      "fldValue5":this.RegistrationFrom4.value.fldValue5,         
      "fldtext6":"NA",                   
      "fldValue6":"NA",                  
      "fldtext7":"NA",                   
      "fldValue7":"NA"                   
      }
      this.http.post( "https://18.189.207.215:8080/databaselisteducationmaster", data)
      .subscribe((res) => {
        console.log('res', res)
        
      })
    this.hide()
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


  @ViewChild('stickyNav', { static: true }) navTabs: ElementRef;
  @ViewChild('stickyDiv', { static: true }) talkExpertDiv: ElementRef;
  collegeContents: any = collegeContent
  isReadMore: any = true
  isShade: any = true
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  sticky: boolean = false;
  stickyDiv: boolean = false;
  activeTab: string = 'tab1';
  activSubTab: string = 'tab1';
  elementPosition: any;
  elementPosition1: any
  displayBasic: boolean;
  posturl: any
  collegeData: any
  currentUrl: any
  getUrl: any;
  url: any;
  studuentAlsoVisit:any
  posts:any;

  // variable for Cources and fees
  CoursesFees: any = []
  eventaddmission: any = []
  courseaddmission: any = []
  placement: any = []
  news: any = []
  gallery: any
  galleryType: any
  h1Title: any
  private link: HTMLLinkElement;
  

  // highlightColData= collegeContent.MIT.info.Highlights-Table.col

  


  isActive(tabName: any) {
    return this.activeTab === tabName;
  }

  photoURL(url: any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url + "&output=embed");
  }

  makeActive(tab: any) {
    console.log('tab', tab)
    console.log('this.url', this.url)
    if (this.url.length > 1) {
      if (tab === 'info') {
        this.router.navigate(['course/' + this.url[2] + '/.'])
      } else if (tab === 'qna') {
        this.router.navigate(['course/' + this.url[2] + '/' + 'faq/.'])
      } else {
        this.router.navigate(['course/' + this.url[2] + '/' + tab + '/.'])
      }
    } else {
      this.router.navigate(['course/' + this.currentUrl+"/."])
    }
    this.activeTab = tab;
    window.scroll({
      top: 425,
      left: 0,
      behavior: 'smooth'
    });
  }
  makeActiveTab(tab: any) {
    this.activeTab = tab;
  }

  // sub Tab 
  isActiveSubTab(tabName: any) {
    return this.activSubTab === tabName;
  }

  makeActiveSubTab(tab: any) {
    this.activSubTab = tab;
    window.scroll({
      top: 425,
      left: 0,
      behavior: 'smooth'
    });
  }
  makeActiveTabSub(tab: any) {
    this.activSubTab = tab;
  }
  // sub Tab End



  showBasicDialog() {
    this.displayBasic = true;
  }

  showText() {
    this.isReadMore = !this.isReadMore
    this.isShade = !this.isShade
  }
  constructor(
    private viewportScroller: ViewportScroller,
    private router: Router,
    private title: Title,
    private meta: Meta,
    private api: ApiService,
    private sanitizer: DomSanitizer,
    public bsModalRef: BsModalRef,
    public modalService: BsModalService,
    private fb: FormBuilder,
    private http: HttpClient,
    
    @Inject(DOCUMENT) private dom: any

  ) {
    let link: HTMLLinkElement = this.dom.createElement('link');
    this.dom.head.appendChild(link);
    let urls = this.router.url.split('/');
    let data = this.collegeContents[urls[2].replace(/-/g, "")]
    console.log('data: ', data);
    console.log('urls: ', urls);
    data = data[urls[2].replace(/-/g, "")]
    //data = data['info'];
    let metas:any
    let links:any
    let titles:any;
    if(urls.length > 4){
      let tabData = data[urls[3].replace(/-/g, "")];
      if(tabData){
        tabData.forEach((inf:any) => {
          if(inf.type ==='meta'){
            metas=inf.meta
          }
          if(inf.type ==='meta-title'){
            titles= inf.title
          }
          if(inf.type === 'meta-links'){
            links= inf.link
          }
      });
      }
    }else {
      data.info.forEach((inf:any) => {
          if(inf.type ==='meta'){
            metas=inf.meta
          }
          if(inf.type ==='meta-title'){
            titles= inf.title
          }
          if(inf.type === 'meta-links'){
            links= inf.link
          }
      });
    }
    console.log('titles: ', titles);
    console.log('links: ', links);
    console.log('metas: ', metas);
    
  this.title.setTitle(titles);
  if(links){
    links.forEach((lik:any) => {
      link.setAttribute(lik.rel, lik.href);
    });
  }
  if(metas){
    metas.forEach((met: any) => {
      this.meta.addTag(met);
    });
  }
}

  

  ngOnInit() {
    this.RegistrationFrom1 = this.fb.group({
      cCandidateName: ["", Validators.required],
      cEmail: ["",[ Validators.required , Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      cMobile: ["", [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      cCity: [""],
      cCourse: ["", Validators.required],
      //qeducation: ["", Validators.required],
    });
    this.RegistrationFrom2 = this.fb.group({
      qgraduation: ["", Validators.required],
      qcourse: ["", Validators.required],
      qgradper: ["", Validators.required],
      qextraExam:["",Validators.required],
      qexperience: ["", Validators.required],
      qgate: ["", Validators.required],
      qgre: ["", Validators.required],
    });
    this.RegistrationFrom3 = this.fb.group({
      qtenthBoard: ["", Validators.required],
      qtenthPassing: ["", Validators.required],
      qtenthPercentage: ["", Validators.required],
      qschool: ["", Validators.required],
      qtwelvethBoard: ["", Validators.required],
      qtwelvethPassing: ["", Validators.required],
      qtwelvethPer: ["", Validators.required],
      qtwelvethSchool: ["", Validators.required],
      qtwelvethSpec: ["", Validators.required],
    });
    this.RegistrationFrom4 = this.fb.group({
      fldValue1: ["", Validators.required],
      fldValue2: ["", Validators.required],
      fldValue3: ["", Validators.required],
      fldValue4: ["", Validators.required],
      fldValue5: ["", Validators.required],
    });
    //for second form
    this.RegistrationForm1 = this.fb.group({
      cCandidateName: ["", Validators.required],
      cEmail: ["", [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      cMobile: ["", [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
    });
    this.galleryOptions = [
      {
        width: '100%',
        height: '45vh',
        thumbnailsColumns: 4,
        thumbnails: false,
        imageAnimation: NgxGalleryAnimation.Slide,
        // layout:NgxGalleryLayout.
      },
      // max-width 800
      {
        breakpoint: 768,
        width: '94%',
        height: '30vh',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      {
        breakpoint: 1400,
        width: '100%',
        height: '50vh',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // ma
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '30vh',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [
      {
        small: '../../assets/img/BG.jpg',
        medium: '../../assets/img/BG.jpg',
        big: '../../assets/img/BG.jpg'
      },
      {
        small: '../../assets/img/colg.png',
        medium: '../../assets/img/colg.png',
        big: '../../assets/img/colg.png'
      },
      {
        small: '../../assets/img/College.jpg',
        medium: '../../assets/img/College.jpg',
        big: '../../assets/img/College.jpg'
      },

    ];
    //this.currentUrl = this.router.url.split('/').pop()
    this.getUrl = this.router.url.split('/'); 
    this.currentUrl = this.getUrl[this.getUrl .length-2];
    this.currentUrl = this.currentUrl;
    //console.log('this.currentUrl: ', this.currentUrl);
    //this.url = this.router.url.split('/');
    //this.url = this.getUrl[this.getUrl .length-2];
    this.url = this.router.url.split('/');
    if (this.url.length > 4) {
      if (this.url[3] === 'courses-and-fees') { 
        this.getCoursesFees(this.url[2])
      }
      if (this.url[3] === 'admission') {
        this.getaddmission(this.url[2])
      }
      if (this.url[3] === 'placement') {
        this.getplaceMent(this.url[2])
      }
      if (this.url[3] === 'gallery') {
        this.getGallery(this.url[2])
        this.makeActiveTabSub('images')
      }
      if (this.url[3] === 'news') {
        this.getNews(this.url[2])
      }
    } 
    this.api.getAll(`section=colunimaininfo&coluni=${this.url[2]}`)
    .subscribe((response:any) => {
      this.posts = response.data[0];
      console.log('posts', response)
    });

    console.log('this.collegeContents: ', this.collegeContents);
    console.log('this.url[2].replace(/-/g, ""): ', this.url[2].replace(/-/g, ""));
    const data = this.collegeContents[this.url[2].replace(/-/g, "")]
    console.log("data=======", data);
    this.collegeData = data[this.url[2].replace(/-/g, "")];
    this.createLinkForCanonicalURL()
    if (this.url.length > 4) {
      this.makeActiveTab(this.url[3]);
    } else {
      this.makeActiveTab('info');
    }
    if (this.url.length > 3) {
      this.collegeData[this.url[this.url.length - 1].replace(/-/g, "")].forEach((un) => {
        if (un.type === 'title') {
          this.h1Title = un.title
        }
      })
    } else {
      this.collegeData.info.forEach((un) => {
        if (un.type === 'title') {
          this.h1Title = un.title
        }
      })
    }
    console.log('this.h1Title: ', this.h1Title);

    this.images2 = [
      new ImageItem({ src: '../../assets/img/BG.jpg', thumb: '../../assets/img/BG.jpg' }),
      new ImageItem({ src: '../../assets/img/BG.jpg', thumb: '../../assets/img/BG.jpg' }),
      // ... more items
    ];
    this.getStudentVisit()
  }

  openModalWithClass(template: TemplateRef<any>) {  
    this.modalRef = this.modalService.show(  
      template,  
      Object.assign({}, { class: 'gray modal-lg' })  
    );  
  }  

  getStudentVisit(){
    this.api.getAll('collegemaster/subject1').subscribe((res:any)=>{
      this.studuentAlsoVisit=res.data

    })
  }
  

  public onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

  images2: GalleryItem[];
  scrollToElement($element: any): void {
    // console.log($element);
    $element.scrollIntoView({ behavior: "smooth" });
  }

  createLinkForCanonicalURL() { 
    if (this.link === undefined) {
      this.collegeData.info.forEach((info: any) => { 
        if (info.type === 'link') { alert("here");
          info.data.forEach((lin: any) => {
            this.link = this.dom.createElement('link');
            this.link.setAttribute('rel', lin.rel,);
            this.dom.head.appendChild(this.link);
            this.link.setAttribute('href', lin.href);
          });
        }
      });
    }
  }

  getNews(url: any) {
    this.api.get(`syudynamicnews/${url}`).subscribe((res: any) => {
      console.log('res: ', res);
      if (res.isError) {
        console.log("Something Went wrong ")
      } else {
        this.news = res.data
        console.log('this.news: ', this.news);
      }
    })
  }

  getGallery(url: any) {
    this.api.get(`syudynamicimage/${url}`).subscribe((res: any) => {
      console.log('res: ', res);
      if (res.isError) {
        console.log("Something Went wrong ")
      } else {
        let courceName = []
        courceName = res.object.map(function (obj: any) {
          return obj.cCategory
        })
        courceName = [...new Set(courceName)];
        let data: any = {
          image: [],
          video: []
        }
        res.object.forEach((obj: any, i: any) => {
          if (obj.cContentType === 'Image') {
            data.image.push(obj)
          } else {
            data.video.push(obj)
          }
        })

        console.log('data: ', data);

        console.log('courceName: ', courceName);
        courceName.forEach((cname, id) => {

          data.image.forEach((obj: any) => {
            if (cname === obj.cCategory) {
              data.image.push(obj)
            }
          });
        });
        this.galleryType = courceName
        data.video.forEach((vd: any) => {
          let url = vd.cImageUrl
          // let spliturl = Array.from(url)
          console.log('test', url.split("/"));
        });
        this.gallery = data
        console.log('data: ', data);
        console.log('this.placement: ', this.gallery);
      }
    })
  }

  getplaceMent(url: any) {
    this.api.get(`collegeplacementmaster/${url}`).subscribe((res: any) => {
      console.log('res: ', res);
      if (res.isError) {
        console.log("Something Went wrong ")
      } else {
        this.placement.push(res.object[0])
        console.log('this.placement: ', this.placement);
      }
    })
  }

  getaddmission(url: any) {
    this.api.get(`syudadmissionmaster/${url}`).subscribe((res: any) => {
      console.log('res: ', res);
      if (res.isError) {
        console.log("Something Went wrong ")
      } else {
        res.object.forEach((evn: any) => {
          this.eventaddmission.push({ Events: evn.cEvents, 'Important Dates': evn.cImportantDates })
          this.courseaddmission.push({ Course: 'Test', 'Exam Accepted': evn.cExamAccepted })
        });
        console.log('this.eventaddmission: ', this.eventaddmission);
        console.log('this.courseaddmission: ', this.courseaddmission);
      }
    })
  }

  getCoursesFees(url: any) {
    this.api.get(`collegemaster/${url}`).subscribe((res: any) => {
      console.log('res: ', res);
      if (res.isError) {
        console.log("Something Went wrong ")
      } else {
        let courceName = []
        courceName = res.object.map(function (obj: any) {
          return obj.cCourse
        })
        courceName = [...new Set(courceName)];
        console.log('courceName: ', courceName);
        courceName.forEach((cname, id) => {
          let data: any = []
          res.object.forEach((obj: any, i: any) => {
            if (cname === obj.cCourse) {
              data.push(obj)
            }
            if (i === res.object.length - 1) {
              this.CoursesFees[id] = data
            }
          });
        });
        console.log('this.CoursesFees: ', this.CoursesFees);
      }
    })
  }

  galleriaImages: [
    {
      "previewImageSrc": "../../assets/img/BG.jpg",
      "thumbnailImageSrc": "../../assets/img/BG.jpg",
      "alt": "Description for Image 3",
      "title": "Title 3"
    },
    {
      "previewImageSrc": "../../assets/img/College.jpg",
      "thumbnailImageSrc": "../../assets/img/College.jpg",
      "alt": "Description for Image 3",
      "title": "Title 3"
    },
    {
      "previewImageSrc": "../../assets/img/College.jpg",
      "thumbnailImageSrc": "../../assets/img/College.jpg",
      "alt": "Description for Image 3",
      "title": "Title 3"
    },
  ];
  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];
  ngAfterViewInit() {
    console.log('this.talkExpertDiv: ', this.talkExpertDiv);
    this.elementPosition = this.navTabs.nativeElement.offsetTop;
    this.elementPosition1 = this.talkExpertDiv.nativeElement.offsetTop;
  }
  @HostListener('window:scroll')
  handleScroll() {
    const windowScroll = window.pageYOffset;

    if (windowScroll >= this.elementPosition) {

      this.sticky = true;
    }
    if (windowScroll <= this.elementPosition) {
      this.sticky = false;
    }
    if (windowScroll >= this.elementPosition1) {
      this.stickyDiv = true;
    }
    if (windowScroll <= this.elementPosition1) {
      this.stickyDiv = false;
    }
  }
}


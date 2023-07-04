import { Component, Inject, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { DOCUMENT, ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { DomSanitizer, Meta, Title } from '@angular/platform-browser';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-img-gallery',
  templateUrl: './img-gallery.component.html',
  styleUrls: ['./img-gallery.component.scss']
})
export class ImgGalleryComponent implements OnInit {

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
   this.http.get(`https://bizcallcrmforms.com/response.php?cCandidateName=${cCandidateName}&cEmail=${cEmail}&cMobile=${cMobile}&cCity=Na&cCourse=Na&cLinkName=https://www.selectyouruniversity.com/img-gallery&section=insertdetails`)
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
  @ViewChild('stickyNav', { static: true }) navTabs: ElementRef;
  @ViewChild('stickyDiv', { static: true }) talkExpertDiv: ElementRef;
  isReadMore = true
  isShade = true
  sticky: boolean = false;
  stickyDiv: boolean = false;
  activeTab: string = 'tab1';
  elementPosition: any;
  elementPosition1:any
  displayBasic: boolean;
  posturl:any;
  images:any;
  url: any


  isActive(tabName:any){
    return this.activeTab === tabName;
  }

  makeActive(tab:any){
    console.log('tab: ', tab);
    this.activeTab = tab;
    window.scroll({ 
      top: 170, 
      left: 0, 
      behavior: 'smooth' 
    });
  }
  makeActiveTab(tab:any) {
    this.activeTab = tab;
  }
  showBasicDialog() {
    this.displayBasic = true;
}

  showText() {
    this.isReadMore = !this.isReadMore
    this.isShade = !this.isShade
  }
  constructor(private viewportScroller: ViewportScroller,private router: Router,private api: ApiService,
    private title: Title,
    private meta: Meta,
    private sanitizer: DomSanitizer, 
    public bsModalRef: BsModalRef,
    public modalService: BsModalService,
    private fb: FormBuilder,
    private http: HttpClient,
    @Inject(DOCUMENT) private dom
    ) {
      let links = [
        { rel: "canonical", href: "https://www.selectyouruniversity.com/image-gallery" },
        // { rel: "alternate", href: "https://www.selectyouruniversity.com", hreflang :'en-Us'  }
      ]
      links.forEach(lik => {
        let link: HTMLLinkElement = this.dom.createElement('link');
        this.dom.head.appendChild(link);
        link.setAttribute(lik.rel, lik.href);
      });
      let metas:any =[
        { name: "title", content: " Image Gallery - Select Your University" },
        { name: "description", content: " Find out all images of medical students which went to abroad for MBBS course through us." },
      ]
      this.title.setTitle(' Image Gallery - Select Your University')
      metas.forEach(element => {
        this.meta.addTag(element);
      });
     }


  public onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }
  scrollToElement($element:any): void {
    console.log($element);
    $element.scrollIntoView({behavior: "smooth"});
  }
  
  getImages() {
    this.api.get('syudynamicimage/Pune Institute of Computer Technology, Pune').subscribe((res: any) => {
      console.log('res: ', res);
      if (res.isError) {
        console.log("Something Went wrong ")
      } else {
        this.images = res.object
      }
    })
  }
  ngOnInit() {
    this.makeActiveTab('seminar');
    this.getImages();
    this.makeActiveTab('info')

    this.RegistrationFrom1 = this.fb.group({
      cCandidateName: ["", Validators.required],
      cEmail: ["", [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      cMobile: ["", [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
    });
  }

  ngAfterViewInit(){
    this.elementPosition = this.navTabs.nativeElement.offsetTop;
    this.elementPosition1 = this.talkExpertDiv.nativeElement.offsetTop;
  }
  @HostListener('window:scroll')
    handleScroll(){
    const windowScroll = window.pageYOffset;
      
      if(windowScroll >= this.elementPosition){
        this.sticky = true;
      }
      if(windowScroll <= this.elementPosition){
          this.sticky = false;
      }
      if(windowScroll >= this.elementPosition1){
        this.stickyDiv = true;
      }
      if(windowScroll <= this.elementPosition1){
          this.stickyDiv = false;
      }
    }
}

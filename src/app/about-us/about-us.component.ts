import { DomSanitizer, Meta, Title } from '@angular/platform-browser';
import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

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
    this.http.get(`https://bizcallcrmforms.com/response.php?cCandidateName=${cCandidateName}&cEmail=${cEmail}&cMobile=${cMobile}&cCity=Na&cCourse=Na&cLinkName=https://www.selectyouruniversity.com/about-us/&section=insertdetails`)
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
 

  constructor(
    private title: Title,
    private meta: Meta,
    private sanitizer: DomSanitizer,
    public bsModalRef: BsModalRef,
    public modalService: BsModalService,
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    @Inject(DOCUMENT) private dom
  ) { 
    let links = [
      { rel: "canonical", href: "https://www.selectyouruniversity.com/about-us" },
      // { rel: "alternate", href: "https://www.selectyouruniversity.com", hreflang :'en-Us'  }
    ]
    links.forEach(lik => {
      let link: HTMLLinkElement = this.dom.createElement('link');
      this.dom.head.appendChild(link);
      link.setAttribute(lik.rel, lik.href);
    });
    let metas:any =[
      { name: "title", content: " About Us - Select Your University" },
      { name: "description", content: "  We are the top MBBS abroad education consultants by helping students giving depth information about study pattern & qaulity in the top universities across the world." },
    ]
    this.title.setTitle('About Us - Select Your University')
    metas.forEach(element => {
      this.meta.addTag(element);
    });
  }
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
        items: 1,
        nav: true
      },
      1000: {
        items: 6,
        nav: true,
        loop: false
      },
      1500: {
        items: 3,
        nav: true,
        loop: false
      }
    } 
  }
  images = [
    {
      text: "We make you aware about the rules and regulations of any foreign institute and we will help you in getting the invitation letter.",
      image: "../../assets/img/About_us_Icons/Our_Services/1.-Rules.png"
    },
    {
      text: "According to student’s needs, ‘Select Your University’ will provide support for educational loans.",
      image: "../../assets/img/About_us_Icons/Our_Services/2.-Educational-Loan.png"
    },
    {
      text: "We provide best medical universities with high quality education and very low fess structure.",
      image: "../../assets/img/About_us_Icons/Our_Services/3.-Best-Medical-University.png"
    },
    {
      text: "‘Select Your University’ team also helps you with the accommodation",
      image: "../../assets/img/About_us_Icons/Our_Services/4.-Accomodation-Hostel.png"
    },
    {
      text: "We also assist you with the final documentation in the university.",
      image: "../../assets/img/About_us_Icons/Our_Services/5.-Final-Documentation.png"
    },
    {
      text: "We make all the arrangements for our students from the departure till they reach to the university.",
      image: "../../assets/img/About_us_Icons/Our_Services/6.-Departure.png"
    },
    
  ]
  ngOnInit() {
    this.RegistrationFrom1 = this.fb.group({
      cCandidateName: ["", Validators.required],
      cEmail: ["", [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      cMobile: ["", [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
    });
  }

}

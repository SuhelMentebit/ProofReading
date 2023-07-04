import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import {FormBuilder, FormControl,FormGroup,Validators} from '@angular/forms'
import { DomSanitizer, Meta, Title } from '@angular/platform-browser';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Router } from "@angular/router";
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {


  loginForm = new FormGroup({
     text: new FormControl('',Validators.required),
     email: new FormControl('',Validators.required),
     number: new FormControl('',Validators.required),
     textarea: new FormControl('',Validators.required)  
  })
  get text(){return this.loginForm.get('text')}
  get email(){return this.loginForm.get('email')}
  get number(){return this.loginForm.get('number')}
  get textarea(){return this.loginForm.get('textarea')}

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
 this.http.get(`https://bizcallcrmforms.com/response.php?cCandidateName=${cCandidateName}&cEmail=${cEmail}&cMobile=${cMobile}&cLinkName=https://www.selectyouruniversity.com/contact-us&cCity=Na&cCourse=Na&section=insertdetails`)
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
      { rel: "canonical", href: "https://www.selectyouruniversity.com/contact-us" },
      // { rel: "alternate", href: "https://www.selectyouruniversity.com", hreflang :'en-Us'  }
    ]
    links.forEach(lik => {
      let link: HTMLLinkElement = this.dom.createElement('link');
      this.dom.head.appendChild(link);
      link.setAttribute(lik.rel, lik.href);
    });
    let metas:any =[
      { name: "title", content: "Contact Us - Select Your University" },
      { name: "description", content: "Have any query regarding study abroad? Call us now for details information. Our experts counceller will guide you." },
    ]
    this.title.setTitle('Contact Us - Select Your University')
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
    
  }

}

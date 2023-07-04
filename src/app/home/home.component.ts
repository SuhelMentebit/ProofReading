import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { DomSanitizer, Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ApiService } from '../api.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { PopupFormComponent } from '../popup-form/popup-form.component';
import { FormComponent } from '../form/form.component';
import * as blogData from "../blog/blogData";
// import * as newsData from "../news/newsData"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  modalRef: BsModalRef;
  data: any = blogData.blogdata
  // dataNews:any = newsData.newsdata
  allBlog = []
  latestNews = []
  useEmail:any
  DomainOfCourse:any=[]
  popularCountries:any=[]
  TrendingExams:any=[]
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
        items: 1,
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
  carouselOptions2:OwlOptions  = {
    margin: 0,
    nav: true,
    navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
    // responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
        margin: 10
      },
      600: {
        items: 1,
        nav: true,
        margin: 10
      },
      1000: {
        items: 3,
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
  images2 = [
    {
      text: "Canada",
      image: "../../assets/img/Home Page/5. Study Destination/Study-in-Canada.png"
    },
    {
      text: "UK",
      image: "../../assets/img/Home Page/5. Study Destination/Study-in-UK.png"
    },
    {
      text: "USA",
      image: "../../assets/img/Home Page/5. Study Destination/Study-in-USA.png"
    },


  ]
  images = [
    {
      text: "Department of Higher Education (DHE) in the Ministry of Education. Central Universities are those universi-ties that are founded by an Act of Parliament, and these universities have been categorized under the",
      image: "../../assets/img/colg.png"
    },
    {
      text: "Department of Higher Education (DHE) in the Ministry of Education. Central Universities are those universi-ties that are founded by an Act of Parliament, and these universities have been categorized under the",
      image: "../../assets/img/colg.png"
    },
    {
      text: "Department of Higher Education (DHE) in the Ministry of Education. Central Universities are those universi-ties that are founded by an Act of Parliament, and these universities have been categorized under the",
      image: "../../assets/img/colg.png"
    },
    {
      text: "Department of Higher Education (DHE) in the Ministry of Education. Central Universities are those universi-ties that are founded by an Act of Parliament, and these universities have been categorized under the",
      image: "../../assets/img/colg.png"
    },
    {
      text: "Department of Higher Education (DHE) in the Ministry of Education. Central Universities are those universi-ties that are founded by an Act of Parliament, and these universities have been categorized under the",
      image: "../../assets/img/colg.png"
    },
    {
      text: "Department of Higher Education (DHE) in the Ministry of Education. Central Universities are those universi-ties that are founded by an Act of Parliament, and these universities have been categorized under the",
      image: "../../assets/img/colg.png"
    },
    {
      text: "Department of Higher Education (DHE) in the Ministry of Education. Central Universities are those universi-ties that are founded by an Act of Parliament, and these universities have been categorized under the",
      image: "../../assets/img/colg.png"
    },
    {
      text: "Department of Higher Education (DHE) in the Ministry of Education. Central Universities are those universi-ties that are founded by an Act of Parliament, and these universities have been categorized under the",
      image: "../../assets/img/colg.png"
    }
  ]


  constructor(public modalService: BsModalService,
    private title: Title,
    private meta: Meta,
    private api: ApiService,
    private sanitizer: DomSanitizer,
    private router: Router,
    @Inject(DOCUMENT) private dom
  ) {
    let links = [
      { rel: "canonical", href: "https://www.selectyouruniversity.com " },
      // { rel: "alternate", href: "https://www.selectyouruniversity.com", hreflang :'en-Us'  }
    ]
    links.forEach(lik => {
      let link: HTMLLinkElement = this.dom.createElement('link');
      this.dom.head.appendChild(link);
      link.setAttribute(lik.rel, lik.href);
    });
    let metas:any =[
      { name: "title", content: "Select Your University - India's Top Education Consultancy" },
      { name: "description", content: "Select Your University is the top education consultants in India providing top courses like MBBS, MBA & Engineering for students who want to study in India & abroad." },
    ]
    metas.forEach(element => {
      this.meta.addTag(element);
    });
    // this.title.setTitle(titles)
  }

  ngOnInit() {
    const seconds = 3;
    setTimeout(() => {
      this.openModal();
    }, seconds * 1000);
    this.getLatestNews()
    this.getDomainOfCourse()
    this.getpopularCountries()
    this.getTrendingExams()
    
    this.data.forEach(bg => {
      bg.forEach(b => {
          this.allBlog.push(b)
        });
      });
     this.allBlog.sort(function(a, b) {
       // convert date object into number to resolve issue in typescript
       return  +new Date(b.date) - +new Date(a.date);
      })
      this.latestBlog=  this.allBlog.splice(0, 10)
      console.log('this.latestBlog: ', this.latestBlog);
  }

  public openModal() {
    this.modalRef = this.modalService.show(PopupFormComponent,{
      animated: false
    });
  }



  getLatestNews(){
    this.api.getAll('syudynamicnews').subscribe((res:any)=>{
      this.latestNews=res.object
    })
  }

getDomainOfCourse(){
  this.api.getAll('section=indexpagecourse').subscribe((res:any)=>{
    this.DomainOfCourse=res.data
  })
}  

getpopularCountries(){
  this.api.getAll('section=indexpagecountries').subscribe((res:any)=>{
    this.popularCountries=res.data
  })
}

getTrendingExams(){
  this.api.getAll('section=indexpageexams').subscribe((res:any)=>{
    this.TrendingExams=res.data

  })
}

goToLink(){
  window.open('https://calendly.com/selectyouruniversity/syu-counselling-for-students', "_blank");
}
makeActive(tab: any) {
  this.router.navigate(['blog/' + tab])
}

public signUp=false;
singinUp(){
  console.log('this.useEmail: ', this.useEmail);
  // let data =
  //   {
  //     "nSrNo":0,
  //     "AllocatedTo":1,
  //     "cEmail":this.useEmail,
  //     "cISDCode":"null",
  //     "cCandidateFName":"null",
  //     "cCountryOfCitizenship":"null",
  //     "cGender":"null",
  //     "cParentISDCode":"null",
  //     "cStatus":"null"
  // }
  
  // this.api.create('syudstudentmaster/info', data).subscribe((res)=>{
  //   console.log('res: ', res);
  this.api.getAll(`section=indexinsertemail&cEmail=${this.useEmail}`).subscribe((res)=>{
    console.log('res: ', res);

  })
  setTimeout(()=>{
    this.signUp=true;
  })
}


}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-study-abroad',
  templateUrl: './study-abroad.component.html',
  styleUrls: ['./study-abroad.component.scss']
})
export class StudyAbroadComponent implements OnInit {
  isReadMore = true
  showText() {
    this.isReadMore = !this.isReadMore
 }
  constructor() { }
  carouselOptions2 = {
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
  ngOnInit() {
  }

}

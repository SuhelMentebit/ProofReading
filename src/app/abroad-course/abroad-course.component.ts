import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
@Component({
  selector: 'app-abroad-course',
  templateUrl: './abroad-course.component.html',
  styleUrls: ['./abroad-course.component.scss']
})
export class AbroadCourseComponent implements OnInit {
  @ViewChild('stickyNav', { static: true }) navTabs: ElementRef;
  @ViewChild('stickyDiv', { static: true }) talkExpertDiv: ElementRef;
  isReadMore:any = true
  sticky: boolean = false;
  stickyDiv: boolean = false;
  activeTab: string = 'tab1';
  elementPosition: any;
  elementPosition1: any;
  isShade:any = true
  constructor(private viewportScroller: ViewportScroller) { }
  public onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }
  showText() {
    this.isReadMore = !this.isReadMore
    this.isShade = !this.isShade
  }
  isActive(tabName:any){
    return this.activeTab === tabName;
  }

  makeActive(tab:any){
    this.activeTab = tab;
    window.scroll({ 
      top: 250, 
      left: 0, 
      behavior: 'smooth' 
    });
  }
  makeActiveTab(tab:any) {
    this.activeTab = tab;
  }
  scrollToElement($element:any): void {
    console.log($element);
    $element.scrollIntoView({behavior: "smooth"});
  }
  carouselOptions2 = {
    margin: 0,
    nav: true,
    // navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
    navText:["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    responsiveClass: true,
    loop:true,
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
        loop: true
      },
      1500: {
        items: 3,
        nav: true,
        loop: true
      }
    }
  }
  images2 = [
    {
      text: "MBBS In USA",
      image: "../../assets/img/Study_Content_Icons/7.Explore_more_destination/Image.png"
    },
    {
      text: "MBBS In USA",
      image: "../../assets/img/Study_Content_Icons/7.Explore_more_destination/Image.png"
    },
    {
      text: "MBBS In USA",
      image: "../../assets/img/Study_Content_Icons/7.Explore_more_destination/Image.png"
    },
    {
      text: "MBBS In USA",
      image: "../../assets/img/Study_Content_Icons/7.Explore_more_destination/Image.png"
    },
    {
      text: "MBBS In USA",
      image: "../../assets/img/Study_Content_Icons/7.Explore_more_destination/Image.png"
    },
    {
      text: "MBBS In USA",
      image: "../../assets/img/Study_Content_Icons/7.Explore_more_destination/Image.png"
    },
    
    
  ]
  ngOnInit() {
    this.makeActiveTab('info');
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

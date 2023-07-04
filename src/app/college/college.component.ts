import { Component, OnInit } from '@angular/core';
// import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation,NgxGalleryLayout } from 'ngx-gallery';
import { GalleryItem, ImageItem } from 'ng-gallery';
import { ViewportScroller } from '@angular/common';
import { AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from '@kolkov/ngx-gallery';
@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.scss']
})
export class CollegeComponent implements OnInit {
  @ViewChild('stickyNav', { static: true }) navTabs: ElementRef;
  @ViewChild('stickyDiv', { static: true }) talkExpertDiv: ElementRef;
  isReadMore = true
  isShade = true
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  sticky: boolean = false;
  stickyDiv: boolean = false;
  activeTab: string = 'tab1';
  elementPosition: any;
  elementPosition1:any
  displayBasic: boolean;
  posturl


  isActive(tabName){
    return this.activeTab === tabName;
  }

  makeActive(tab){
    this.activeTab = tab;
    window.scroll({ 
      top: 425, 
      left: 0, 
      behavior: 'smooth' 
    });
  }
  makeActiveTab(tab) {
    this.activeTab = tab;
  }
  showBasicDialog() {
    this.displayBasic = true;
}

  showText() {
    this.isReadMore = !this.isReadMore
    this.isShade = !this.isShade
  }
  constructor(private viewportScroller: ViewportScroller,private router: Router,
    ) { }


  public onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }
  
  images2: GalleryItem[];
  scrollToElement($element): void {
    // console.log($element);
    $element.scrollIntoView({behavior: "smooth"});
  }
  ngOnInit() {
    this.posturl=this.router['location']._platformLocation.location.origin+this.router.url
    // this.posturl="https://crunchify.com/list-of-all-social-sharing-urls-for-handy-reference-social-media-sharing-buttons-without-javascript/"
    this.makeActiveTab('info');
    this.images2 = [
      new ImageItem({ src: '../../assets/img/BG.jpg', thumb: '../../assets/img/BG.jpg' }),
      new ImageItem({ src: '../../assets/img/BG.jpg', thumb: '../../assets/img/BG.jpg' }),
      // ... more items
    ];
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

  }

  galleriaImages : [
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
  responsiveOptions:any[] = [
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
  ngAfterViewInit(){
    this.elementPosition = this.navTabs.nativeElement.offsetTop;
    this.elementPosition1 = this.talkExpertDiv.nativeElement.offsetTop;
  }
  @HostListener('window:scroll')
    handleScroll(){
    const windowScroll = window.pageYOffset;
      
    if (windowScroll >= this.elementPosition) {
        
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

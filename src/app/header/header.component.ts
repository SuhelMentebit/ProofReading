import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('stickyMenu', { static: true }) menuElement: ElementRef;
  @ViewChild('stickyMenu1', {static: true}) menuElement1: ElementRef;

  stickytopmenu: boolean = false;
  stickytopmenuLogo: boolean = false;
  customHeight = false
  mtCustom: boolean = false;
  elementPosition: any;
  elementPosition1: any;
  collapsed = true;
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
    this.customHeight = !this.customHeight
  }
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit(){
    this.elementPosition = this.menuElement.nativeElement.offsetTop;
    this.elementPosition1 = this.menuElement1.nativeElement.offsetTop;

  }
  @HostListener('window:scroll')
    handleScroll(){
      const windowScroll = window.pageYOffset;
      if(windowScroll >= this.elementPosition){
        this.stickytopmenu = true;
        this.stickytopmenuLogo = true;
        this.mtCustom = true
        // #faq-tab .ui-tabview.ui-tabview-top > .ui-tabview-nav
    }
    if(windowScroll <= this.elementPosition){
        this.stickytopmenu = false;
      this.stickytopmenuLogo = false;
      this.mtCustom = false
    }
    if(windowScroll >= this.elementPosition1){
      this.stickytopmenu = true;
      this.stickytopmenuLogo = true;
  }
  if(windowScroll <= this.elementPosition1){
      this.stickytopmenu = false;
    this.stickytopmenuLogo = false;
    }
    }
  
}

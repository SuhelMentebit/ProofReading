import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
  ViewChild,
} from "@angular/core";
declare var $: any;
import { Router, NavigationEnd } from "@angular/router";
@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"],
})
export class NavComponent implements OnInit {
  @ViewChild("zeynep", { static: true }) menu!: ElementRef;
  @ViewChild("toggleButton", { static: true }) toggleButton!: ElementRef;

  zeynep: any;
  showdiv1: any = true;
  showdiv2: any = false;
  showdiv3: any = false;
  showdiv4: any = false;
  showdiv5: any = false;
  showdiv6: any = false;
  showdiv7: any = false;
  showdiv8: any = false;
  showdiv9: any = false;
  showdiv10: any = false;
  showdiv11: any = false;
  showdiv11a: any = false;
  showdiv11b: any = false;
  showdiv12: any = false;
  showdiv13: any = false;
  showdiv14: any = false;
  showdiv15: any = false;
  showdiv16: any = false;
  showdiv17: any = false;
  showdiv18: any = false;
  showdiv19: any = false;
  showdiv20: any = false;
  showdiv21: any = false;
  showdiv22: any = false;
  showdiv23: any = false;
  showdiv24: any = false;
  showdiv25: any = false;
  showdiv26: any = false;
  showdiv27: any = false;
  showdiv28: any = false;
  showdiv29: any = false;
  checkoverlay: any;
  bgClass:any;
  showMenu: boolean;
  menuState: any;
  menuToggle: any;
  alreadyopened: boolean;
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      // filter `NavigationEnd` events
      if (event instanceof NavigationEnd) {
        // get current route without leading slash `/`
        const eventUrl = /(?<=\/).+/.exec(event.urlAfterRedirects);
        const currentRoute = (eventUrl || []).join("");
        // set bgClass property with the value of the current route
        this.bgClass = currentRoute;
      }
    });
  }

  ngOnInit() {

   // submenu-header
   
   this.alreadyopened = false; 
   const submenuHeader = document.getElementsByClassName("submenu-header");
   for (let i = 0; i < submenuHeader.length; i++) {
    submenuHeader[i].addEventListener('click', function(e) {
      e.stopPropagation();
      const elementHeader = e.currentTarget as HTMLInputElement;
      
     
      this.alreadyopened = true; 
      elementHeader.classList.add('alreadyopened');
        elementHeader.closest('.opened').classList.remove('opened');   
       
    })
   }
    const classname = document.getElementsByClassName("has-submenu");
    for (let i = 0; i < classname.length; i++) {
      classname[i].addEventListener('click', function(e) {
         
          const element = e.currentTarget as HTMLInputElement  
          var classList = 'classList' in element;
          var j=0;
          for (var i = 0; i < element.children.length; i++) {
            var child = element.children[i];      
               if (child.tagName == 'DIV' && this.alreadyopened!=true && j==0) {           
              if (child.classList.contains('alreadyopened')) {  
              }else{    
                  child.classList.add('opened');     
                  j++;                           
              } 
            }
          }
        
          
      });
  }
      
      
    //  this.zeynep = $(".zeynep").zeynep({
    //    load: function () {
    //      console.log("zeynepjs menu is successfully loaded");
    //    },
    //  });

    
    //  this.zeynep.on("closing", function () {
    //    console.log("guys, the side menu is closing");
    //  });
  }
  getHeaderStyle() {
    debugger;
    console.log(this.router.url);
    if (this.router.url.includes("home") || this.router.url.includes("/")) {
      return "menuTextTransparent";
    } else {
      return "menuTextblue";
    }
  }
  mouseEnter() {
    this.showdiv1 = true;
    this.showdiv2 = false;
    this.showdiv3 = false;
    this.showdiv4 = false;
    this.showdiv5 = false;
    this.showdiv6 = false;
    this.showdiv7 = false;
    this.showdiv8 = false;
    this.showdiv9 = false;
    this.showdiv10 = false;
    this.showdiv11 = false;
    this.showdiv11a = false;
    this.showdiv11b = false;
    this.showdiv12 = false;
    this.showdiv13 = false;
    this.showdiv14 = false;
    this.showdiv15 = false;
    this.showdiv16 = false;
    this.showdiv17 = false;
    this.showdiv18 = false;
    this.showdiv19 = false;
    this.showdiv20 = false;
    this.showdiv21 = false;
    this.showdiv22 = false;
    this.showdiv23 = false;
    this.showdiv24 = false;
    this.showdiv25 = false;
    this.showdiv26 = false;
    this.showdiv27 = false;
    this.showdiv28 = false;
    this.showdiv29 = false;
  }

  mouseEnter2() {
    this.showdiv1 = false;
    this.showdiv2 = true;
    this.showdiv3 = false;
    this.showdiv4 = false;
    this.showdiv5 = false;
    this.showdiv6 = false;
    this.showdiv7 = false;
    this.showdiv8 = false;
    this.showdiv9 = false;
    this.showdiv10 = false;
    this.showdiv11 = false;
    this.showdiv11a = false;
    this.showdiv11b = false;
    this.showdiv12 = false;
    this.showdiv13 = false;
    this.showdiv14 = false;
    this.showdiv15 = false;
    this.showdiv16 = false;
    this.showdiv17 = false;
    this.showdiv18 = false;
    this.showdiv19 = false;
    this.showdiv20 = false;
    this.showdiv21 = false;
    this.showdiv22 = false;
    this.showdiv23 = false;
    this.showdiv24 = false;
    this.showdiv25 = false;
    this.showdiv26 = false;
    this.showdiv27 = false;
    this.showdiv28 = false;
    this.showdiv29 = false;
    this.showdiv29 = false;
  }
  mouseEnter3() {
    this.showdiv1 = false;
    this.showdiv2 = false;
    this.showdiv3 = true;
    this.showdiv4 = false;
    this.showdiv5 = false;
    this.showdiv6 = false;
    this.showdiv7 = false;
    this.showdiv8 = false;
    this.showdiv9 = false;
    this.showdiv10 = false;
    this.showdiv11 = false;
    this.showdiv11a = false;
    this.showdiv11b = false;
    this.showdiv12 = false;
    this.showdiv13 = false;
    this.showdiv14 = false;
    this.showdiv15 = false;
    this.showdiv16 = false;
    this.showdiv17 = false;
    this.showdiv18 = false;
    this.showdiv19 = false;
    this.showdiv20 = false;
    this.showdiv21 = false;
    this.showdiv22 = false;
    this.showdiv23 = false;
    this.showdiv24 = false;
    this.showdiv25 = false;
    this.showdiv26 = false;
    this.showdiv27 = false;
    this.showdiv28 = false;
    this.showdiv29 = false;
  }
  mouseEnter4() {
    this.showdiv1 = false;
    this.showdiv2 = false;
    this.showdiv3 = false;
    this.showdiv4 = true;
    this.showdiv5 = false;
    this.showdiv6 = false;
    this.showdiv7 = false;
    this.showdiv8 = false;
    this.showdiv9 = false;
    this.showdiv10 = false;
    this.showdiv11 = false;
    this.showdiv11a = false;
    this.showdiv11b = false;
    this.showdiv12 = false;
    this.showdiv13 = false;
    this.showdiv14 = false;
    this.showdiv15 = false;
    this.showdiv16 = false;
    this.showdiv17 = false;
    this.showdiv18 = false;
    this.showdiv19 = false;
    this.showdiv20 = false;
    this.showdiv21 = false;
    this.showdiv22 = false;
    this.showdiv23 = false;
    this.showdiv24 = false;
    this.showdiv25 = false;
    this.showdiv26 = false;
    this.showdiv27 = false;
    this.showdiv28 = false;
    this.showdiv29 = false;
  }
  mouseEnter5() {
    this.showdiv1 = true;
    this.showdiv2 = false;
    this.showdiv3 = false;
    this.showdiv4 = false;
    this.showdiv5 = true;
    this.showdiv6 = false;
    this.showdiv7 = false;
    this.showdiv8 = false;
    this.showdiv9 = false;
    this.showdiv10 = false;
    this.showdiv11 = false;
    this.showdiv11a = false;
    this.showdiv11b = false;
    this.showdiv12 = false;
    this.showdiv13 = false;
    this.showdiv14 = false;
    this.showdiv15 = false;
    this.showdiv16 = false;
    this.showdiv17 = false;
    this.showdiv18 = false;
    this.showdiv19 = false;
    this.showdiv20 = false;
    this.showdiv21 = false;
    this.showdiv22 = false;
    this.showdiv23 = false;
    this.showdiv24 = false;
    this.showdiv25 = false;
    this.showdiv26 = false;
    this.showdiv27 = false;
    this.showdiv28 = false;
    this.showdiv29 = false;
  }
  mouseEnter6() {
    this.showdiv1 = true;
    this.showdiv2 = false;
    this.showdiv3 = false;
    this.showdiv4 = false;
    this.showdiv5 = false;
    this.showdiv6 = true;
    this.showdiv7 = false;
    this.showdiv8 = false;
    this.showdiv9 = false;
    this.showdiv10 = false;
    this.showdiv11 = false;
    this.showdiv11a = false;
    this.showdiv11b = false;
    this.showdiv12 = false;
    this.showdiv13 = false;
    this.showdiv14 = false;
    this.showdiv15 = false;
    this.showdiv16 = false;
    this.showdiv17 = false;
    this.showdiv18 = false;
    this.showdiv19 = false;
    this.showdiv20 = false;
    this.showdiv21 = false;
    this.showdiv22 = false;
    this.showdiv23 = false;
    this.showdiv24 = false;
    this.showdiv25 = false;
    this.showdiv26 = false;
    this.showdiv27 = false;
    this.showdiv28 = false;
    this.showdiv29 = false;
  }
  mouseEnter7() {
    this.showdiv1 = false;
    this.showdiv2 = true;
    this.showdiv3 = false;
    this.showdiv4 = false;
    this.showdiv5 = false;
    this.showdiv6 = false;
    this.showdiv7 = true;
    this.showdiv8 = false;
    this.showdiv9 = false;
    this.showdiv10 = false;
    this.showdiv11 = false;
    this.showdiv11a = false;
    this.showdiv11b = false;
    this.showdiv12 = false;
    this.showdiv13 = false;
    this.showdiv14 = false;
    this.showdiv15 = false;
    this.showdiv16 = false;
    this.showdiv17 = false;
    this.showdiv18 = false;
    this.showdiv19 = false;
    this.showdiv20 = false;
    this.showdiv21 = false;
    this.showdiv22 = false;
    this.showdiv23 = false;
    this.showdiv24 = false;
    this.showdiv25 = false;
    this.showdiv26 = false;
    this.showdiv27 = false;
    this.showdiv28 = false;
    this.showdiv29 = false;
  }
  mouseEnter8() {
    this.showdiv1 = false;
    this.showdiv2 = true;
    this.showdiv3 = false;
    this.showdiv4 = false;
    this.showdiv5 = false;
    this.showdiv6 = false;
    this.showdiv7 = false;
    this.showdiv8 = true;
    this.showdiv9 = false;
    this.showdiv10 = false;
    this.showdiv11 = false;
    this.showdiv11a = false;
    this.showdiv11b = false;
    this.showdiv12 = false;
    this.showdiv13 = false;
    this.showdiv14 = false;
    this.showdiv15 = false;
    this.showdiv16 = false;
    this.showdiv17 = false;
    this.showdiv18 = false;
    this.showdiv19 = false;
    this.showdiv20 = false;
    this.showdiv21 = false;
    this.showdiv22 = false;
    this.showdiv23 = false;
    this.showdiv24 = false;
    this.showdiv25 = false;
    this.showdiv26 = false;
    this.showdiv27 = false;
    this.showdiv28 = false;
    this.showdiv29 = false;
  }
  mouseEnter9() {
    this.showdiv1 = false;
    this.showdiv2 = true;
    this.showdiv3 = false;
    this.showdiv4 = false;
    this.showdiv5 = false;
    this.showdiv6 = false;
    this.showdiv7 = false;
    this.showdiv8 = false;
    this.showdiv9 = true;
    this.showdiv10 = false;
    this.showdiv11 = false;
    this.showdiv11a = false;
    this.showdiv11b = false;
    this.showdiv12 = false;
    this.showdiv13 = false;
    this.showdiv14 = false;
    this.showdiv15 = false;
    this.showdiv16 = false;
    this.showdiv17 = false;
    this.showdiv18 = false;
    this.showdiv19 = false;
    this.showdiv20 = false;
    this.showdiv21 = false;
    this.showdiv22 = false;
    this.showdiv23 = false;
    this.showdiv24 = false;
    this.showdiv25 = false;
    this.showdiv26 = false;
    this.showdiv27 = false;
    this.showdiv28 = false;
    this.showdiv29 = false;
  }
  mouseEnter10() {
    this.showdiv1 = false;
    this.showdiv2 = true;
    this.showdiv3 = false;
    this.showdiv4 = false;
    this.showdiv5 = false;
    this.showdiv6 = false;
    this.showdiv7 = false;
    this.showdiv8 = false;
    this.showdiv9 = false;
    this.showdiv10 = true;
    this.showdiv11 = false;
    this.showdiv11a = false;
    this.showdiv11b = false;
    this.showdiv12 = false;
    this.showdiv13 = false;
    this.showdiv14 = false;
    this.showdiv15 = false;
    this.showdiv16 = false;
    this.showdiv17 = false;
    this.showdiv18 = false;
    this.showdiv19 = false;
    this.showdiv20 = false;
    this.showdiv21 = false;
    this.showdiv22 = false;
    this.showdiv23 = false;
    this.showdiv24 = false;
    this.showdiv25 = false;
    this.showdiv26 = false;
    this.showdiv27 = false;
    this.showdiv28 = false;
    this.showdiv29 = false;
  }
  mouseEnter11() {
    this.showdiv1 = false;
    this.showdiv2 = true;
    this.showdiv3 = false;
    this.showdiv4 = false;
    this.showdiv5 = false;
    this.showdiv6 = false;
    this.showdiv7 = false;
    this.showdiv8 = false;
    this.showdiv9 = false;
    this.showdiv10 = false;
    this.showdiv11 = true;
    this.showdiv11a = false;
    this.showdiv11b = false;
    this.showdiv12 = false;
    this.showdiv13 = false;
    this.showdiv14 = false;
    this.showdiv15 = false;
    this.showdiv16 = false;
    this.showdiv17 = false;
    this.showdiv18 = false;
    this.showdiv19 = false;
    this.showdiv20 = false;
    this.showdiv21 = false;
    this.showdiv22 = false;
    this.showdiv23 = false;
    this.showdiv24 = false;
    this.showdiv25 = false;
    this.showdiv26 = false;
    this.showdiv27 = false;
    this.showdiv28 = false;
    this.showdiv29 = false;
  }

  mouseEnter11a() {
    this.showdiv1 = false;
    this.showdiv2 = true;
    this.showdiv3 = false;
    this.showdiv4 = false;
    this.showdiv5 = false;
    this.showdiv6 = false;
    this.showdiv7 = false;
    this.showdiv8 = false;
    this.showdiv9 = false;
    this.showdiv10 = false;
    this.showdiv11 = false;
    this.showdiv11a = true;
    this.showdiv11b = false;
    this.showdiv12 = false;
    this.showdiv13 = false;
    this.showdiv14 = false;
    this.showdiv15 = false;
    this.showdiv16 = false;
    this.showdiv17 = false;
    this.showdiv18 = false;
    this.showdiv19 = false;
    this.showdiv20 = false;
    this.showdiv21 = false;
    this.showdiv22 = false;
    this.showdiv23 = false;
    this.showdiv24 = false;
    this.showdiv25 = false;
    this.showdiv26 = false;
    this.showdiv27 = false;
    this.showdiv28 = false;
    this.showdiv29 = false;
  }

  mouseEnter11b() {
    this.showdiv1 = false;
    this.showdiv2 = true;
    this.showdiv3 = false;
    this.showdiv4 = false;
    this.showdiv5 = false;
    this.showdiv6 = false;
    this.showdiv7 = false;
    this.showdiv8 = false;
    this.showdiv9 = false;
    this.showdiv10 = false;
    this.showdiv11 = false;
    this.showdiv11a = false;
    this.showdiv11b = true;
    this.showdiv12 = false;
    this.showdiv13 = false;
    this.showdiv14 = false;
    this.showdiv15 = false;
    this.showdiv16 = false;
    this.showdiv17 = false;
    this.showdiv18 = false;
    this.showdiv19 = false;
    this.showdiv20 = false;
    this.showdiv21 = false;
    this.showdiv22 = false;
    this.showdiv23 = false;
    this.showdiv24 = false;
    this.showdiv25 = false;
    this.showdiv26 = false;
    this.showdiv27 = false;
    this.showdiv28 = false;
    this.showdiv29 = false;
  }

  mouseEnter12() {
    this.showdiv1 = false;
    this.showdiv2 = false;
    this.showdiv3 = true;
    this.showdiv4 = false;
    this.showdiv5 = false;
    this.showdiv6 = false;
    this.showdiv7 = false;
    this.showdiv8 = false;
    this.showdiv9 = false;
    this.showdiv10 = false;
    this.showdiv11 = false;
    this.showdiv11a = false;
    this.showdiv11b = false;
    this.showdiv12 = true;
    this.showdiv13 = false;
    this.showdiv14 = false;
    this.showdiv15 = false;
    this.showdiv16 = false;
    this.showdiv17 = false;
    this.showdiv18 = false;
    this.showdiv19 = false;
    this.showdiv20 = false;
    this.showdiv21 = false;
    this.showdiv22 = false;
    this.showdiv23 = false;
    this.showdiv24 = false;
    this.showdiv25 = false;
    this.showdiv26 = false;
    this.showdiv27 = false;
    this.showdiv28 = false;
    this.showdiv29 = false;
  }

  mouseEnter13() {
    this.showdiv1 = false;
    this.showdiv2 = false;
    this.showdiv3 = true;
    this.showdiv4 = false;
    this.showdiv5 = false;
    this.showdiv6 = false;
    this.showdiv7 = false;
    this.showdiv8 = false;
    this.showdiv9 = false;
    this.showdiv10 = false;
    this.showdiv11 = false;
    this.showdiv11a = false;
    this.showdiv11b = false;
    this.showdiv12 = false;
    this.showdiv13 = true;
    this.showdiv14 = false;
    this.showdiv15 = false;
    this.showdiv16 = false;
    this.showdiv17 = false;
    this.showdiv18 = false;
    this.showdiv19 = false;
    this.showdiv20 = false;
    this.showdiv21 = false;
    this.showdiv22 = false;
    this.showdiv23 = false;
    this.showdiv24 = false;
    this.showdiv25 = false;
    this.showdiv26 = false;
    this.showdiv27 = false;
    this.showdiv28 = false;
    this.showdiv29 = false;
  }

  mouseEnter14() {
    this.showdiv1 = false;
    this.showdiv2 = false;
    this.showdiv3 = true;
    this.showdiv4 = false;
    this.showdiv5 = false;
    this.showdiv6 = false;
    this.showdiv7 = false;
    this.showdiv8 = false;
    this.showdiv9 = false;
    this.showdiv10 = false;
    this.showdiv11 = false;
    this.showdiv11a = false;
    this.showdiv11b = false;
    this.showdiv12 = false;
    this.showdiv13 = false;
    this.showdiv14 = true;
    this.showdiv15 = false;
    this.showdiv16 = false;
    this.showdiv17 = false;
    this.showdiv18 = false;
    this.showdiv19 = false;
    this.showdiv20 = false;
    this.showdiv21 = false;
    this.showdiv22 = false;
    this.showdiv23 = false;
    this.showdiv24 = false;
    this.showdiv25 = false;
    this.showdiv26 = false;
    this.showdiv27 = false;
    this.showdiv28 = false;
    this.showdiv29 = false;
  }

  mouseEnter15() {
    this.showdiv1 = false;
    this.showdiv2 = false;
    this.showdiv3 = true;
    this.showdiv4 = false;
    this.showdiv5 = false;
    this.showdiv6 = false;
    this.showdiv7 = false;
    this.showdiv8 = false;
    this.showdiv9 = false;
    this.showdiv10 = false;
    this.showdiv11 = false;
    this.showdiv11a = false;
    this.showdiv11b = false;
    this.showdiv12 = false;
    this.showdiv13 = false;
    this.showdiv14 = false;
    this.showdiv15 = true;
    this.showdiv16 = false;
    this.showdiv17 = false;
    this.showdiv18 = false;
    this.showdiv19 = false;
    this.showdiv20 = false;
    this.showdiv21 = false;
    this.showdiv22 = false;
    this.showdiv23 = false;
    this.showdiv24 = false;
    this.showdiv25 = false;
    this.showdiv26 = false;
    this.showdiv27 = false;
    this.showdiv28 = false;
    this.showdiv29 = false;
  }

  mouseEnter16() {
    this.showdiv1 = false;
    this.showdiv2 = false;
    this.showdiv3 = true;
    this.showdiv4 = false;
    this.showdiv5 = false;
    this.showdiv6 = false;
    this.showdiv7 = false;
    this.showdiv8 = false;
    this.showdiv9 = false;
    this.showdiv10 = false;
    this.showdiv11 = false;
    this.showdiv11a = false;
    this.showdiv11b = false;
    this.showdiv12 = false;
    this.showdiv13 = false;
    this.showdiv14 = false;
    this.showdiv15 = false;
    this.showdiv16 = true;
    this.showdiv17 = false;
    this.showdiv18 = false;
    this.showdiv19 = false;
    this.showdiv20 = false;
    this.showdiv21 = false;
    this.showdiv22 = false;
    this.showdiv23 = false;
    this.showdiv24 = false;
    this.showdiv25 = false;
    this.showdiv26 = false;
    this.showdiv27 = false;
    this.showdiv28 = false;
    this.showdiv29 = false;
  }

  mouseEnter17() {
    this.showdiv1 = false;
    this.showdiv2 = false;
    this.showdiv3 = true;
    this.showdiv4 = false;
    this.showdiv5 = false;
    this.showdiv6 = false;
    this.showdiv7 = false;
    this.showdiv8 = false;
    this.showdiv9 = false;
    this.showdiv10 = false;
    this.showdiv11 = false;
    this.showdiv11a = false;
    this.showdiv11b = false;
    this.showdiv12 = false;
    this.showdiv13 = false;
    this.showdiv14 = false;
    this.showdiv15 = false;
    this.showdiv16 = false;
    this.showdiv17 = true;
    this.showdiv18 = false;
    this.showdiv19 = false;
    this.showdiv20 = false;
    this.showdiv21 = false;
    this.showdiv22 = false;
    this.showdiv23 = false;
    this.showdiv24 = false;
    this.showdiv25 = false;
    this.showdiv26 = false;
    this.showdiv27 = false;
    this.showdiv28 = false;
    this.showdiv29 = false;
  }

  mouseEnter18() {
    this.showdiv1 = false;
    this.showdiv2 = false;
    this.showdiv3 = true;
    this.showdiv4 = false;
    this.showdiv5 = false;
    this.showdiv6 = false;
    this.showdiv7 = false;
    this.showdiv8 = false;
    this.showdiv9 = false;
    this.showdiv10 = false;
    this.showdiv11 = false;
    this.showdiv11a = false;
    this.showdiv11b = false;
    this.showdiv12 = false;
    this.showdiv13 = false;
    this.showdiv14 = false;
    this.showdiv15 = false;
    this.showdiv16 = false;
    this.showdiv17 = false;
    this.showdiv18 = true;
    this.showdiv19 = false;
    this.showdiv20 = false;
    this.showdiv21 = false;
    this.showdiv22 = false;
    this.showdiv23 = false;
    this.showdiv24 = false;
    this.showdiv25 = false;
    this.showdiv26 = false;
    this.showdiv27 = false;
    this.showdiv28 = false;
    this.showdiv29 = false;
  }

  mouseEnter19() {
    this.showdiv1 = false;
    this.showdiv2 = false;
    this.showdiv3 = true;
    this.showdiv4 = false;
    this.showdiv5 = false;
    this.showdiv6 = false;
    this.showdiv7 = false;
    this.showdiv8 = false;
    this.showdiv9 = false;
    this.showdiv10 = false;
    this.showdiv11 = false;
    this.showdiv11a = false;
    this.showdiv11b = false;
    this.showdiv12 = false;
    this.showdiv13 = false;
    this.showdiv14 = false;
    this.showdiv15 = false;
    this.showdiv16 = false;
    this.showdiv17 = false;
    this.showdiv18 = false;
    this.showdiv19 = true;
    this.showdiv20 = false;
    this.showdiv21 = false;
    this.showdiv22 = false;
    this.showdiv23 = false;
    this.showdiv24 = false;
    this.showdiv25 = false;
    this.showdiv26 = false;
    this.showdiv27 = false;
    this.showdiv28 = false;
    this.showdiv29 = false;
  }

  mouseEnter20() {
    this.showdiv1 = false;
    this.showdiv2 = false;
    this.showdiv3 = true;
    this.showdiv4 = false;
    this.showdiv5 = false;
    this.showdiv6 = false;
    this.showdiv7 = false;
    this.showdiv8 = false;
    this.showdiv9 = false;
    this.showdiv10 = false;
    this.showdiv11 = false;
    this.showdiv11a = false;
    this.showdiv11b = false;
    this.showdiv12 = false;
    this.showdiv13 = false;
    this.showdiv14 = false;
    this.showdiv15 = false;
    this.showdiv16 = false;
    this.showdiv17 = false;
    this.showdiv18 = false;
    this.showdiv19 = false;
    this.showdiv20 = true;
    this.showdiv21 = false;
    this.showdiv22 = false;
    this.showdiv23 = false;
    this.showdiv24 = false;
    this.showdiv25 = false;
    this.showdiv26 = false;
    this.showdiv27 = false;
    this.showdiv28 = false;
    this.showdiv29 = false;
  }

  mouseEnter21() {
    this.showdiv1 = false;
    this.showdiv2 = false;
    this.showdiv3 = true;
    this.showdiv4 = false;
    this.showdiv5 = false;
    this.showdiv6 = false;
    this.showdiv7 = false;
    this.showdiv8 = false;
    this.showdiv9 = false;
    this.showdiv10 = false;
    this.showdiv11 = false;
    this.showdiv11a = false;
    this.showdiv11b = false;
    this.showdiv12 = false;
    this.showdiv13 = false;
    this.showdiv14 = false;
    this.showdiv15 = false;
    this.showdiv16 = false;
    this.showdiv17 = false;
    this.showdiv18 = false;
    this.showdiv19 = false;
    this.showdiv20 = false;
    this.showdiv21 = true;
    this.showdiv22 = false;
    this.showdiv23 = false;
    this.showdiv24 = false;
    this.showdiv25 = false;
    this.showdiv26 = false;
    this.showdiv27 = false;
    this.showdiv28 = false;
    this.showdiv29 = false;
  }

  mouseEnter22() {
    this.showdiv1 = false;
    this.showdiv2 = false;
    this.showdiv3 = true;
    this.showdiv4 = false;
    this.showdiv5 = false;
    this.showdiv6 = false;
    this.showdiv7 = false;
    this.showdiv8 = false;
    this.showdiv9 = false;
    this.showdiv10 = false;
    this.showdiv11 = false;
    this.showdiv11a = false;
    this.showdiv11b = false;
    this.showdiv12 = false;
    this.showdiv13 = false;
    this.showdiv14 = false;
    this.showdiv15 = false;
    this.showdiv16 = false;
    this.showdiv17 = false;
    this.showdiv18 = false;
    this.showdiv19 = false;
    this.showdiv20 = false;
    this.showdiv21 = false;
    this.showdiv22 = true;
    this.showdiv23 = false;
    this.showdiv24 = false;
    this.showdiv25 = false;
    this.showdiv26 = false;
    this.showdiv27 = false;
    this.showdiv28 = false;
    this.showdiv29 = false;
  }

  mouseEnter23() {
    this.showdiv1 = false;
    this.showdiv2 = false;
    this.showdiv3 = true;
    this.showdiv4 = false;
    this.showdiv5 = false;
    this.showdiv6 = false;
    this.showdiv7 = false;
    this.showdiv8 = false;
    this.showdiv9 = false;
    this.showdiv10 = false;
    this.showdiv11 = false;
    this.showdiv11a = false;
    this.showdiv11b = false;
    this.showdiv12 = false;
    this.showdiv13 = false;
    this.showdiv14 = false;
    this.showdiv15 = false;
    this.showdiv16 = false;
    this.showdiv17 = false;
    this.showdiv18 = false;
    this.showdiv19 = false;
    this.showdiv20 = false;
    this.showdiv21 = false;
    this.showdiv22 = false;
    this.showdiv23 = true;
    this.showdiv24 = false;
    this.showdiv25 = false;
    this.showdiv26 = false;
    this.showdiv27 = false;
    this.showdiv28 = false;
    this.showdiv29 = false;
  }

  mouseEnter24() {
    this.showdiv1 = false;
    this.showdiv2 = false;
    this.showdiv3 = true;
    this.showdiv4 = false;
    this.showdiv5 = false;
    this.showdiv6 = false;
    this.showdiv7 = false;
    this.showdiv8 = false;
    this.showdiv9 = false;
    this.showdiv10 = false;
    this.showdiv11 = false;
    this.showdiv11a = false;
    this.showdiv11b = false;
    this.showdiv12 = false;
    this.showdiv13 = false;
    this.showdiv14 = false;
    this.showdiv15 = false;
    this.showdiv16 = false;
    this.showdiv17 = false;
    this.showdiv18 = false;
    this.showdiv19 = false;
    this.showdiv20 = false;
    this.showdiv21 = false;
    this.showdiv22 = false;
    this.showdiv23 = false;
    this.showdiv24 = true;
    this.showdiv25 = false;
    this.showdiv26 = false;
    this.showdiv27 = false;
    this.showdiv28 = false;
    this.showdiv29 = false;
  }

  mouseEnter25() {
    this.showdiv1 = false;
    this.showdiv2 = false;
    this.showdiv3 = true;
    this.showdiv4 = false;
    this.showdiv5 = false;
    this.showdiv6 = false;
    this.showdiv7 = false;
    this.showdiv8 = false;
    this.showdiv9 = false;
    this.showdiv10 = false;
    this.showdiv11 = false;
    this.showdiv11a = false;
    this.showdiv11b = false;
    this.showdiv12 = false;
    this.showdiv13 = false;
    this.showdiv14 = false;
    this.showdiv15 = false;
    this.showdiv16 = false;
    this.showdiv17 = false;
    this.showdiv18 = false;
    this.showdiv19 = false;
    this.showdiv20 = false;
    this.showdiv21 = false;
    this.showdiv22 = false;
    this.showdiv23 = false;
    this.showdiv24 = false;
    this.showdiv25 = true;
    this.showdiv26 = false;
    this.showdiv27 = false;
    this.showdiv28 = false;
    this.showdiv29 = false;
  }

  mouseEnter26() {
    this.showdiv1 = false;
    this.showdiv2 = false;
    this.showdiv3 = true;
    this.showdiv4 = false;
    this.showdiv5 = false;
    this.showdiv6 = false;
    this.showdiv7 = false;
    this.showdiv8 = false;
    this.showdiv9 = false;
    this.showdiv10 = false;
    this.showdiv11 = false;
    this.showdiv11a = false;
    this.showdiv11b = false;
    this.showdiv12 = false;
    this.showdiv13 = false;
    this.showdiv14 = false;
    this.showdiv15 = false;
    this.showdiv16 = false;
    this.showdiv17 = false;
    this.showdiv18 = false;
    this.showdiv19 = false;
    this.showdiv20 = false;
    this.showdiv21 = false;
    this.showdiv22 = false;
    this.showdiv23 = false;
    this.showdiv24 = false;
    this.showdiv25 = false;
    this.showdiv26 = true;
    this.showdiv27 = false;
    this.showdiv28 = false;
    this.showdiv29 = false;
  }

  mouseEnter27() {
    this.showdiv1 = true;
    this.showdiv2 = false;
    this.showdiv3 = false;
    this.showdiv4 = false;
    this.showdiv5 = false;
    this.showdiv6 = false;
    this.showdiv7 = false;
    this.showdiv8 = false;
    this.showdiv9 = false;
    this.showdiv10 = false;
    this.showdiv11 = false;
    this.showdiv11a = false;
    this.showdiv11b = false;
    this.showdiv12 = false;
    this.showdiv13 = false;
    this.showdiv14 = false;
    this.showdiv15 = false;
    this.showdiv16 = false;
    this.showdiv17 = false;
    this.showdiv18 = false;
    this.showdiv19 = false;
    this.showdiv20 = false;
    this.showdiv21 = false;
    this.showdiv22 = false;
    this.showdiv23 = false;
    this.showdiv24 = false;
    this.showdiv25 = false;
    this.showdiv26 = false;
    this.showdiv27 = true;
    this.showdiv28 = false;
    this.showdiv29 = false;
  }

  mouseEnter28() {
    this.showdiv1 = true;
    this.showdiv2 = false;
    this.showdiv3 = false;
    this.showdiv4 = false;
    this.showdiv5 = false;
    this.showdiv6 = false;
    this.showdiv7 = false;
    this.showdiv8 = false;
    this.showdiv9 = false;
    this.showdiv10 = false;
    this.showdiv11 = false;
    this.showdiv11a = false;
    this.showdiv11b = false;
    this.showdiv12 = false;
    this.showdiv13 = false;
    this.showdiv14 = false;
    this.showdiv15 = false;
    this.showdiv16 = false;
    this.showdiv17 = false;
    this.showdiv18 = false;
    this.showdiv19 = false;
    this.showdiv20 = false;
    this.showdiv21 = false;
    this.showdiv22 = false;
    this.showdiv23 = false;
    this.showdiv24 = false;
    this.showdiv25 = false;
    this.showdiv26 = false;
    this.showdiv27 = false;
    this.showdiv28 = true;
    this.showdiv29 = false;
  }

  mouseEnter29() {
    this.showdiv1 = false;
    this.showdiv2 = false;
    this.showdiv3 = true;
    this.showdiv4 = false;
    this.showdiv5 = false;
    this.showdiv6 = false;
    this.showdiv7 = false;
    this.showdiv8 = false;
    this.showdiv9 = false;
    this.showdiv10 = false;
    this.showdiv11 = false;
    this.showdiv11a = false;
    this.showdiv11b = false;
    this.showdiv12 = false;
    this.showdiv13 = false;
    this.showdiv14 = false;
    this.showdiv15 = false;
    this.showdiv16 = false;
    this.showdiv17 = false;
    this.showdiv18 = false;
    this.showdiv19 = false;
    this.showdiv20 = false;
    this.showdiv21 = false;
    this.showdiv22 = false;
    this.showdiv23 = false;
    this.showdiv24 = false;
    this.showdiv25 = false;
    this.showdiv26 = false;
    this.showdiv27 = false;
    this.showdiv28 = false;
    this.showdiv29 = true;
  }

  mouseLeave() {
    this.showdiv1 = false;
    this.showdiv2 = true;
    this.showdiv3 = false;
    this.showdiv4 = false;
    this.showdiv5 = false;
    this.showdiv6 = false;
    this.showdiv7 = false;
    this.showdiv8 = false;
    this.showdiv9 = false;
    this.showdiv10 = false;
    this.showdiv11 = false;
    this.showdiv11a = false;
    this.showdiv11b = false;
    this.showdiv12 = false;
    this.showdiv13 = false;
    this.showdiv14 = false;
    this.showdiv15 = false;
    this.showdiv16 = false;
    this.showdiv17 = false;
    this.showdiv18 = false;
    this.showdiv19 = false;
    this.showdiv20 = false;
    this.showdiv21 = false;
    this.showdiv22 = false;
    this.showdiv23 = false;
    this.showdiv24 = false;
    this.showdiv25 = false;
    this.showdiv26 = false;
    this.showdiv27 = false;
    this.showdiv28 = false;
    this.showdiv29 = false;
  }

  mouseLeave3(event: any) {}

 

  open() { 
    this.menuToggle = document.getElementById('menuToggle');
    if (this.menuToggle.classList.contains == 'opened') {
      this.menuToggle.classList.remove('opened');
    } else {
      this.menuToggle.classList.add('opened');
    }
 
    
    
    
    if (typeof window != 'undefined' && window.document) {
      document.body.style.overflow = 'hidden';
  }
    this.checkoverlay = true;
  }

  close() { 

    this.menuToggle = document.getElementById('menuToggle');
    if (this.menuToggle.classList.contains == 'opened') {
      this.menuToggle.classList.add('opened');
    } else {
      this.menuToggle.classList.remove('opened');
    }
   // this.zeynep.close();
    document.body.style.overflow = 'unset';
    this.checkoverlay = false;
   // this.zeynep.destroy()


  }

  getclass(data: any) {}

  navbarfixed: boolean = false;
  navbarlogo: boolean = false;
  @HostListener("window:scroll") onscroll() {
    if (window.scrollY > 110) {
      this.navbarfixed = true;
      this.navbarlogo = true;
    } else {
      this.navbarfixed = false;
      this.navbarlogo = false;
    }
  }
}
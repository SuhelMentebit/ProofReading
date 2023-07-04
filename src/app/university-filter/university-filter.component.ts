import { DOCUMENT } from '@angular/common';
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DomSanitizer, Meta, Title } from '@angular/platform-browser';
import { Location } from '@angular/common';
import {
  ActivatedRoute,
  NavigationEnd,
  NavigationStart,
  Router,
  UrlSegment,
  UrlSegmentGroup,
} from '@angular/router';
import { filter } from 'rxjs/operators';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-university-filter',
  templateUrl: './university-filter.component.html',
  styleUrls: ['./university-filter.component.scss'],
})
export class UniversityFilterComponent implements OnInit {
  collapsed = true;
  accordionSelected: boolean = true;
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }
  collegesList = [];
  // emails = [
  //   { email: "MBA/PGDM(1882)" },
  //   { email: "BSc" },
  //   { email: "BE/B.Tech(1334)" },
  //   { email: "M.Sc.(1350)" },
  //   { email: "BBA/BBM (1883)" },
  //   { email: "BA (1276)" },
  //   { email: "MBA/PGDM(1882)" },
  //   { email: "B.Sc.(1882)" },
  //   { email: "BBA/BBM (1883)" },
  // ];
  emails = [
    { email: 'MBA' },
    { email: 'BSc' },
    { email: 'BE' },
    { email: 'M.Sc' },
    { email: 'BBA/BBM' },
    { email: 'BA' },
    { email: 'MBA' },
    { email: 'B.Sc.' },
    { email: 'BBA' },
  ];
  stateList = [];
  // streamList = [
  //   { email: 'MBA', isSelected: false },
  //   { email: 'BSc', isSelected: false },
  //   { email: 'BE', isSelected: false },
  //   { email: 'M.Sc', isSelected: false },
  //   { email: 'BBABBM', isSelected: false },
  //   { email: 'BA', isSelected: false },
  //   // { email: "MBA", isSelected: false },
  //   // { email: "B.Sc.", isSelected: false },
  //   // { email: "BBA", isSelected: false },
  // ];
  streamList = [];
  studyAbroadList = [
    { email: 'MBA', isSelected: false },
    { email: 'BSc', isSelected: false },
    { email: 'BE', isSelected: false },
    { email: 'M.Sc', isSelected: false },
    { email: 'BBABBM', isSelected: false },
    { email: 'BA', isSelected: false },
    // { email: "MBA", isSelected: false },
    // { email: "B.Sc.", isSelected: false },
    // { email: "BBA", isSelected: false },
  ];
  universityTypeList = [
    { email: 'MBA', isSelected: false },
    { email: 'BSc', isSelected: false },
    { email: 'BE', isSelected: false },
    { email: 'M.Sc', isSelected: false },
    { email: 'BBABBM', isSelected: false },
    { email: 'BA', isSelected: false },
    // { email: "MBA", isSelected: false },
    // { email: "B.Sc.", isSelected: false },
    // { email: "BBA", isSelected: false },
  ];
  averageFeesList = [
    { email: 'MBA', isSelected: false },
    { email: 'BSc', isSelected: false },
    { email: 'BE', isSelected: false },
    { email: 'M.Sc', isSelected: false },
    { email: 'BBABBM', isSelected: false },
    { email: 'BA', isSelected: false },
    // { email: "MBA", isSelected: false },
    // { email: "B.Sc.", isSelected: false },
    // { email: "BBA", isSelected: false },
  ];
  courseList = [];
  courseTypeList = [];
  programTypeList = [];
  entranceExamList = [];
  cityList = [];
  courseDurationList = [];

  paths = [];
  myForm: FormGroup;
  data = '';
  selectedData = {};
  constructor(
    private fb: FormBuilder,
    private title: Title,
    private meta: Meta,
    private sanitizer: DomSanitizer,
    @Inject(DOCUMENT) private dom,
    private _location: Location,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public api: ApiService
  ) {
    let links = [
      {
        rel: 'canonical',
        href: 'https://www.selectyouruniversity.com/university',
      },
      // { rel: "alternate", href: "https://www.selectyouruniversity.com", hreflang :'en-Us'  }
    ];
    links.forEach((lik) => {
      let link: HTMLLinkElement = this.dom.createElement('link');
      this.dom.head.appendChild(link);
      link.setAttribute(lik.rel, lik.href);
    });
    let metas: any = [
      { name: 'title', content: 'List of Top Universities in India & Abroad' },
      {
        name: 'description',
        content:
          'Get admission to MBBS, MBA, and Engineering in top universities in India and abroad. Click here for the list of top universities worldwide. ',
      },
    ];
    this.title.setTitle('List of Top Universities in India & Abroad');
    metas.forEach((element) => {
      this.meta.addTag(element);
    });


    activatedRoute.url.subscribe((url) => {
      console.log(url, 'activatedRoute');
      this.paths = url;
      for (let index = 0; index < url.length; index++) {
        const element = url[index];
        console.log(element.path);
        // this.selectDataFromLink(this.streamList, element.path, 'email');
        // this.selectDataFromLink(this.stateList, element.path, 'cStateName');
      }
    });
    this.router.events
    .pipe(
      filter(e => e instanceof NavigationEnd)
    )
    .subscribe( (navEnd:NavigationEnd) => {
      console.log(navEnd.urlAfterRedirects);
    });


    this.activatedRoute.queryParams.subscribe((params) => {
      console.log(params, 'url queryParams');

      // let productid = params['productid'];
      // let color = params['color'];

      // console.log(productid);// OUTPUT 1534
      // console.log(color);// OUTPUT red
    });

    // const currentPath = this._location.path();
    // const data = currentPath && currentPath.split('/');
    // const finalUrl = this.router.getCurrentNavigation()?.finalUrl;
    // const PRIMARY_OUTLET = "primary";
    // const g: UrlSegmentGroup = finalUrl.root.children[PRIMARY_OUTLET];
    // const s: UrlSegment[] = g.segments; // returns 2 segments 'team' and '33'
    // console.log(g.children[PRIMARY_OUTLET]); // returns 2 segments 'user' and 'victor'
    // console.log(g.children['support']); // return 1 segment 'help'
    // console.log(currentPath,  finalUrl);
    // if (data.length >=3 && data[1] == 'india') {
    //   this.getAllData(data[2]);
    // }

  }

  selectDataFromLink(array, linkText, keyname) {
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      if (element[keyname] == linkText) {
        array[index].isSelected = true;
      }
    }
  }
  ngOnInit() {
    this.getData();
    // this.getCity();
    // this.getAllData();
    this.myForm = this.fb.group({
      useremail: this.fb.array([]),
    });
    if (
      /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      // true for mobile device
      console.log('mobile device');
      this.accordionSelected = false;
    } else {
      // false for not mobile device
      console.log('not mobile device');
      this.accordionSelected = true;
    }
  }

  // url creation
  updateData(event, value, type) {
    this.selectedData[type] = value;
    let url = 'india';

    if (event.target.checked) {
      if (type == 'City') {
        this.data += value + ',';
        this.selectedData['City'] = this.data;
      } else {
        this.selectedData[type] = value;
      }
    } else {
      if (type == 'City') {
        this.data = this.data.replace(value + ',', '');
        this.selectedData['City'] = this.data;
      } else {
        this.selectedData[type] = '';
      }
    }

    for (let key in this.selectedData) {
      console.log(key, this.selectedData[key]);
      if ((key == 'stream' || key == 'state') && this.selectedData[key]) {
        const temp = this.selectedData[key].replace(' ', '-') + '-colleges';
        url += ('/' + temp).trim();
        this.getAllData(this.selectedData[key]);
      } else if (key == 'City' && this.selectedData[key]) {
        url += this.updateQueryParam(url, 'city_id=', this.selectedData, key);
      } else if (key == 'ProgramType' && this.selectedData[key]) {
        url += this.updateQueryParam(url, 'course_duration=', this.selectedData, key);
      } else if (key == 'universityTypeList' && this.selectedData[key]) {
        url += this.updateQueryParam(url, 'type_of_college=', this.selectedData, key);
      } else if (key == 'EntranceExamType' && this.selectedData[key]) {
        url += this.updateQueryParam(url, 'exam_id=', this.selectedData, key);
      } else if (key == 'averageFeesType' && this.selectedData[key]) {
        url += this.updateQueryParam(url, 'fees=', this.selectedData, key);
      } else if (key == 'CourseType' && this.selectedData[key]) {
        url += this.updateQueryParam(url, 'course_type=', this.selectedData, key);
      } else if (key == 'courseDuration' && this.selectedData[key]) {
        url += this.updateQueryParam(url, 'course_year=', this.selectedData, key);
      }
    }

    this.updateUrl(url.toLowerCase()+'/.');
  }

  updateQueryParam(url, param, onk, key) {
    const subStrArr = [
      'city_id',
      'course_duration',
      'type_of_college',
      'exam_id',
      'fees',
      'course_type',
      'course_year',
    ];
    let containsAllSubStrs = subStrArr.some((subStr) =>
      url.includes(subStr + '=')
    );
    const addParam = containsAllSubStrs
      ? '&' + param + onk[key].trim()
      : param + onk[key].trim();
    const addQuestionMark = url.includes('?') ? addParam : '?' + addParam;
    return addQuestionMark;
  }
  updateUrl(url: string) {
    this._location.replaceState(url);
  }

  updateList(list, event, value, key) {
    const listItems = JSON.parse(JSON.stringify(list));
    for (let index = 0; index < listItems.length; index++) {
      const c = listItems[index];
      if (c[key] == value) {
        c.isSelected = event.target.checked;
      } else {
        c.isSelected = false;
      }
    }

    // list.forEach((c) => c.isSelected = event.target.checked && c[key] == value);
    return listItems;
  }

  selectMultipleElem(list, event, value, key) {
    const listItems = JSON.parse(JSON.stringify(list));
    const da = [];
    for (let index = 0; index < listItems.length; index++) {
      const c = listItems[index];
      if (c[key] == value) {
        da.push(c[key]);
        c.isSelected = event.target.checked;
      } else {
        c.isSelected = c.isSelected ? c.isSelected : false;
      }
    }

    return listItems;
  }

  highlightItems(){
    const currentPath = this._location.path();
    const data = currentPath && currentPath.split('/');
    if (data.length >=3 && data[1] == 'india') {
      const updateVal = data[2].replace('-', ' ');
      const streamData = this.streamList.find(el => updateVal.includes(el.cStream.toLowerCase()));
      if (streamData) {
        this.getAllData(streamData.cStream);
        this.selectDataFromLink(this.streamList, streamData.cStream, 'cStream');
      }
    }
  }
  getData() {

    this.api.getAll('section=filtercollegestream').subscribe((res) => {
      const d = this.updateArr(res['data']);

      this.streamList = d;
      this.highlightItems();
    });

     // getCourses
    //  this.api.getAll('filtercollegestream').subscribe((res) => {

      // const d = this.updateArr(res['object']);

      // this.courseList = d;
    // });

    // this.api.getAll('cstatename').subscribe((res) => {
    //   const d = this.updateArr(res['object']);
    //   this.stateList = d;
    //   // this.selectDataFromLink(this.stateList, this.paths[1].path, 'cStateName');
    // });

    // // getCourses
    // this.api.getAll('collegemaster/ccourse').subscribe((res) => {
    //   const d = this.updateArr(res['object']);

    //   this.courseList = d;
    // });

    // // getCourseType
    // this.api.getAll('collegemaster/ccourselevel').subscribe((res) => {
    //   const d = this.updateArr(res['object']);

    //   this.courseTypeList = d;
    // });

    // this.api.getAll('collegemaster/cprogrammetype').subscribe((res) => {
    //   const d = this.updateArr(res['object']);

    //   this.programTypeList = d;
    // });

    // this.api.getAll('collegemaster/cextraexamname').subscribe((res) => {
    //   const d = this.updateArr(res['object']);

    //   this.entranceExamList = d;
    // });

    // this.api.getAll('collegemaster/cduration').subscribe((res) => {
    //   const d = this.updateArr(res['object']);

    //   this.courseDurationList = d;
    // });
  }


  // getCity() {
  //   this.api.getAll('collegemaster/ccityname').subscribe((res) => {
  //     const d = this.updateArr(res['object']);

  //     this.cityList = d;
  //   });
  // }

  updateArr(arr) {
    const addKey = arr.map((object) => {
      return { ...object, isSelected: false };
    });
    return addKey;
  }

  getAllData(val) {
    this.api.getAll(`section=filtercollegetypestream&stream=${val}`).subscribe((res) => {
      this.collegesList = res['data'];
    });
  }
}

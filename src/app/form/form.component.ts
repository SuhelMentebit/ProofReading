import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { ApiService } from "../api.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
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
  constructor(
    public bsModalRef: BsModalRef,
    public modalService: BsModalService,
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.RegistrationFrom1 = this.fb.group({
      cCandidateName: ["", Validators.required],
      cEmail: ["", [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      cMobile: ["", [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
    });
  }

  hide() {
    this.bsModalRef.hide();
  }

  get m() {
    return this.RegistrationFrom1.controls;
  }

  public submitForm1() {
    // if (this.RegistrationFrom1.valid) {
    //   this.form1 = false;
    //   this.form2 = true;
      // this.form3 = false
      // this.form4 = false
    //}
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
    this.http.get(`https://bizcallcrmforms.com/response.php?cCandidateName=${cCandidateName}&cEmail=${cEmail}&cMobile=${cMobile}&cLinkName=https://www.selectyouruniversity.com&cCity=Na&cCourse=Na&section=insertdetails`)
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

}

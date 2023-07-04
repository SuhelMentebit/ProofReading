import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-neet-rank-predictor",
  templateUrl: "./neet-rank-predictor.component.html",
  styleUrls: ["./neet-rank-predictor.component.scss"],
})
export class NeetRankPredictorComponent implements OnInit {
  quotas = [
    { id: "1", name: "Jamia Millia Islamia Dental(JMI) Quota" },
    { id: "2", name: "AMS" },
    { id: "3", name: "Muslim Minority Quota" },
    { id: "4", name: "B.Sc Nursing All India" },
    { id: "5", name: "Jamia Muslim Women Quota" },
    { id: "6", name: "DU" },
    { id: "7", name: "Open Seat Quota" },
    { id: "8", name: "Jamia Muslim Quota" },
    { id: "9", name: "MNG" },
    { id: "10", name: "AIQ" },
    { id: "11", name: "Non-Resident Indian" },
    { id: "12", name: "Internal - Puducherry UT Domicile" },
    { id: "13", name: "B.Sc Nursing Delhi NCR CW Quota" },
    { id: "14", name: "Delhi University Quota" },
    { id: "15", name: "CW" },
    { id: "16", name: "B.Sc Nursing Delhi NCR" },
    { id: "17", name: "BON" },
    { id: "18", name: "ANR" },
    { id: "19", name: "MM" },
    { id: "20", name: "JON" },
    { id: "21", name: "Delhi NCR Children/Wid ows of Personnel of the Armed Forces (CW) Quota" },
    { id: "22", name: "Non-Resident Indian(AMU)Quota" },
    { id: "23", name: "NRI" },
    { id: "24", name: "JNO" },
    { id: "25", name: "Aligarh Muslim University (AMU) Quota" },
    { id: "26", name: "Employees State Insurance Scheme(ESI)" },
    { id: "27", name: "AON" },
    { id: "28", name: "JEI" },
    { id: "29", name: "IP University Quota" },
    { id: "30", name: "JNR" },
    { id: "31", name: "All India" },
    { id: "32", name: "IP" },
    { id: "33", name: "MW" },
    { id: "34", name: "JI" },
    { id: "35", name: "Internal -Puducherry UT Domicile" },
    { id: "36", name: "B.Sc Nursing Delhi NCR CW  Quota" },
    { id: "37", name: "AMU" },
    { id: "38", name: "Jain Minority Quota" },
    { id: "39", name: "Deemed/Paid Seats Quota" },
    { id: "40", name: "Delhi NCR Children/Widows of Personnel of the Armed Forces (CW) Quota" },
    { id: "41", name: "JMQ" },
    { id: "42", name: "JM" },
  ];

  domiciles = [
    { id: "1", name: "Maharashtra" },
    { id: "2", name: "Madhya Pradesh" },
    { id: "3", name: "Tamil Nadu" },
    { id: "4", name: "Chhattisgarh" },
    { id: "5", name: "Haryana" },
    { id: "6", name: "Rajasthan" },
  ]
  constructor() {}

  ngOnInit(): void {}
}

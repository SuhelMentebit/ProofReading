//import * as studyAbroad from '../../assets/newsData/studyAbroad'
import * as exam from '../../assets/newsData/exam'
import * as general from '../../assets/newsData/general'
//import * as howtoGuide from '../../assets/newsData/howtoGuide'
//import * as career from '../../assets/newsData/career'
//import * as topCollegesUniversities from '../../assets/newsData/topCollegesUniversities'
//import * as neetCounselling from '../../assets/newsData/neetCounselling'

//const studyAbroads = studyAbroad.default
const exams = exam.default
const generals = general.default
//const howtoGuides = howtoGuide.default
//const careers = career.default
//const topCollegesUniversitiess = topCollegesUniversities.default
//const neetCounsellings =neetCounselling.default
const newsCategories =[
    //'Study Abroads', 
    'Exams', 
    'Generals',
    //'How To Guides',
    //'Careers',
    //'Top Colleges Universitiess',
    //'NEET Counselling'
]
//console.log('studyAbroad: ', studyAbroad);
const newsdata = [
    //studyAbroads, 
    exams, 
    generals,
    //howtoGuides,
    //careers,
    //topCollegesUniversitiess,
    //neetCounsellings
]
export { 
    newsdata, newsCategories
 }

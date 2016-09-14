/**
 * Created by lenovo on 2016/9/14.
 */

function Contack(){
    this.title = "";
    this.firstName = "";
    this.middleName = "";
    this.lastName = "";
    this.suffix = "";
    this.jobTitle = "";
    this.company = "";
    this.department = "";
    this.managerName = "";
    this.assistantName = "";
    this.homePhone = "";
    this.homeCellPhone = "";
    this.homeFAX = "";
    this.homePager = "";
    this.workPhone = "";
    this.workCellPhone = "";
    this.workFAX = "";
    this.workPager = "";
    this.homeEMail = "";
    this.homeWebSite = "";
    this.homeIMNickname = "";
    this.workEMail = "";
    this.workWebSite = "";
    this.workIMNickname = "";
    this.spouseName = "";
    this.childrenName = "";
    this.anniversary = "";
    this.birthday = "";
    this.highSchoolInfo = "";
    this.collegeInfo = "";
    this.custom1 = "";
    this.custom2 = "";
    this.homeAddressLine1 = "";
    this.homeAddressLine2 = "";
    this.homeCity = "";
    this.homeState = "";
    this.homeZipCode = "";
    this.workAddressLine1 = "";
    this.workAddressLine2 = "";
    this.workCity = "";
    this.workState = "";
    this.workZipCode = "";

    this.arrayIndex=-1;
    this.fieldArray=[
        "title", "firstName", "middleName", "lastName", "suffix", "jobTitle",
        "company", "department", "managerName", "assistantName", "homePhone",
        "homeCellPhone", "homeFAX", "homePager", "workPhone", "workCellPhone",
        "workFAX", "workPager", "homeEMail", "homeWebSite", "homeIMNickname",
        "workEMail", "workWebSite", "workIMNickname", "spouseName", "childrenName",
        "anniversary", "birthday", "highSchoolInfo", "collegeInfo", "custom1",
        "custom2", "homeAddressLine1", "homeAddressLine2", "homeCity", "homeState",
        "homeZipCode", "workAddressLine1", "workAddressLine2", "workCity",
        "workState", "workZipCode"
    ];

    this.populateContact=function(){
        for(var i=0;i<this.fieldArray.length;i++){
            var fieldValue=$(this.fieldArray[i]).value;
            this[this.fieldArray[i]]=fieldValue;
        }
    }

    this.populateScreen=function(){
        for(var i=0;i<this.fieldsArray.length;i++){
            $(this.fieldArray[i]).value=this[this.fieldArray[i]];
        }
    }

}

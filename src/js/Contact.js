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
            //首先是获取页面中的指定id的标签的value，然后将获取到的值存储到当前对象的指定名称的属性中，这样就像是一个字典结构。
            //其中上面的list作为字典的key，对象的属性作为指定key的value值
            var fieldValue=$(this.fieldArray[i]).value;
            this[this.fieldArray[i]]=fieldValue;
        }
    }

    this.populateScreen=function(){
        for(var i=0;i<this.fieldsArray.length;i++){
            $(this.fieldArray[i]).value=this[this.fieldArray[i]];
        }
    }
    this.toString=function(){
        var json="";
        for(var i=0; i<this.fieldsArray.length;i++){
            if(json!="{"){
                json+=", ";
            }
            json+="\""+this.fieldArray[i]+"\":\""+this[this.fieldArray[i]]+"\"";
        }
        json+=" }";
        return json;
    }


    this.restoreFromJSON=function(inJson){
        eval("json=("+inJson+")");//使用json字符串创建一个json对象
        for(var i=0; i<this.fieldArray.length;i++){
            this[this.fieldArray[i]]=json[this.fieldArray[i]];
        }

    }

}

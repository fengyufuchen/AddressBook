/**
 * Created by lenovo on 2016/9/14.
 */

function ContactManager(){

    this.eventHandlers=null;
    this.dataManager=null;
    this.currentTab="xx";
    this.currentContactIndex=-1;
    this.initTimer=-1;
    //该方法在onload事件中被调用
    this.init=function(){
        contactManager.eventHandlers=new EventHandlers();
        contactManager.eventHandlers.init();
        contactManager.dataManager=new DataManager();
        //500毫秒之后执行该方法
        this.initTimer=setTimeout("contactManager.initStorage()",500);
    }

}

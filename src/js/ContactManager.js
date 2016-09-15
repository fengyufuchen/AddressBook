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
        //500毫秒之后执行该方法,
        this.initTimer=setTimeout("contactManager.initStorage()",500);
    }
    //这个方法将会被不断的被调用。首先该方法第一次被调用是在上面的init方法中，然后首先检查dojo的存储有没有加载完成，如果没有
    //加载完成那么就会继续设置定时调用，知道dojo已经准备好。此时需要移除定时调用设置。
    this.initStorage=function(){
      //step1 判断
        if(dojo.storage.manager.isInitialized()){
            clearTimeOut(this.initTimer);
            contactManager.dataManager.init();//初始化数据管理器
            contactManager.displayContactList();//更新显示列表
            //display  none 表示不为被隐藏的对象保留其物理空间，也就是该对象在页面上彻底消失，通俗来说就是看不见也摸不到。
            // hidden表示即使对象在网页上不可见，但是该对象在网页上所占的空间没有改变，通俗来说就是看不见但是摸得到。
            $("divInitializing").style.disply="none";
            this.initTimer=null;//表示定时任务完成，这个定时任务主要是用于完成立即显示所有的联系人信息。

        }else{
            this.initTimer=setTimeout("contactManager.initStorage()",500);
        }
    }
//这个方法主要是用于显示联系人列表信息，每次删除，保存，等操作后都需要调用该方法进行重新显示
    this.displayContactList=function(){
        var contacts=this.dataManager.listContacts(this.currentTab);
        var html="";
        //使用div显示每一个联系人信息，并且需要给这个div设置监听事件
        var alt=false;
        for(var i=0;i<contacts.length;i++){
            //注意我们这里给每一个div标签添加了一个自定义标签属性indexNum属性和AltNum属性
            html+="<div indexNum\""+contacts[i].arrayIndex+"\"";
            html+="onMouseOver=\"contactManager.eventHandlers.clOver(this);\"";
            html+="onClick=\" contactManager.eventHandlers.clOut(this);\"";
            html+="onMouseOut=\"contactManager.doEditContact(this.getAttribute('indexNum'));\"";
            if(alt){
                 html+="class=\"cssContactListAlternate\" altRow=\"true\" >";
                alt=false;
            }else{
                html += "class=\"cssContactListNormal\" altRow=\"false\">";
                alt=true;
            }
            html += contacts[i].lastName + ", " + contacts[i].firstName;
            html += "</div>"
        }
        //更新显示
        $("contactList").innerHTML=html;
    }
    this.doSaveContact=function(){
        //我们的initTimer的主要任务就是在加载页面的时候立即获取已经存储好的数据然后将这些数据存放到DataManager的contacts中；做完这件事情之后我们才能够接下来存储新的数据
        // 我们存储新的联系人的时候会给每一个联系人设置索引，这个索引就是DataManager中list的长度
        if(this.initTimer==null){
            //表示数据已经恢复完成，可以正常进行存储数据
            if($("fistName").value==""||$("lastName").value==""){
                alert("fistName and LastName are required fields");
            }
            return false;
        }
        var contact=new Contact();
        //我们存储一个联系人信息有两种情况，第一种情况是要存储一个新的联系人,这个时候currentContactIndex值为-1
        //如果我们是修改已经存储过的联系人信息，那么此时的currentContactIndex表示的是你所选中的正在编辑修改的那个联系人的在数组中的index

        contact.arrayIndex=this.currentContactIndex;
        contact.populateContact();
    }
 //这个方法在联系人item被选中的时候将会被调用。
    //左侧的联系人列表其实是一个个的div，我们给每一个div（也就是每一个联系人）设置了onClick监听事件，每当选中的时候就会调用这个方法
    //监听的设置是在方法displayContactList中完成的
 this.doEditContact=function(inIndex){
    //及时记录当前选中修改的联系人索引
    this.currentContactIndex=inIndex;
    var contact=this.dataManager.getContact(inIndex);
    contact.populateScreen();
}




}

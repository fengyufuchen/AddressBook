/**
 * Created by lenovo on 2016/9/14.
 */

function DataManager(){
    //设置一个list引用，该引用用于保存联系人内容
    this.contacts=null;

    this.init=function(){
        this.contacts=new Array();
        // DataManager被创建的时候就需要及时更新当前选中的标签（all）对应的联系人列表
        this.restoreContacts();
    }

    //重新获取已经存储的数据
    this.restoreContacts=function(){
        //获取存储的数据
        var stroedContacts=dojo.storage.get("js_contact_manager_contacts");
        if(storedContacts){
                 var splitContacts=storedContacts.split("~>!<~");
                 for (var i=0; i<splitContacts.length;i++){
                     //首先是创建一个新的联系人对象，该对象用来保存封装从storage中读取到的数据
                     var contact=new Contact();
                     //将从数据库中读取的书库放到contact中，其中读取到的是一个json字符串
                     contact.restoreFromJSON(splitContacts[i]);
                     contact.arrayIndex=i;
                     this.contacts.push(contact);
                 }
        }
    }
    this.saveContact=function(inContact,inIndex){
        if(inIndex==-1){
            //存取一个新的联系人信息
            inContact.arrayIndex=this.contacts.length;
            this.contacts.push(inContact);
        }
        else {
            this.contacts[inIndex]=inContact;
        }
        this.persistContacts();
    }

    this.persistContacts=function(){
        var contactsString="";
        for (var i=0;i<this.contacts.length;i++){
            //我们要将这个保存联系人信息的list转为字符串进行持久化操作，此时需要依次遍历每一个联系人toString连接，需要注意的是
            //第一个联系人之前不需要使用分割符~>!<~
            if(contactsString!=""){
                contactsString+="~>!<~";
            }
            contactsString+=this.contacts[i];//调用了toString方法
        }
        try{
            dojo.storage.put("js_contact_manager_contacts",contactsString,this.saveHandler);
        }catch (e){
            alert(e);
        }
    }

    //这个方法是一个回调函数，该函数的引用被传递给dojo.storage当持久化过程结束的时候将会回调该函数用于通知当前持久化过程的状态（成功，等待还是失败）
    this.saveHandler=function(status,keyName,message){
        alert("status="+status+", key="+key+", message="+message);
        if(status==dojo.storage.FAILED){
            alert("a failure occured saving contact to Flash Storage"+message);
        }


    }
    //说明上面几个方法的调用关系：首先是contactManager调用dosaveContact-->dataManager.saveContact-->dataManager.persistContact--->dataManager.sageHandler

this.getContact=function(inIndex){
    return this.contacts[inIndex];

}
this.deleteContact=function(inIndex){
//从contact中删除从inIndex位置开始，1个元素，然后返回所删除的item的一个数组
    this.contacts.splice(inIndex,1);
    //对删除指定联系人之后的contact做持久化操作
    this.persistContacts();
    //重新设置每一个联系人的index顺序
    for(var i=0;i<this.contacts.length;i++){
        this.contacts[i].arrayIndex=i;
    }



}
this.listContacts=function(inCurrentTab){
    if(inCurrentTab=="XX"){
        //如果选中的但是all tab标签，那么就返回
        return  this.contacts;
    }
    else{
        var retArray=new Array();
        //标签为0-9，A-C，那么我们需要截取其中的A和c两个字符
        var start=inCurrentTab.substr(0,1).toUpperCase();//从0位置开始选取长度为1
        var end=inCurrentTab.substring(1.1).toUpperCase();
        for(var i=0;i<this.contacts.length;i++){
            var firstLetter=this.contacts[i].lastName.substr(0,1).toUpperCase();//首先我们选中联系人的姓名的第一个字符
            if(firstLetter>=start&&firstLetter<=end){
                retArray.push(this.contact[i]);
            }
        }
        return retArray;
    }


}

this.clearContacts=function(){
    dojo.storage.clear();
    this.contacts=new Array;
}



}

/**
 * Created by lenovo on 2016/9/14.
 */
function EventHandlers(){

    this.selectorImages=null;
    this.imageIDs=[   "sel_XX", "sel_09", "sel_ac", "sel_df", "sel_gi", "sel_jl",
        "sel_mo", "sel_pr", "sel_su", "sel_vx", "sel_yz"];


    this.init=function(){
        this.selectorImages=new Array();
        for(var i=0;i<this.imageIDs.length;i++){
            var sid=this.imageIDs[i];
            this.selectorImages[sid]=new Image();//将数组用作字典
            this.selectorImages[sid].src="./img/"+sid+".gif";
            this.selectorImages[sid+"_over"]=new Image();
            this.selectorImages[sid+"_over"].src="./img/"+sid+"_over.gif";
        }

        //开始给每一个input输入框设置监听事件，
        var inputFields=document.getElementsByTagName("input");
        for(i=0;i<inputFields.length;i++){
            inputFields[i].onfocus=this.ifFocus;//当获得焦点事将会调用的方法
            inputFields[i].onblur=this.ifBlur;
        }

    }

    thi.ifFocus=function(){

        //注意这里的this是指谁？？？外部的this肯定是表示了EventHandlers实例对象；但是我们把ifFocus引用的方法传递给了上面的init方法中的inputFields中的onfocus
        //所以真正被调用的时候实际上是inputField对象调用了这个方法，所以这里面的this表示inputField
        this.style.backgroundColor="#ffffa0";
    };
    this.ifBlur=function(){
        this.sytle.backgroundColor="#ffffff";
    };

    //在左边的页标签是使用Img标签处理的，并且我们给每一个标签设置了onMouseOver事件，所以当鼠标滑过的时候会出触发事件回调
    // onMouseOver=contactManager.eventHandlers.stOver(this)
    //上面的this是指谁？onMouseOver属性作为标签img的属性，引用了一个方法setOver，在调用的时候肯定是通过img对象调用它的onMouseOver方法
    //所以方法的参数this表示的是标签img对象，并且我们的setOver方法也是在onMouseOver中执行的，所以这里setOver方法内部中的this也表示标签img
    this.stOver=function(inTab){
        //注意该方法虽然定义在了EventHandlers内部，被stOver属性引用，但是并不是就说该方法内部的this一定会是Eventhandler对象
        //方法内部的this表示调用该方法的对象，该方法实际上是被img的onMouseOver属性引用了，并且实际也是被img调用，所以该方法内部锁的this会是img对象
        inTab.src=this.selectorImages[inTab.id+"_over"].src;
    }
     this.stOut=function(inTab){
         //inTab.id 的格式是：sel_09 substr()从指定下标开始截取指定书目的字符
      if(contactManager.currentTab!=inTab.id.substr(4,2)){
          inTab.src=this.selectorImages[inTab.id].src;
      }
  }
  this.stClick=function(inTab){

      for (var i=0;i<this.imageIDs.length;i++){
          var sid=this.imageIDs[i];
          $(sid).src=this.selectorImages[sid].src;
      }

      inTab.src=this.selectorImages[inTab.id+"_over"].src;

      contactManager.currentTab=inTab.id.substr(4,2);
      contactManager.displayContactList();//更新选中的标签对应的联系人列表


  }


}


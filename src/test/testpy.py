class Bird:
   song="Squaawk"
   def sing(self):
        print(self.song)


bird=Bird()
print(bird.song)

变量的访问，
JavaScript
  1. dd
  2.
  3. function Contack(){
  4.     this.title = "";
  5.     this.firstName = "";
  6.     this.middleName = "";
  7.     ;
  8.
  9.     this.arrayIndex=-1;
  10.     this.fieldArray=[
  11.         "title", "firstName", "middleName"    ];
  12.
  13.     this.populateContact=function(){
  14.         for(var i=0;i<this.fieldArray.length;i++){
  15.             var fieldValue=$(this.fieldArray[i]).value;
  16.             this[this.fieldArray[i]]=fieldValue;
  17.         }
  18.     }
  19.
  20. }
上面有背景色的部分对于实例对象访问变量的方式是  this[ "title"]这种形式。

var person = {
    name:'gogo'
}

一般来说，访问对象属性时都使用点表示法，这也是很多面向对象语言中通用的语法。不过在javascript中，也可以使用方括号表示法来访问对象的属性。
在使用方括号语法时，应该把属性以字符串的形式放在方括号中，如：
alert(person["name"]);                    //gogo
alert(person.name);                        //gogo

Python中：
Python中的方括号表示列表，方括号不能用来访问变量。变量的访问只能用点号
class Bird:
   song="Squaawk"
   def sing(self):
        print(self.song)
bird=Bird()
print(bird.song)


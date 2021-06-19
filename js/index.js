 // 获取id
 var box=document.getElementById('box');
 var wrap=document.getElementById('wrap');
 var left=document.getElementById('left');
 var right=document.getElementById('right');
 // a.children选择a的子级,得到的是一个类数组
 var list=document.getElementById('list').children;
 // 初始化变量
 var num=0;
 var timer;
 // 把重复代码封装起来
 function fn(){
     // 定时器
     timer=setInterval(function(){
         num++;
         if(num>8){
             num=0;
         }
         // ul移动  常量和变量中间使用+拼接
         box.style.transform='translate('+(-1080*num)+'px)';
         // 排他
         for(var i=0;i<list.length;i++){
             list[i].className='';
         }
         // 控制小圆点
         list[num].className='current'

     },1000)
 }
 fn()

 // 鼠标移入
 wrap.onmouseenter=function(){
     // 停止定时器
     clearInterval(timer)
 }
 // 鼠标移出
 wrap.onmouseleave=function(){
     fn()
 }

 // 小圆点绑定点击事件
 for(var n=0;n<list.length;n++){
     // 自定义属性,和图片移动联系起来
     list[n].zsh=n;
     list[n].onclick=function(){
          // 排他
         for(var i=0;i<list.length;i++){
             list[i].className='';

         }
         this.className='current'
         // 获取自定义属性
         num=this.zsh
         box.style.transform='translate('+(-1080*num)+'px)';
     }
 }
 // 点击右边的按钮
 right.onclick=function(){
         num++;
         if(num>8){
             num=0;
         }
         // ul移动  常量和变量中间使用+拼接
         box.style.transform='translate('+(-1080*num)+'px)';
         // 排他
         for(var i=0;i<list.length;i++){
             list[i].className='';
         }
         // 控制小圆点
         list[num].className='current'                   
 }
 // 点击左边的按钮
 left.onclick=function(){
         num--;
         if(num<0){
             num=8;
         }
         // ul移动  常量和变量中间使用+拼接
         box.style.transform='translate('+(-1080*num)+'px)';
         // 排他
         for(var i=0;i<list.length;i++){
             list[i].className='';
         }
         // 控制小圆点
         list[num].className='current'
    
 }
 // 通过标签名选择标签 选择所有标签名为li的标签 。类数组
       
 var aa=document.getElementsByTagName('p');
 var bb=document.getElementsByTagName('nav');
 // 通过标签名选择的标签，不能直接进行操作，需要选择到具体某一个进行操作
 // tags[0].style.color='red';
 for(var i=0;i<aa.length;i++){
     // 自定义属性值 选择标签.自定义属性=值
     aa[i].index=i;
     aa[i].onclick=function(){
         // 所有的标签，删除背景。排他
         for(var j=0;j<aa.length;j++){
             aa[j].style.background="none";
             // 隐藏标签
             bb[j].style.display="none"
         }
         // this代表用户当前操作的标签，事件源
         this.style.background='#FFFFFF';
         // 获取刚刚自定义的属性
         var n=this.index;
         // display:block显示标签
         bb[n].style.display='block'
     }
 }
 
var bth=document.getElementById("bth");
var txt=document.getElementById("txt");
var box=document.getElementById("box");
var year=new Date().getFullYear();
var month=new Date().getMonth()+1;
var date=new Date().getDate();
var set = document.getElementById('dd');
set.style.opacity='0'; 
set.onmouseout = function (){
    set.style.opacity='0'; 
}

set.onmouseover = function (){
    set.style.opacity='1';
}

bth.onclick=function(){
    if(txt.value==''){alert("请输入内容")}
    else{var val=txt.value;
        txt.value='';
    var tag=document.createElement('li');
    tag.innerHTML=`${val}
    <p>${year}-${month}-${date}</p>
<span class="del"  onclick="del(this)">X</span>`
box.appendChild(tag);}
    
}
function del(a){
    a.parentNode.parentNode.removeChild(a.parentNode)
}
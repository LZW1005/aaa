var tags=document.getElementsByTagName('lo');
var boxs=document.getElementsByTagName('div');
for(var i=0;i<tags.length;i++){
    tags[i].index=i;
        tags[i].onclick=function(){
            for(var j=0;j<tags.length;j++){
                tags[j].style.background="none";
                boxs[j].style.display="none"
            }
            this.style.background='block';
            var n=this.index;
            boxs[n].style.display='block'
        }
    }

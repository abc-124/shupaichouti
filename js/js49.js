var ct=document.getElementById('ct');
		var ctbox=ct.getElementsByClassName('ctbox');
		var title=ct.getElementsByClassName('title');
		var theight=470;
		var kheight=20;
		for( var i=0;i<title.length;i++){
			title[i].index=i;
			title[i].onclick=function(){
				for(var i=0;i<title.length;i++){
					if(i<=this.index){
						ctbox[i].style.top=i*kheight+'px';
					}else{
						ctbox[i].style.top=i*kheight+theight+'px';
					}
				}
			}
		}
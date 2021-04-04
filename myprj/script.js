		function HideButton()
		{
			if( document.querySelector("#chk").checked )
				document.querySelector(".butn_container").style.display="none" ;
			else
				document.querySelector(".butn_container").style.display="block" ;
		}

		window.onscroll=function(){
			document.querySelector(".move_to_top i").style.display="block" ;
		}

		setTimeout(helloFun,1000) ;
		setTimeout(iamFun,1500) ;
		setTimeout(mynameFun,2000) ;
		setTimeout(butFun,2500) ;

		function helloFun()
		{
			document.getElementById("hello").style.marginLeft="5px" ;
		}
		function iamFun()
		{
			document.getElementById("iam").style.marginLeft="5px" ;
		}
		function mynameFun()
		{
			document.getElementById("myname").style.marginLeft="5px" ;
		}
		function butFun()
		{
			document.getElementById("view_more").style.marginLeft="0px" ;
			document.querySelector(".wipe").style.marginLeft="0px" ;
		}
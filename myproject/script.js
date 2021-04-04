//  To change the togggle button from on to off and vice versa.

var toggleLink = document.getElementById("toggle-link");

toggleLink.addEventListener('click',function()
{
    var toggle = document.getElementById("toggle");
    var toggleClass = toggle.getAttribute("class");
    displayBlockNone("block");

    setTimeout(function()
    {
        if( toggleClass === "fa fa-toggle-off" )
            toggle.setAttribute("class","fa fa-toggle-on");
        else
            toggle.setAttribute("class","fa fa-toggle-off");

        Mode();
    },2000);
})

// to change from dark mode to light mode and vice versa.

function Mode()
{
    var mode = document.getElementById("mode") ;
    var outer = document.getElementsByClassName("outer") ;

    if(mode.getAttribute("class") === "container light-mode" )
    {
        mode.setAttribute("class","container dark-mode");
        document.body.style.background ="black";
        //outer[0].style.background = "rgba(0,0,0,0.5)";
    }
    else
    {
        mode.setAttribute("class","container light-mode");
        document.body.style.background ="white";
        //outer[0].style.background = "none";
    }
}

// Name animation.

setInterval(helloFun,1000);
setInterval(iamFun,1500);
setInterval(mynameFun,2500);

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

// a[4] is a 'mode' list content.
// to not change the color of 'mode' while hover.

var a = document.getElementsByTagName("a");
a[4].addEventListener('mouseover',function(){
    a[4].style.color="white";
});

    for(let i = 0 ; i < a.length ; i++ )
    {
        a[i].addEventListener('click',function(){
            document.getElementById("navicon1").setAttribute("class","fa fa-navicon") ;
            document.getElementById("navicon1").style.color = "white" ;
            displayBlockNone("block");
        });
    }

// to uncheck the checkbox when ul is clicked.
// to get rid of the bug.

var ul = document.getElementsByTagName('ul');
ul[0].addEventListener('click',function(){
    document.getElementById("navicon1").setAttribute("class","fa fa-navicon") ;
    document.getElementById("navicon1").style.color = "white" ;
    displayBlockNone("block");
});

// to change the navicon to 'x' icon when it is clicked and vice versa.

var chk = document.getElementById("chk");
chk.addEventListener('change',function()
{
    if(this.checked)        
    {
        document.getElementById("navicon1").setAttribute("class","fa fa-times") ;
        document.getElementById("navicon1").style.color = "red" ;
    }
    else
    {
        document.getElementById("navicon1").setAttribute("class","fa fa-navicon") ;
        document.getElementById("navicon1").style.color="white" ;
    }
})

// Dark mode animation.
// Toggle from sun and moon gif icons.

toggleLink.addEventListener('click',function()
{
    var sun = document.getElementById("sun") ;
    var moon = document.getElementById("moon") ;
    if( document.getElementById("toggle").getAttribute("class") === "fa fa-toggle-off" )
    {
        moon.style.display = "block" ;
        moon.style.animation = "animate 2s linear" ;
        setTimeout(function(){
            moon.style.display = "none" ;
        },1900) ;
    }
    else
    {
        sun.style.display = "block" ;
        sun.style.animation = "animate 2s linear" ;
        setTimeout(function(){
            sun.style.display = "none" ;
        },1900) ;
    }
    chk.checked = false ;
})

//  To get rid of the major bug.
//  to hide all the contents from the body when navicon is clicked.
//  Then to visible the contents in the body when 'x' is clicked.

document.getElementById("chk").addEventListener('click',function()
{
    if( chk.checked )    
        displayBlockNone("none");
    else
        displayBlockNone("block");
})

function displayBlockNone(x)    //  function that accept "display/block" parameter to decide visibility of contents.
{
    /*document.querySelector(".home").style.display = x;
    document.querySelector(".projects").style.display = x;
    document.querySelector(".about").style.display = x;
    document.querySelector(".contact").style.display = x;
    document.querySelector(".credits").style.display = x;
    document.querySelector(".subHeading1").style.display = x;
    document.querySelector(".subHeading2").style.display = x;
    document.querySelector(".subHeading3").style.display = x;
    document.querySelector(".subHeading4").style.display = x;
    document.querySelector(".bgimage").style.display = x; */
}

//  this is from projects section.
//  c/c++ , java;
//  to toggle between up arrow and down arrow icons when it is clicked.

var bankbox = document.getElementById("bankbox");
var bankicon = document.getElementById("bankicon");

var cquizbox = document.getElementById("cquizbox");
var cquizicon = document.getElementById("cquizicon");

var ticketbox = document.getElementById("ticketbox");
var ticketicon = document.getElementById("ticketicon");

var shopbox = document.getElementById("shopbox");
var shopicon = document.getElementById("shopicon");

var jquizbox = document.getElementById("jquizbox");
var jquizicon = document.getElementById("jquizicon");

var studentbox = document.getElementById("studentbox");
var studenticon =  document.getElementById("studenticon");

var web1box = document.getElementById("web1box");
var web1icon = document.getElementById("web1icon");

var android1box = document.getElementById("android1box");
var chaticon = document.getElementById("chaticon");

bankbox.addEventListener('click', function(){
    buttonChange(bankicon) ;
});

cquizbox.addEventListener('click', function(){
    buttonChange(cquizicon) ;
});

ticketbox.addEventListener('click', function(){
    buttonChange(ticketicon) ;
});

shopbox.addEventListener('click', function(){
    buttonChange(shopicon) ;
});

jquizbox.addEventListener('click', function(){
    buttonChange(jquizicon) ;
});

studentbox.addEventListener('click', function(){
    buttonChange(studenticon) ;
});

hillbox.addEventListener('click', function(){
    buttonChange(hillicon) ;
});

web1box.addEventListener('click', function(){
    buttonChange(web1icon) ;
});

android1box.addEventListener('click',function(){
    buttonChange(chaticon);
})

function buttonChange(icon)     //  It accepts the id of icon(up/down arrows) to toggle the up and down arrow icons.
{
    if( icon.getAttribute("class") === "fa fa-caret-down" )
        icon.setAttribute("class","fa fa-caret-up") ;
    else
        icon.setAttribute("class","fa fa-caret-down") ;
}

var bank = document.getElementsByName("bank");
var cImages = ['imgs/c1.jpg','imgs/c2.jpg','imgs/c3.jpg','imgs/c4.jpg','imgs/c5.jpg','imgs/c6.jpg','imgs/c7.jpg','imgs/c8.jpg'];

var cquiz = document.getElementsByName("cquiz");
var cquizImages = ['imgs/q1.jpg','imgs/q2.jpg','imgs/q3.jpg','imgs/q4.jpg','imgs/q5.jpg'];

var cticket = document.getElementsByName("cticket");
var cticketImages = ['imgs/t1.jpg','imgs/t2.jpg','imgs/t3.jpg','imgs/t4.jpg','imgs/t5.jpg','imgs/t6.jpg','imgs/t7.jpg','imgs/t8.jpg'];

var jshop = document.getElementsByName("jshop");
var jshopImages = ['imgs/shop1.jpg','imgs/shop2.jpg','imgs/shop3.jpg','imgs/shop4.jpg','imgs/shop5.jpg','imgs/shop6.jpg','imgs/shop7.jpg','imgs/shop8.jpg'];

var jhill = document.getElementsByName("jhill");
var jhillImages = ['imgs/hill1.jpg','imgs/hill2.jpg','imgs/hill3.jpg','imgs/hill4.jpg','imgs/hill5.jpg','imgs/hill6.jpg','imgs/hill7.jpg'];

var jstudent = document.getElementsByName("jstudent");
var jstudentImages = ['imgs/s1.jpg','imgs/s2.jpg','imgs/s3.jpg','imgs/s4.jpg','imgs/s5.jpg','imgs/s6.jpg','imgs/s7.jpg'];

var jquiz = document.getElementsByName("jquiz");
var jquizImages = ['imgs/sp1.jpg','imgs/sp2.jpg','imgs/sp3.jpg','imgs/sp4.jpg','imgs/sp5.jpg','imgs/sp6.jpg'];

var chat = document.getElementsByName("chat");
var chatImages = ['https://i.ibb.co/CWcWrQX/chat.jpg','https://i.ibb.co/4J82vst/chat-2.jpg','https://i.ibb.co/BGXKDgT/chat-3.jpg','https://i.ibb.co/zQgpkGN/chat-4.jpg','https://i.ibb.co/WPMnTX1/chat-5.jpg','https://i.ibb.co/QY82k8D/chat-6.jpg','https://i.ibb.co/PDFcGxw/chat-7.jpg','https://i.ibb.co/4K9YpZK/chat-8.jpg'];

var live = document.getElementsByName("live");
var liveImages = ['imgs/lc1.jpg','imgs/lc2.jpg','imgs/lc3.jpg','imgs/lc4.jpg','imgs/lc5.jpg'];

var sms = document.getElementsByName("sms");
var smsImages = ['imgs/sms1.jpg','imgs/sms2.jpg','imgs/sms3.jpg','imgs/sms4.jpg','imgs/sms5.jpg','imgs/sms6.jpg','imgs/sms7.jpg','imgs/sms8.jpg','imgs/sms9.jpg','imgs/sms10.jpg'
,'imgs/sms11.jpg','imgs/sms12.jpg','imgs/sms13.jpg','imgs/sms14.jpg','imgs/sms15.jpg','imgs/sms16.jpg','imgs/sms17.jpg','imgs/sms18.jpg','imgs/sms19.jpg','imgs/sms20.jpg'
,'imgs/sms21.jpg','imgs/sms22.jpg','imgs/sms23.jpg','imgs/sms24.jpg'];

EventListenerFun(bank);
EventListenerFun(cquiz);
EventListenerFun(cticket);
EventListenerFun(jshop);
EventListenerFun(jhill);
EventListenerFun(jstudent);
EventListenerFun(jquiz);
EventListenerFun(chat);
EventListenerFun(live);
EventListenerFun(sms);

function EventListenerFun(item)
{
    for(i = 0 ; i < item.length ; i++)
    {
        item[i].addEventListener('click',function(){
            slideChanger(item);
        });
    }
}

i = 0;

function slideChanger(item)
{
    for(i = 0 ; i < item.length ; i++)
    {
        if( item[i].checked )
        {
            if( item[i].getAttribute("id").includes("bank") )
                document.getElementById("bankimage").setAttribute("src",cImages[i]) ;

            else if( item[i].getAttribute("id").includes("cquiz") )
                document.getElementById("cquizimage").setAttribute("src",cquizImages[i]) ;

            else if( item[i].getAttribute("id").includes("cticket") )
                document.getElementById("cticketimage").setAttribute("src",cticketImages[i]) ;

            else if( item[i].getAttribute("id").includes("jshop") )
                document.getElementById("jshopimage").setAttribute("src",jshopImages[i]) ;

            else if( item[i].getAttribute("id").includes("jhill") )
                document.getElementById("jhillimage").setAttribute("src",jhillImages[i]) ;

            else if( item[i].getAttribute("id").includes("jstudent") )
                document.getElementById("jstudentimage").setAttribute("src",jstudentImages[i]) ;

            else if( item[i].getAttribute("id").includes("jquiz") )
                document.getElementById("jquizimage").setAttribute("src",jquizImages[i]);

            else if( item[i].getAttribute("id").includes("sms") )
                document.getElementById("smsimage").setAttribute("src",smsImages[i]);

            else if( item[i].getAttribute("id").includes("chat") )
                document.getElementById("chatimage").setAttribute("src",chatImages[i]) ;

            else if( item[i].getAttribute("id").includes("live") )
                document.getElementById("liveimage").setAttribute("src",liveImages[i]) ;

            navChange(i,item[i]);
            break;
        }
    }
}

function navChange(num,item)
{
    var labelClass = document.getElementsByClassName("labelClass") ;
    let i = 0 ;
    let ln = labelClass.length;
    var color1 = "" ;

    if( item.getAttribute("id").includes("bank") )
    {
        ln = 8;
    }
    else if( item.getAttribute("id").includes("cquiz") )
    {
        num += 8;
        i = 8;
        ln = 13;
    }
    else if( item.getAttribute("id").includes("cticket") )
    {
        num += 13;
        i = 13;
        ln = 21;
    }
    else if( item.getAttribute("id").includes("jshop") )
    {
        num += 21;
        i = 21;
        ln = 29;
    }
    else if( item.getAttribute("id").includes("jquiz") )
    {
        num += 29;
        i = 29;
        ln = 35;
    }
    else if( item.getAttribute("id").includes("jstudent") )
    {
        num += 35;
        i = 35;
        ln = 42;
    }
    else if( item.getAttribute("id").includes("jhill") )
    {
        num += 42;
        i = 42;
        ln = 48;
    }
    else if( item.getAttribute("id").includes("sms") )
    {
        num += 49;
        i = 49;
        ln = 73;
    }
    else if( item.getAttribute("id").includes("chat") )
    {
        num += 73;
        i = 73;
        ln = 81;
    }
    else if( item.getAttribute("id").includes("live") )
    {
        num += 81;
        i = 81;
    }

    if( document.getElementById("mode").getAttribute("class") == "container dark-mode" )
        color1 = "silver";
    else
        color1 = "black";

    labelClass[num].style.background = color1 ;

    for(i ; i < ln ; i++ )
    {
        if( i != num )
            labelClass[i].style.background = "none";
    }
}
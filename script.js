function check()
{
    if (detectmob())
    {
        document.getElementById("mini-contener").style.display = "inline";
        mobile();
    }
	else
	{
        document.getElementById("contener").style.display = "inline";
        if(window.location.href == "https://cholodymedia.github.io/")
        {
            desktop();
        }
	}
}

function detectmob() { 
 if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 ){
    return true;
  }
 else {
    return false;
  }
}

function desktop()
{
    var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    var isFirefox = typeof InstallTrigger !== 'undefined';
    var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
    var isIE = /*@cc_on!@*/false || !!document.documentMode;
    var isEdge = !isIE && !!window.StyleMedia;
    var isChrome = !!window.chrome && !!window.chrome.webstore;
    var isBlink = (isChrome || isOpera) && !!window.CSS;


    if(isFirefox || isEdge || isIE)
    {
        function scale2()
        {
        var x = innerWidth-17;
        var elements = document.getElementsByClassName("okno");
        for (var i = 0; i < elements.length; i++) 
        {
            elements[i].style.width=x/4+"px";
            elements[i].style.height=innerWidth/4+"px";
        }
    
        var elements2 = document.getElementsByClassName("bigokno");
            elements2[0].style.width=x/2+"px";
            elements2[0].style.height=innerWidth/4+"px";
        }
        scale2();
        window.addEventListener("resize", scale2);
    }
    else
    {
        function scale()
        {
            var elements = document.getElementsByClassName("okno");
            for (var i = 0; i < elements.length; i++) 
            {
                elements[i].style.width=innerWidth/4+"px";
                elements[i].style.height=innerWidth/4+"px";
            }
    
            var elements2 = document.getElementsByClassName("bigokno");
                elements2[0].style.width=innerWidth/2+"px";
                elements2[0].style.height=innerWidth/4+"px";
        }
        scale();
        window.addEventListener("resize", scale);
    }
}


function mobile()
{
    function scale3()
    {
    var elements = document.getElementsByClassName("mini-okno");
    for (var i = 0; i < elements.length; i++) 
    {
        elements[i].style.width=innerWidth+"px";
        elements[i].style.height=innerWidth+"px";
    }
    }
    scale3();
    window.addEventListener("resize", scale3);
}

var man = 0;
function menu()
{
    if(man==0)
    {
        document.getElementById("mini-menu-opt").style.display = "inline";
        man = 1;
    }
    else
    {
        document.getElementById("mini-menu-opt").style.display = "none";
        man = 0;
    }
}

document.addEventListener("DOMContentLoaded", check);

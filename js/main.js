/*-------------------animation et fonctionalites sur plusieurs pages-------------------- */
     //effet hover sur les boutons lorsqu'on les survoles dessus

    var buttons=document.querySelectorAll("button");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].onmouseover=function (e) {
            var bgcolor=window.getComputedStyle(buttons[i],null)["backgroundColor"];
            e.target.style.backgroundColor=window.getComputedStyle(buttons[i],null)["color"];
            e.target.style.color=bgcolor;
            e.target.style.boxShadow="0 0 10px white"
        };
    buttons[i].onmouseout=function(e){
        e.target.style.backgroundColor="" ;
        e.target.style.color=""
        e.target.style.boxShadow=""
    }
    };


    //effet hover sur les icones des r.sociaux dans le footer
    var mediaIcones=document.querySelectorAll(".media img");
    for (let i = 0; i < mediaIcones.length; i++) {
        mediaIcones[i].addEventListener("mouseover",function (e) {
            e.target.style.color="white";
        });

        mediaIcones[i].onmouseout=function(e){
            e.target.style.color=""
        }
    }

    //effet hover sur les rubriques du header
    var menu=document.querySelectorAll(".menu ul li a");
    var underline=document.querySelectorAll(".menu ul li .underline");
    for (let i = 0; i < menu.length; i++) {
        underline[i].style.transition=".2s";
        menu[i].addEventListener("mouseover",function () {
            underline[i].style.width="100%";
        });

        menu[i].onmouseout=function(){
            underline[i].style.width="0";
        }
    }

    //effet sur l'image home1
    var  home1=document.querySelector("#home1"); 
    if(home1!=null)home1.style.transition="1s";

    // effet fade-in sur les titres
    var titre=document.querySelector(".titre");
    var titreHome=document.querySelector(".titreHome");
    var titreApropos=document.querySelector(".titreApropos");
    var titreAdve=document.querySelector(".titreAdve");
    var titreHeros=document.querySelector(".titreHeros");
    var sousTitre=document.querySelectorAll(".sousTitre");

    titre.style.transition="1.5s";
    titre.style.opacity="0";
    for (let i = 0; i < sousTitre.length; i++) {
        sousTitre[i].style.transition="1.5s";
    }

    function fade(elemt,str,count){
        elemt.textContent+=str[count]
        if(count<str.length-1){
            setTimeout(fade,300,elemt,str,count+1);
        }
    }
   
    window.onload=function(){
        if(titreHome!=null)fade(titreHome,"SPIDERMAN",0);
        if(titreApropos!=null)fade(titreApropos,"LA TOILE",0)
        if(titreAdve!=null)fade(titreAdve,"SUPERVILAINS",0)
        if(titreHeros!=null)fade(titreHeros,"UN HEROS",0)
        if(home1!=null)home1.style.transform="translateX(300px)";
        setTimeout(function () {
            titre.style.opacity="1";
            titre.style.transform="translate(1px)";
        },500);
        setTimeout(function() {
            for (let i = 0; i < sousTitre.length; i++) {sousTitre[i].style.opacity="1";}
        },1000);
    }

    //effet zoom sur les images des spider man dans le home
    var spiderImage=document.querySelectorAll(".card-img-top");
    var text=document.querySelectorAll(".card-text");
    for (let i = 0; i < text.length; i++) {
       text[i].style.transition=".5s";
      text[i].style.opacity="0"
    }
    for (let i = 0; i < spiderImage.length; i++) {
        spiderImage[i].style.transition=".5s";
        spiderImage[i].onmouseover=function () {
            text[i].style.opacity="1"
           text[i].style.marginTop="50px";
           this.style.transform="scale(1.1)";
           this.style.zIndex="1000";
           text[i].style.height="auto";
           spiderImage[i].style.zIndex="0";
           this.style.zIndex="1000";
        }
        spiderImage[i].onmouseout=function () {
            text[i].style.opacity="0"
            this.style.transform="scale(1)";
            text[i].style.height="0";
            spiderImage[i].style.zIndex="1000";
            text[i].style.marginTop="";
         }
    }

    
    //inverser les deux images onscroll de le window
    var image1,image2;
    image1=document.querySelector("#home2");
    image2=document.querySelector("#img5");
    
    // affichage du pop up lorsque le formulairela page home est rempli  
    var input=document.querySelectorAll(".form-spiderman");
    var submit=document.querySelector(".form-buton");
    submit.onclick=function () {
        for (let i = 0; i < input.length; i++) {
           if(input[i].value==" "){
                alert();
           }
        }
    }   
    
    //effet zoom sur les image portrait dans la page heroes






    var  portrait=document.querySelectorAll(".portrait");
    for (let i = 0; i < portrait.length; i++) {
        portrait[i].style.transition=".5s";
        portrait[i].addEventListener("mouseover",function (e) {
            e.target.style.transform="scale(1.2)";
        });

        portrait[i].onmouseout=function(e){
            e.target.style.transform="scale(1)"
        }
    }

    //
    // effet slider sur les images dans la barre laterale 








    //effet fixed sur l'image tout en haut du page apropos
    var imageRotate=document.querySelector(".image-rotate");
    // imageRotate.style.position="fixed";
    // imageRotate.style.right="0"
    // imageRotate.style.zIndex="0"

    //popup lorsque le formulaire dans apropos est rempli
    














    // 
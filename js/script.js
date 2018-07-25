
var link = document.querySelector(".btn-contact");
    var popup = document.querySelector(".contact-form");
    var close = document.querySelector(".close-icon");
    var name = popup.querySelector("#name");
    var mail = popup.querySelector("#mail");
    var text = popup.querySelector("textarea");
    var submit = document.querySelector(".form-btn");

    link.addEventListener("click" , function(event) {
     event.preventDefault();
     popup.classList.add("contact-form-show") ;
     name.focus();
    });

    close.addEventListener("click" , function (event){
      event.preventDefault(); 
      popup.classList.remove("contact-form-show") ;

    });

    


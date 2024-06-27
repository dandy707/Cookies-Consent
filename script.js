const cookieBox = document.querySelector(".wrapper"),
 buttons = document.querySelectorAll(".button");

 const executeCodes = () => {

    if(document.cookie.includes("frankDandy")) return;
    cookieBox.classList.add("show");

    buttons.forEach((button) => {

        button.addEventListener("click", () => {
            cookieBox.classList.remove("show");

            if(button.id == "acceptBtn"){
                //set cookies for 1 month. 60 = 1mins, 60 = 1 hours, 24 = 1 day, 30 = 30days
                document.cookie = "cookieBy= frankDandy; max-age =" + 60 * 60 * 24 * 30;
            }
        });

    
    });
 }

 //executeCodes function will be called on webpage load
 window.addEventListener("load", executeCodes);
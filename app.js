const accordion = document.querySelectorAll(".accordion__titles");

accordion.forEach(item => {
    item.addEventListener('click', e => {  
        if(item.lastChild.previousElementSibling.getAttribute("src") === './assets/images/icon-plus.svg' ){
            item.lastChild.previousElementSibling.setAttribute("src", "./assets/images/icon-minus.svg");
        } else{
            item.lastChild.previousElementSibling.setAttribute("src", "./assets/images/icon-plus.svg");
        }
        item.nextElementSibling.classList.toggle("hidden");
    })
})

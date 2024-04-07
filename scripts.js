const form = document.querySelector(".form-fale-com-bia")
const mascaraform = document.querySelector(".mask-form")

function mostrarform(){
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascaraform.style.visibility = "visible"
}

function cliqueiNaMascara(){
    form.style.left = "-302px"
    form.style.transform = "translateX(0)"
    mascaraform.style.visibility = "hidden"
}
const modalButton = document.getElementById("modalButton");
const closePopup = document.getElementById("closePopup");
const modal = document.getElementById("modal");
const modalConsult = document.getElementById("modalConsult");
const sendButton = document.getElementById("sendButton");

modalButton.addEventListener("click", function () {

    modal.classList.add("popup-show")
    
})

closePopup.addEventListener("click", function () {

    modal.classList.remove("popup-show")
    
})

sendButton.addEventListener("click", function () {

    modal.classList.remove("popup-show")
    
})

modalConsult.addEventListener("click", function () {

    modal.classList.add("popup-show")
    
})

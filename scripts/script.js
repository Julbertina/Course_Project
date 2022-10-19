const modalButton = document.getElementById("modalButton");
const closePopup = document.getElementById("closePopup");
const modal = document.getElementById("modal");

modalButton.addEventListener("click", function () {

    modal.classList.add("popup-show")
    
})

closePopup.addEventListener("click", function () {

    modal.classList.remove("popup-show")
    
})
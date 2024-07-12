let isModalOpen = false;
let contrastToggle = false;

function toggleContrast() {
    contrastToggle = !contrastToggle
    if(contrastToggle) {
        document.body.classList += " dark-theme" 
    }
else{
    document.body.classList.remove("dark-theme");
}

}

function contact(event) {
  event.preventDefault();

  loading = document.querySelector(".modal__overlay--loading");
  success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";

  setTimeout(() => {
    loading.classList.remove("modal__overlay--visible");
    success.classList += " modal__overlay--visible";
    console.log("it worked");
  }, 1000);
}

function toggleModal() {
 
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open")
       
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
}


let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;

  for (let i = 0; i < shapes.length; ++i) {
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1 : 1;
    // Added rotate after tutorial
    shapes[i].style.transform = `translate(${x * boolInt}px, ${
      y * boolInt
    }px) rotate(${x * boolInt * 10}deg)`;
  }
}

function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += " dark-theme";
  } else {
    document.body.classList.remove("dark-theme");
  }
}

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector('.modal__overlay--loading');
  const success = document.querySelector('.modal__overlay--success');
  loading.classList += " modal__overlay--visible";

  emailjs
    .sendForm(
      'service_ba92w43',
      'template_a05aqcf',
      event.target  //,
     // 'itNKnCpDkXBLizDdV'
    )
    .then((response) => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
      console.log('SUCCESS!', response.status, response.text);
    })
    .catch((error) => {
      loading.classList.remove("modal__overlay--visible");
      console.log('FAILED...', error);
      alert(
        "The email service is temporarily unavailable. Please contact me directly at me@bmuhammad.com"
        
      );
     
    });

  //mock email success
  //setTimeout(() => {
  //  loading.classList.remove("modal__overlay--visible");
  //  success.classList += " modal__overlay--visible";
  //  console.log("it worked");
  // }, 1000);
}

function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = true;
  document.body.classList += " modal--open";
}

//template_8jli9yo
//service_ba92w43
//itNKnCpDkXBLizDdV

let form = document.querySelector(".flex");
let sumbit = document.querySelector(".btn");

function handlerSuccess(event) {
  event.value = "";
}

sumbit.addEventListner("submit", handlerSuccess());

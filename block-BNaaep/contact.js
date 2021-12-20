let form = document.querySelector(".flex");
let sumbit = document.querySelector(".btn");
let name = document.getElementById("name");
let email = document.getElementById("email");
let username = document.getElementById("username");
let age = document.getElementById("age");
let bio = document.getElementById("bio");

async function handlerSuccess(event) {
  event.preventDefault();
  const data = {
    name: name.value,
    email: email.value,
    username: username.value,
    age: parseInt(age.value),
    bio: bio.value,
  };
  try {
    const res = await fetch("/form", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const resData = await res.json();
    console.log(resData);
  } catch (error) {
    console.log(error);
  }
}

sumbit.addEventListener("click", handlerSuccess);

document.querySelector(".btn-example").addEventListener("click", (e) => {
  e.preventDefault();
  fetch("/user", {
    method: "PUT",
  })
    .then((data) => data.json())
    .then(console.log);
});

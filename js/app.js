const userName = document.querySelector("#username");
const submit = document.querySelector("#submit");
const error = document.querySelector("#error");
submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (userName.value === "") {
    userName.style.border = "1px solid red";
    error.style.display = "block";
  } else {
    userName.style.border = "1px solid gray";
    error.style.display = "none";
    nameOfUser = userName.value;
   
     location.href = `https://live.pentaserver.ir/tabatabaei?guestname=${nameOfUser}`;
  }
});

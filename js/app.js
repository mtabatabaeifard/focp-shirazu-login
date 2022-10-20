const username = document.querySelector("#username");
const submit = document.querySelector("#submit");
const error = document.querySelector("#error");


submit.addEventListener("click",(e) => {
    e.preventDefault();
    if (username.value === "") {
        username.style.border = "1px solid red";
        error.style.display = "block";
    }else{
        username.style.border = "1px solid gray";
        error.style.display = "none";
        location.href = `https://live.pentaserver.ir/tabatabaei?guestname=${username.value}`
    }
})
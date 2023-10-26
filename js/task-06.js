const input = document.querySelector("#validation-input");

input.addEventListener("blur", onInputUnfocus);

function onInputUnfocus(event) {
    const input = event.currentTarget;
    input.classList.remove("valid", "invalid");

    if(input.value.trim().length === Number(input.dataset.length)) {
        input.classList.add("valid");} 
    else if(input.value.trim().length === 0) {
        input.classList.remove("valid", "invalid")}        
    else {
        input.classList.add("invalid")};

};

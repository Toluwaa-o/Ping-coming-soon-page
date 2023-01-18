let button = document.getElementById("submit-btn")
let input = document.getElementById("email-field")
let valid= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[hotmail||yahoo||outlook||gmail||icloud]+(?:\.[com]+)*$/;

button.addEventListener("click", function(e) {
    e.preventDefault();
    if(input.value === ""){
        input.style.border = "2px solid hsl(354, 100%, 66%)"
        input.nextElementSibling.textContent = "Enter your email address"
        input.nextElementSibling.style.display = "block"
        setTimeout(function(){
            input.style.border = "1px solid hsl(223, 100%, 88%)"
            input.nextElementSibling.style.display = "none"
        }, 3000)
    }else if(!input.value.match(valid)){
        input.style.border = "2px solid hsl(354, 100%, 66%)"
        input.nextElementSibling.textContent = "Please provide a valid email address"
        input.nextElementSibling.style.display = "block"
        setTimeout(function(){
            input.style.border = "1px solid hsl(223, 100%, 88%)"
            input.nextElementSibling.style.display = "none"
        }, 3000)
    }else {
        input.value = ""
    }
})
let inputfield = document.getElementById("input");
let btnval = document.getElementById("btn");
let image = document.getElementById("img");

// console.log(inputfield,button,image);

btnval.addEventListener("click" , () => {
    let inputvalue = inputfield.value;

    if(!inputvalue){
        alert("please enter something");
        return;
    }else {
         image.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputvalue}`;
         image.alt = `qr code for ${inputvalue}`;
    }
})

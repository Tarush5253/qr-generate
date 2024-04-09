let inp=document.querySelector("input");
let imgBox=document.querySelector(".imgBox");
let qrImg=document.querySelector("img");
let btn=document.querySelector("button");

btn.addEventListener("click",function(){
    if(inp.value.length > 0){
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + inp.value;
        imgBox.classList.add("show-img");
    }else{
        inp.classList.add("error");
        setTimeout(() => {
            inp.classList.remove("error");
        }, 1000);
    }
});
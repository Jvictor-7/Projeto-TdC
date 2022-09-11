function btnClick(e){
    const btn = document.querySelectorAll("button");

    btn.forEach(element => {
        if(element.classList.contains("actived") && element.id != e ){
            element.classList.remove("actived");
        }
    });
    document.getElementById(e).classList.toggle("actived");
}

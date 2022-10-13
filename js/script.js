function btnClick(e){
    const btn = document.querySelectorAll("button");

    btn.forEach(element => {
        if(element.classList.contains("actived") && element.id != e ){
            element.classList.remove("actived");
        }
    });
    document.getElementById(e).classList.toggle("actived");
}

function btnConfirmClick(){
    const btn = document.querySelectorAll("button");

    btn.forEach(element => {
        if(element.classList.contains("actived")){
            element.classList.remove("actived");
        }
    });

    const arrayCircles = ['s1', 's2', 's3', 's4'];

        // Lots of code
        setTimeout(function(){  // Beginning of code that should run AFTER the timeout
            TransitionState(arrayCircles, 0);
            // Lots more code
        }, 1000);  // Put the timeout here
}

function TransitionState(states, stateIndex){
    console.log(stateIndex)
    // while(stateIndex!= 4){
    //     var circles = document.getElementsByClassName("circle");

    //     for(let i = 0; i < circles.length; i++){
    //         if(circles[i].classList.contains('currentState')){
    //             circles[i].classList.remove('currentState');
    //         }
    //     }
    //     document.getElementById(states[stateIndex]).classList.add('currentState');

    //     // Lots of code
    //     setTimeout(function(){  // Beginning of code that should run AFTER the timeout
    //         TransitionState(states, stateIndex+1);
    //         // Lots more code
    //     }, 1000);  // Put the timeout here
    // }
}
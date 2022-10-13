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
            var elementId = element.getAttribute('id');
            // Lots of code
            setTimeout(function(){ 
                TransitionState(elementId);
            }, 1000);
        }
    });


}

function TransitionState(state){

    var state0 = document.getElementById('state0');

    setTimeout(function(){
        state0.classList.remove('buttonStateAtual');

        var stateDiv = document.getElementById('state'+state[state.length-1]);
        stateDiv.classList.add('buttonStateAtual');  
        
        setTimeout(function(){
            stateDiv.classList.remove('buttonStateAtual');

            stateDiv = document.getElementById('state10');
            stateDiv.classList.add('buttonStateAtual'); 

            setTimeout(function(){ 
                state0.classList.add("buttonStateAtual")
                stateDiv.classList.remove('buttonStateAtual');

                document.getElementById(state).classList.remove('actived');
                
            }, 1000);

        }, 1000);
        
       
    }, 1000);
}
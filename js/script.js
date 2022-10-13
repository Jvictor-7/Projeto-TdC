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

    let entrada = document.getElementById('entrada').value;
    var error = document.getElementById("error");

    if(entrada == ''){

        error.removeAttribute('hidden');
        error.innerText = 'Você não inseriu fichas';
        return;
    }

    error.setAttribute('hidden', true);

    const btn = document.querySelectorAll("button");

    let btnConfirm = document.getElementById("btnConfirm");

    
    btn.forEach(element => {
        if(element.classList.contains("actived")){
            let btnValue = element.value;

            if(entrada < btnValue){
                error.innerText = 'Fichas insuficiente';
                error.removeAttribute('hidden');

                document.getElementById("saida").value = entrada;
                document.getElementById('entrada').value = '';
                
                return;
            }

            btnConfirm.setAttribute("disabled", 'true');

            document.getElementById("saida").value = '';


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

            stateDiv.classList.remove('state10');
            stateDiv.classList.add('activedState'); 

            document.getElementById("saida").value = entrada.value - document.getElementById(state).value;

            entrada.value = '';

            setTimeout(function(){ 
                state0.classList.add("buttonStateAtual")

                stateDiv.classList.remove('activedState');
                stateDiv.classList.add('state10');

                document.getElementById(state).classList.remove('actived');

                btnConfirm.removeAttribute('disabled')
                
            }, 1000);

        }, 1000);
        
       
    }, 1000);
}
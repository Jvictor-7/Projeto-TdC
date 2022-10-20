
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

    // --- SOUND MOEDA---

    var audio1 = new Audio();
    audio1.src = "audio/moeda.mpeg";
    audio1.play();

    // ---
    
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
            }, 1500);
        }
    });
}

function TransitionState(state){

    var state0 = document.getElementById('state0');

    setTimeout(function(){
         // --- SOUND OBJETO CAINDO ---

        var audio2 = new Audio();
        audio2.src = "audio/caindo.mpeg";
        audio2.play();

        // ---
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
                
            }, 2000);

        }, 2000);
        
       
    }, 2000);

}

function descricao(val) {
    var descricaoElemento = document.getElementById('descricao');
    console.log(val)
    switch (val) {
        case 0:
            descricaoElemento.innerHTML = 'Estado q0: Esperando ação do cliente...'
            break
        case 1:
            descricaoElemento.innerHTML = 'Estado q1: Resgatando o alimento (Biscoito Negresco)'
            break
        case 2:
            descricaoElemento.innerHTML = 'Estado q2: Resgatando o alimento (Biscoito Passatempo)'
            break
        case 3:
            descricaoElemento.innerHTML = 'Estado q3: Resgatando o alimento (Biscoito Bono)'
            break
        case 4:
            descricaoElemento.innerHTML = 'Estado q4: Resgatando o alimento (Salgadinho Ruffles)'
            break
        case 5:
            descricaoElemento.innerHTML = 'Estado q5: Resgatando o alimento (Salgadinho Cheetos)'
            break
        case 6:
            descricaoElemento.innerHTML = 'Estado q6: Resgatando o alimento (Salgadinho Doritos)'
            break
        case 7:
            descricaoElemento.innerHTML = 'Estado q7: Resgatando o alimento (Refrigerante Coca-cola)'
            break
        case 8:
            descricaoElemento.innerHTML = 'Estado q8: Resgatando o alimento (Guaraná Antártica)'
            break
        case 9:
            descricaoElemento.innerHTML = 'Estado q3: Resgatando o alimento (Energético Redbull)'
            break
        case 10:
            descricaoElemento.innerHTML = 'Estado q10: Entregando o alimento...'
            break       
    }
}
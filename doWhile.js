<script>
       var numAle = Math.floor((Math.random()*9)+1)
      
      
        do {
       
            var num =  parseInt(prompt("Escolha entre 1 a 10:"))
            alert(`TENTE NOVAMENTE! Número aleatório ${numAle}, seu número: ${parseInt(num)}`)
           

        } while(num !== numAle){
            if( num === numAle){
                alert('Acertou!')
            }
        }

      //var res =  alert(typeof num ) 
        

    </script>
    
    /* Para entender melhor como funciona os metodos de arredondar e gerar número aleatório, criei um alert que mostrassse ele funcionando 
    juntamete com a escolha do usuário, mas ao executar, o navegador gera apeas um número aleatório, modificando apenas quando fecha e abre novamente. 
    Poderiam me ajudar com este problema ? */

/* Dando continuidade, analisando o código consegui concertar a falha em gerar apenas um número aleátorio por vez.
estava usando a variável fora da condição de repetição, ao passar para dentro o números funcionaram como esperado!*/ 

   <script> 
     
       do{ 
          var num =  parseInt(prompt("Escolha um número entre 1 a 10:")) 
          var numAle = Math.floor((Math.random()*10)+1) // Método gerar números aleátorios
          
          if (num !== numAle)  { // Forma que encontrei para o while caso seja falso não mostrar o alert TENTE NOVAMENTE
          alert(`TENTE NOVAMENTE! Número aleatório ${numAle}, seu número: ${parseInt(num)}`) } 
      
       
       } while(num !== numAle)
         alert(`Acertou ! Número aleatório ${numAle}, seu número: ${parseInt(num)}`) 
 
   </script>


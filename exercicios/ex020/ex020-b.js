let valores = [1,2,3,4,5,6,7,8]

//console.log(valores) //exibição de vetores simples sem formatação

/*console.log(valores[0])
 console.log(valores[1])
 console.log(valores[2])
 console.log(valores[3])
 console.log(valores[4])
 console.log(valores[5])
 console.log(valores[6])
 console.log(valores[7])   
 console.log(valores[8])*/ //exibição de vetores copiando e colando de um em um

 /*for(let pos=0; pos < valores.length; pos++ ) {
     console.log(`A posição  ${pos} tem o valor ${valores[pos]}`)}*/ //exibição de vetores usando FOR

    /* for(let pos in valores){
         console.log(valores[pos])
     }*/ //forma simplificada da estrutura de repetiçao FOR para exibição de vetores.

     let pos =valores.indexOf(3) // busca a posição de um valor
     console.log(`O valor  3 esta na posição ${pos}`)
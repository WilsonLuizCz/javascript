let num = [5,3,9] //Um vetor ou array é uma variavél composta ou seja ele armazena multiplos dados.
num[3] =6 // A posição de um vetor começa a contar do número 0,aqui estamos adicionando o valor 6 na posição 3
num.push(7) // aqui estamos adicionando o valor 7 na última posição que no caso é a 4
num.length  //mosta a quantidade de elementos no meu vetor 0,1,2,3,4 = 5 elementos nesse caso.
num.sort() //coloca todos os meus elementos em ordem crescente

console.log(num)
console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(num[0]) //mostra o elemento que esta na posição 0
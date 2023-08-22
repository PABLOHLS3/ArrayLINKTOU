// 1 - criar um Array
// 2 -  Criar uma Função que retorne o Segundomaior e Segundomenor
// 3 - Apresentar os valores

function retornaValores(list) {
  let listaOrdenada = list.sort(function (a, b) {
    return a - b;
  });

  let result = []
 
  const segundoMenor = listaOrdenada[1];
  const segundoMaior = listaOrdenada[list.length - 2]

  result.push(segundoMenor)
  result.push(segundoMaior)

  return result
}

const lista = [1, 2, 3, 4, 5, 0, 8, 40, 90]


console.log(retornaValores(lista))



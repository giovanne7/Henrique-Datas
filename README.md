Explicação do código
----------------------------------------------------

Este arquivo JavaScript fornece três funções para lidar com datas e comparações entre elas.

"comparacao()"

Esta função é responsável por comparar duas datas inseridas pelo usuário e exibir o resultado da comparação. Ela segue estes passos:

Primeiro Passo: Obtém os valores das datas a serem comparadas a partir de elementos de entrada HTML com IDs "data1comp" e "data2comp".
Segundo Passo: Converte esses valores em objetos Date.
Terceiro Passo: Compara as datas e determina se a primeira é maior, a segunda é maior ou se são iguais.
Quarto Passo: Atualiza o conteúdo de um elemento HTML com o ID "final" com o resultado da comparação.

"dataatual()"

Esta função é responsável por exibir a data atual em um formato específico. Ela segue estes passos:

Primeiro Passo: Obtém a data atual utilizando o objeto Date.
Segundo Passo: Formata a data para o formato "DD/MM/AAAA".
Terceiro Passo:  Atualiza o conteúdo de um elemento HTML com o ID "final" com a data formatada.

"intervalo()"

Esta função é responsável por calcular o intervalo de dias entre duas datas inseridas pelo usuário e exibir o resultado. Ela segue estes passos:

Primeiro Passo: Obtém os valores das datas a serem comparadas a partir de elementos de entrada HTML com IDs "data1comp" e "data2comp".
Segundo Passo: Converte esses valores em objetos Date.
Terceiro Passo: Se a primeira data for maior que a segunda, as datas são trocadas para garantir que a primeira seja sempre menor ou igual à segunda.
Quarto Passo: Calcula o intervalo em milissegundos entre as duas datas.
Quinto Passo: Converte o intervalo de milissegundos para dias.
Sexto Passo: Atualiza o conteúdo de um elemento HTML com o ID "final" com o resultado do cálculo do intervalo em dias.


"""
Type Annotation - Annotation é quando definimos o tipo de dado manualmente
Type Inference - é quando o TS identifica e define o tipo de dados

* O TS pode ser configurado de muitas maneiras;
* Mas para isso e necessario o arquivo de configuração;
* Para criar ele se utiliza: tsc --init
* Para a compilação automatica se iniciar deve usar tsc -w

* Podemos especificar um array como tipo tambem;
* Se temos um array de numeros: number[]
* se e um array de string: string[]
* Isso acontece pois geralmente os arrays possuem apens um unico tipo
    de dado entre seus itens

* O any transmite ao TS que qualquer tipo satisfaz a variável;
* Devemos evitarao Maximo evitar este tipo, pois vai contra os principios do javascript
* Dois casos de uso: o tipo do dado realmente nao importa e arrays com dados de multiplos tipos

* Podemos definir o tipo de parametro de uma função; 
* Assim condicionamos o seu uso correto;
* A sintaxe é: function minhaFuncao(nome:string){}
* Agora podemos o parametro nome, apenas como texto

* Os retornos tambem podem ser definidos manualmente
* Para isso basta utilizar a sintaxe: function myFunction(): number{}
* Esta funcao retorna um numero

* O TypeScript consegue ajudar tambem em funcoes anomnimas;
* Fazendo uma validaç o do codigo digitado, nos fornecendo dicas de possiveis problemas

* Pode determinar o tipos  para objetos também;
* A sintaxe é: {prop:tipo, prop2:tipo2}
* Ou seja, estamos determinando quais tipos as propriedades de um objeto possuem


* Nem sempre os objetos possuem todas as propriedades que poderiam possuir
* Por isso temos as propriedades opcionais
* Para ter esse resultado deve se colocar uma interrogação: {nome: string, sobrenome?: string}


* Quando a propriedade é opcional, precisamos criar uma validacao
* Isso acontece por que o TypeScript nao ajuda mais, ja que ele deixe de controlar o valor que recebemos
* Para isto se utiliza uma condicional if, e assim se consegue resolver a situação

* O Union type é uma alternativa melhor que o any
* Onde podemos determinar dois tipos para um dado
* A sintaxe: number | string

* Podemos utilizar condicionais para a validação do tipo de union types
* Com isso e possivel trilhar rumos diferentes, baseado no tipo de dado
* Para checar o tipo utilizamos typeof

* Type  Alias e um recurso que permite criar um tipo e determinar o que ele verifica
* Desta maneira temos uma maneria mais facil de chamalo em vez de criar expressoes complexas com Union types

* Uma outra maneira de nomear um tipo de objeto
* Podemos determinar um nome para o tipo
* E tambem escolher quais as propriedades e seus tipos

* Na maioria das vezes pode optar entre qualquer um dos recursos sem problema 
* A unica diferença e que interface pode ser alterada ao longo do codigo, já o alias nao
* Ou seja, se pretendemos mudar como o tipo se conforma, devemos escolher a interface

"""
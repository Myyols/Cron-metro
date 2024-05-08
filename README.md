# `` Não feche essa aba aqui estão as instruções a serem segidas``
# ⌨️🖥️ Aula 10 Alura 🧑‍💻👩‍💻 🕕
### Atualizando abas de conteúdo

Nesta aula vamos pensar o seguinte: Temos uma lista de tempos com quatro valores, chamada `tempoObjetivo`. Como podemos atualizar quatro abas de conteúdo, cada uma com quatro campos de texto (dias, horas, minutos e segundos)?
Nossa funçãocalculaTempo retorna uma lista com quatro valores:

* Índice 0: Dias
* Índice 1: Horas
* Índice 2: Minutos
* Índice 3: Segundos

Fazendo um cálculo simples: 4 abas × 4 campos = 16 campos para atualizar.

Se você tentar fazer isso manualmente, acabará escrevendo 16 linhas de código. No entanto, isso trabalhoso e propenso a erros

# Encontrando um padrão para simplificar o código
Observando apenas a parte do código que atualiza os segundos:

~~~javascript
document.getElementById("seg0").textContent = calculaTempo(tempos[0])[3];
document.getElementById("seg1").textContent = calculaTempo(tempos[1])[3];
document.getElementById("seg2").textContent = calculaTempo(tempos[2])[3];
document.getElementById("seg3").textContent = calculaTempo(tempos[3])[3];
~~~

Percebemos que há um padrão: `o número em "seg0" corresponde ao número do índice em tempos[0].`

# Solução: usando laço de repetição

Podemos aproveitar esse padrão e reduzir essas linhas repetidas reutilizando o laço `for`, que está dentro da nossa função `atualizaCronometro()`. Assim temos o seguinte código:

~~~javascript
for (let i=0; i < tempos.length; i++){
    document.getElementById("seg"+i).textContent = calculaTempo(tempos[i])[3];
}
~~~

![img1](https://cdn3.gnarususercontent.com.br/3373-javascript/aula10_facacomoeufiz_gif1.gif.gif)

Neste caso, todos os ids `seg` são atualizados a cada 1 segundo. Mas não paramos por aí! Podemos usar o mesmo princípio para todos os campos:

~~~javascript
 for (let i=0; i<contadores.length;i++){
        document.getElementById("dias"+i).textContent = calculaTempo(tempos[i])[0];
        document.getElementById("horas"+i).textContent = calculaTempo(tempos[i])[1];
        document.getElementById("min"+i).textContent = calculaTempo(tempos[i])[2];
        document.getElementById("seg"+i).textContent = calculaTempo(tempos[i])[3];
    }
~~~

![img2](https://cdn3.gnarususercontent.com.br/3373-javascript/aula10_facacomoeufiz_img1.png)

Ao seguir estes passos, otimizamos nosso código para ser mais limpo, eficiente e menos propenso a erros! Assim, finalizando nosso projeto.

/* 1. Crie uma função que recebe 3 notas de um aluno por parâmetro e
uma letra. Se a letra for A a função deve calcular a média aritmética,
se for P, a média ponderada (peso: 5, 3 e 2). */
const notas = [9,4,5]
function exercicio1(){
    
    function mediaAluno(notas, metodo) {
        const [nota1, nota2, nota3] = notas
    
        if (metodo === 'A')
            return (nota1 + nota2 + nota3) / 3
    
        if (metodo === 'P')
            return (nota1 * 5 + nota2 * 3 + nota3 * 2) / 10
    
        else null
  }
  
  document.write(mediaAluno([9,4,5],'A'))
  
}
/* 2. Crie uma função que recebe um valor inteiro e retorne verdadeiro se
for ímpar ou falso se for par. */

function exercicio2(){
    function retornaParImpar(numero){
        return numero % 2 !== 0 ? true : false
  }
  document.write(retornaParImpar(1));
}


/* 3. Crie uma função que recebe por parâmetro um valor inteiro e
positivo e retorne verdadeiro se o número for primo ou falso se não
for. */
function exercicio3(){
    function verificaPrimo(numero) {
        if(Number.isInteger(numero))
        if (numero === 0 || numero === 1) return false;
        if (numero === 2) return true;
        let divisores = 2;
        for (let contador = 2; contador < numero; contador++)
            if (numero % contador === 0) {
                divisores++;
            }
            return divisores > 2 ?  false :  true
  }
  document.write(verificaPrimo(7));

}



/* 4. Crie uma função que recebe por parâmetro o tempo de duração de
uma fábrica expressa em segundos e retorna esse tempo em horas,
minutos e segundos.

Ex:
Entrada: 3672
Saída: 1:1:12 */
function exercicio3(){
    function converterTempo(segundos) {
        const horas = Math.floor(segundos / 3600)
        segundos %= 3600
        const minutos = Math.floor(segundos / 60)
        segundos %= 60
        return `${horas}: ${minutos} ${segundos}`
    }
    const tempoSegundos = 3672
    const tempoFormatado = converterTempo(tempoSegundos)
    document.write(converterTempo(tempoSegundos))
  
}



/*  5. Crie uma função que recebe um valor inteiro e retorne verdadeiro se
é um valor perfeito ou falso se não for. Um valor é dito perfeito
quando ele é igual a soma dos seus divisores excetuando ele
próprio. */
function exercicio4(){
    function perfect(valor) {
        if (valor <= 1)
            return false;
    
    
        let somaDivisores = 1;
    
        for (let i = 2; i < valor; i++) {
            if (valor % i === 0)
                somaDivisores += i;
        }
        return somaDivisores === valor;
  }
  document.write(perfect(6));
}





/*6. Crie uma função chamada acessoAoSite() que não tenha
parâmetro. Esta função será chamada ao abrir a página e mostrará
um alerta informando “Bem vindo ao site”. */

function acessoAoSite() {
      let nome = prompt("Digite seu nome:")
      return nome ? alert(`Olá, ${nome}!! Bem vindo ao nosso site`) : alert("INVASOOOPRORORRRORORO")
}
acessoAoSite()

let aplicacao = "Growdev"

/* 7. Crie uma função chamada mostrarMensagem() que não tenha
parâmetro. Esta função será chamada ao abrir a página e mostrará
uma mensagem no console.log() informando “Acesso à aplicação
NomeAplicação” e um alerta informando “Bem vindo à aplicação
NomeApliação”. Sendo que o nome da aplicação deve ser salvo em
uma variável para mostrar nas mensagens. */
function mostrarMensagem() {
      console.log(`Acesso à aplicação ${aplicacao}`);
      alert(`Acesso à aplicação ${aplicacao}`)
  }
  mostrarMensagem()

/* 8. Crie uma função chamada mostrarDobro(num), que recebe um
parâmetro sendo um número inteiro. Esta função será chamada ao
abrir a página e mostrará um alerta com o resultado. Exemplo: “O
dobro do número 5 é 10.” */
function exercicio8(){
    function mostrarDobro(num) {
        alert(`O dobro do número ${num} é ${num * 2}`);
    }
    
    
    mostrarDobro(5);
  
}

/* 9. Crie uma função chamada calcularMedia(nota1, nota2, nota3,
nome), que recebe 4 parâmetros sendo três inteiros e um texto
(String). Esta função será chamada ao abrir a página e mostrará um
alerta com a média. Exemplo: “João, sua média é 70.” A função
também deve mostrar no console.log() as notas recebidas. Exemplo
“Nota 1: 60,Nota 2: 70,Nota 3: 80”. */

function exercicio9(){
function calcularMedia(nota1, nota2, nota3, nome) {
    alert(`${nome}, sua média é ${(nota1 + nota2 + nota3) / 3}`);
    document.write(`Nota 1: ${nota1}, Nota 2: ${nota2}, Nota 3: ${nota3}`)
}

calcularMedia(80, 90.9, 100, "Bruno");
}

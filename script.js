// const nome = prompt ("Qual é o seu nome?")
// const cor = prompt ("Qual é a sua cor favorita?")

// //concatenação

// let mensagem1 = "A cor favorita de " + nome + " é " + cor
// console.log(mensagem1);

// //template string

// let mensagem2 = `A cor favorita de ${nome} é ${cor}` 
// console.log(mensagem2);

// // ` = crase
// // ' = aspas simples
// // " = aspas duplas

// const citacao = prompt ("Qual é a sua citação favorita?")

// mensagem1 = `"${mensagem1}, e a citação favorita é "${citacao}"`
// console.log(mensagem1);

// mensagem2 = `Nome: ${nome}
// Cor favorita: ${cor} `
// console.log(mensagem2);

// console.log (`O nome ${nome.toUpperCase()} possui ${nome.length} caracteres`)

// console.log (`O nome possui a letra A: ${nome.includes("a")}`);



//Pra guardar na cabeça: 01
const nomeDoUsuario = prompt("Qual o seu nome?")
const email = prompt("Qual o seu email?")

console.log (`O email ${email.trim()}, foi cadastrado com sucesso. \nBoas vindas, ${nomeDoUsuario}!`);


//Pra guardar na cabeça: 02
console.log (`O nome ${nomeDoUsuario} possui ${nomeDoUsuario.length} caracteres`);


//Pra guardar na cabeça: 03
console.log(`Se Substituir r por l em ${nomeDoUsuario} seu nome ficará assim:`);
const novoNomeDeUsuario = nomeDoUsuario.replaceAll ("r", "l")
console.log(novoNomeDeUsuario);
console.log(`O nome possui o símbolo @: ${email.includes ("@")}`);

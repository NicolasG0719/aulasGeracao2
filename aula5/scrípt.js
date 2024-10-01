// let personagens = ['frodo', 'gendalf', 'pappin', 'aragorn', 'legolas'];

// // // push : adiciona dados no final do array

//  personagens.push('boromir')

//  console.log(personagens)

// // // unshift: adiciona dados no inicio do array

//  personagens.unshift('sauro');

//  console.log(personagens)

// // // pop : retira o ultimo elemento do array

//  personagens.pop('boromir');
//  console.log(personagens)

// // // shift: retira o primeiro dado do array

//  personagens.shift('sauro');
//  console.log(personagens)

// // // include: verifica se um certo elemento está presente do array


//  let procura = personagens.includes('gendalf');

//  console.log(procura)

//  //indexOf: procura indice do elemento no array


//  let procuraIndice = personagens.indexOf('pappin');

//  console.log(procuraIndice);


//  personagens[1] = 'gendalf o cinzento'

//  console.log(procuraIndice);

//  console.log(personagens)


//  let selecaoPersonagens = personagens.slice(0,4);

//  console.log(selecaoPersonagens)

//  let outraSelecao = personagens.slice(-4)

//  console.log(personagens)
//  console.log(outraSelecao)

//  //concat: junta os arrays e os itens e devolve um array sem alterar os arryes originais
//  let personagens2 = ["fheanor", "fingolfin"];

//  let arrayConcat = personagens.concat(personagens2)

//  console.log(arrayConcat)

//  //join: ele junta os elementos de acordo com o que a gente passa como argumento

//  let juntaCom = personagens.join(" - ");

//  console.log(juntaCom)

// let personagens = ['frodo', 'gendalf', 'pappin', 'aragorn', 'legolas'];

// for(let indice = 0; indice < personagens.length; indice ++){
//     let elemento = personagens[indice];
//     console.log(`O personagem ${elemento} está no indice ${indice}`)

// }



//  let opcao = "";
//  const pacientes = [];

//  while (opcao != 3) {

//      opcao = prompt(
//     `
//          pacientes:
//          1. para cadastrar um novo paciente
//          2. para consultar paciente
//          3. para sair  `
//     );

//      if (opcao == 3) {
//          break;
//      } else if (opcao == 1) {
//         pacientes.push(prompt(`Digite o nome do paciente`));
//     }

// }


// let fila = [];
// let opcao = "";

// do{

//     let juntaPaciente = fila.join(" - ");
//     opcao = prompt(`
//         \n lista de pacientes: ${juntaPaciente}
//         \n Escolha uma opcao
//         \n1 - Novo paciente
//         \n2 - Consulta paciente
//         \n3 - sair ...


// `)
//     switch (opcao) {
//         case "1":
//             let novoPaciente = prompt(`Digite o nome do paciente`)
//             fila.push(novoPaciente);
//             break;
//         case "2":
//             let consulta = fila.shift()
//             if(!consulta){
//                 alert("nao existe paciente na fila")
//             } else{
//                 alert(`o ${consulta} foi consultado`);
//             }
            
//             break;
//         case "3":
//             alert(`Programa encerrado`)
//             break;
    
//         default:
//             break;
//     }
// }while(opcao != "3");







// let listaDePessoas = {
//     nome: "Nicolas",
//     idade: 17,
//     profissao: 'densenvolverdor'

// }
// console.log(listaDePessoas);

// console.log(listaDePessoas.profissao);




















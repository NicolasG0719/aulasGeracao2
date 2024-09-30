switch (key) {
    case value:
        
        break;

    default:
        break;
}


let diasDaSamena = prompt("digite um numero pro dia da semana");

switch (diasDaSamena) {
    case 1:
       alert("você selecionou domingo")
        break;
    case 2;
        alert
    default:
        break;
}

let opcao = "";

do {
    opcao = prompt(
        `Selecione uma opção
        \n1 - primeira opção
        \n2 - Segunda opção
        \n3 - Terceira opção
        \n4 - Quarta opção
        \n5 - Encerrar
        `
    )
    switch (opcao) {
        case "1":
            alert("Você escolheu a opção 1")
            break;
        case "2":
            alert("Você escolheu a opção 2")
            break;
        case "3":
            alert("Você escolheu a opção 3")
            break;
        case "4":
            alert("Você escolheu a opção 4")
            break;
        case "5":
            alert("Programa encerrado ....")
            break;
        default:
            alert("Opção invalida")
            break;
    }
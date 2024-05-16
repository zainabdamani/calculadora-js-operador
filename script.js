function calculadora(num1, num2, operador) {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
  try {
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error("entrada invalida, nao eh numero");
    }
  } catch (erro) {
    console.log("Ocorreu um erro a funcao dividir: ", erro.message);
    return "A divisão não pode ser concluída pois os inputs não são números";
  }

  try {
    if (operador == "/" && num2 == 0) {
      throw new Error("entrada invalida, divisão por zero nao e valida");
    }
  } catch (erro) {
    console.log("Ocorreu um erro a funcao dividir: ", erro.message);
    return "A divisão não pode ser concluída pois divisor é zero";
  }
  try {
    if (!Number.isInteger(num1) && !Number.isInteger(num2)) {
      throw new Error("entrada invalida, numeros nao inteiros");
    }
  } catch (erro) {
    console.log("Ocorreu um erro a funcao dividir: ", erro.message);
    return "A divisão não pode ser concluída pois os inputs não são números";
}
switch (operador) {
    case '+':
       let resultado = num1 + num2;
       console.log(resultado);
    break;

    case '-':
       return num1 - num2;
    break;

    case '*':
       return num1 * num2;
    break;

    case '/':
       return num1 / num2;
    break;

    case '%':
       return num1 % num2;
    break;

    return resultado
}
}

let numero1 = prompt("DIGITE O PRIMEIRO NÚMERO: ")
let numero2 = prompt("DIGITE O SEGUNDO NÚMERO: ")
let input_operador = prompt("DIGITE O OPERADOR: ")

calculadora(numero1, numero2, input_operador);
function soma (num1, num2)
{
    let x = num1
    let y = num2
    let soma = 0
    while(num1 <= num2)
    {
        if((num1 % 2) === 1)
        {
            soma += num1
        }
        num1++
    }
    alert("A soma dos números ímpares no intervalo de " + x + " (incluído) até " + y + " (incluído) é " + soma + ".")
}

let a = parseInt(prompt("Digite o número 1: "))
let b = parseInt(prompt("Digite o número 2: "))

soma(a, b)

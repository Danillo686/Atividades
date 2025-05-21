var idade = 66



if (idade < 16) {
    console.log ("Não vota")
}else
    if ( idade < 18 || idade > 60){
        console.log ("Voto Opcional")
    } else if (idade >= 18){
        console.log ("Voto Obrigatório")
}
console.log (`Você tem ${idade} anos`)

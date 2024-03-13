function reverterString(strg){
    let resolucao ="";
    let tamanho = strg.length-1;

for(let posicao = tamanho; posicao >=0; posicao --){
    resolucao = resolucao + strg[posicao];
}

console.log(resolucao);
return resolucao;
}
reverterString("ola")
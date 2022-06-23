var valores = [4, 5, 8, 2, 0]

console.log(valores.sort())

console.log(valores.indexOf(5))

for(var pos = 0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

for(var p in valores){
    console.log(`A posição ${p} tem o valor ${valores[p]}`)
}
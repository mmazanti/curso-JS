var valores = [8, 1, 7, 4, 2, 9]
valores.sort()
console.log(valores)
for(var pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
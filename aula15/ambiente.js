let num = [5,8,2,7]

num[4] = 9
num.push(6)

console.log(`Nosso vetor é o ${num}`)
console.log(`Nosso vetor tem ${num.length} elementos`)
console.log(`Esses são os nossos elementos em ordem crescente : ${num.sort()}`)

var pos = num.indexOf(5)
if(pos == -1){
    console.log(`O valor não foi encontrado`)
} else {
    console.log(`O valor está na posição ${pos}`)
}
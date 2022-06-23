// Arrays

let arr = [3,7,1,5,9,0]

console.log(arr)
console.log(arr.length)

for(let indice in arr){
    console.log(arr[indice])
}

arr.pop() // remove o último elemento
console.log(arr)

arr.push(0) // adiciona um elemento na última posição
console.log(arr)

arr.sort()
console.log(arr) // coloca os elementos do array em ordem crescente
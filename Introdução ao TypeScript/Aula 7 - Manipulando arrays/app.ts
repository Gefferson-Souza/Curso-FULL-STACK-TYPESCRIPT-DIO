const arrayNumero: Array<number> = [1, 2, 3, 4, 5];

const arrayLetra: string[] = ['a', 'b', 'c', 'd'];

const buscaNumero: number | undefined = arrayNumero.find(num => num === 4);

console.log(buscaNumero);


let novaArray: number[] = [1,2,3,4,5,6,7,8];

novaArray.forEach(num => {
    if(num > 2 && num % 2 ===0){
        return console.log(num*2)
    }
})
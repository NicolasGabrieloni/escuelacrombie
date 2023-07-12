const array = [{
    nombre: "alumno1",
    nota: 10
},
{
    nombre: "alumno2",
    nota: 8
},
{
    nombre: "alumno3",
    nota: 10
},
{
    nombre: "alumno4",
    nota: 7
},
{
    nombre: "alumno5",
    nota: 5
},
]


let menorNota = 0;
let mayorNota = 0;

for (let i = 0; i < array.length - 1; i++) {

    menorNota = array[i].nota


    if (menorNota > array[i + 1].nota) {
        menorNota = array[i + 1].nota
    } else {
        menorNota = array[i].nota
    }

    mayorNota = array[i].nota

    if (mayorNota < array[i].nota) {
        mayorNota = array[i].nota
    }
}

console.log("el alumno con menor nota es:", menorNota)
console.log("el alumno con mayor nota es:", mayorNota)


let string = 'LaCrOmbiNeTa'
let letrasMayusculas = []

string.split('').filter(item => {
    if (item === item.toUpperCase()) {
        letrasMayusculas.push(item)
    }
})

console.log(letrasMayusculas)
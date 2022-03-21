// Carne - 400 gramas por pessoa + de 6 horas - 650
// Cerveja - 1200 ml por pessoa + de 6 horas - 2000 ml
// Refrigerante / Agua - 1000 ml por pessoa + de 6 horas - 1500 ml

// Crianças valem por 0,5

function calcular() {

    let resultado = document.getElementById("resultado")
    resultado.innerHTML= `<br>${calcCarne()} Kg de Carne<br> ${calcCerveja()} L de Cerveja<br> ${calcRefriAgua()} L de Refrigerante/Agua`

}

function calcCarne() {

    let adults = document.getElementById('adults').value
    let childs = document.getElementById('childs').value
    let time = document.getElementById('time').value
    let total = 0

    if (time > 6) {
        adults = adults * 650
        childs = childs * 0.5
        childs = childs * 650
        total = adults + childs
        total = total / 1000
    } else {
        adults = adults * 450
        childs = childs * 0.5
        childs = childs * 450
        total = adults + childs
        total = total / 1000
    }

    return total

}

function calcCerveja() {

    let adults = document.getElementById('adults').value
    let time = document.getElementById('time').value

    if(time > 6) {
        adults = adults * 2000
        adults = adults / 1000
    }else{
        adults = adults * 1200
        adults = adults / 1000
    }

    return adults

}


function calcRefriAgua(){

    let adults = document.getElementById('adults').value
    let childs = document.getElementById('childs').value
    let time = document.getElementById('time').value 
    let total = 0

    if(time > 6) {
        adults = adults * 1500
        childs = childs * 0.5
        childs = childs * 1500
        total = childs + adults
        total = total / 1000
    }else{
        adults = adults * 1000
        childs = childs * 0.5
        childs = childs * 1000
        total = childs + adults
        total = total / 1000
    }

    return total
}

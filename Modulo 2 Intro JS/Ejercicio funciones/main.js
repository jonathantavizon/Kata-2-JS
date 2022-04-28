function tipoValor(dato){
    console.log(typeof dato)
}

 function areaCuadrado(lado){
     var area =lado*lado
    console.log(area)
 }

 function areaRectangulo(base, altura){
     var area = base*altura
     console.log(area)
 }

 function areaCirculo(radio){
     var pi = 3.1416
     var area = pi*radio*radio
     console.log(area)
 }

 function areaRombo(diagonalMayor, diangonalMenor){
    var area = (diagonalMayor*diangonalMenor)/2
    console.log(area)
 }

 function tipoNumero(valor){
     if(valor > 0){
         console.log("el número es positivo")
     }
     else if(valor < 0){
        console.log("el número es negativo")
     }
     else{
         console.log("el número es cero")
     }
 }

 function tipoLetra(letra){
    if(letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"){
        console.log("Es vocal minúscula")
    }
    else if(letra === "A" || letra === "E" || letra === "I" || letra === "O" || letra === "U"){
        console.log("Es vocal mayúscula")
    }
    else{
        console.log("Es consonante")
    }
 }

 tipoValor("Hola")
 tipoValor(13)
 areaCuadrado(2)
 areaRectangulo(3,5)
 areaCirculo(5)
 areaRombo(6,4)
 tipoNumero(10)
 tipoNumero(-5)
 tipoNumero(0)
 tipoLetra("a")
 tipoLetra("c")
 tipoLetra("I")
 juego()

 function juego(){
    var jugador1 = prompt("Ingresa piedra, papel o tijeras")
    var jugador2 = prompt("Ingresa piedra, papel o tijeras")
    if (jugador1 === "piedra" && jugador2 === "tijeras"){
        console.log("Jugador 1 gana")
    }
    else if (jugador1 === "tijeras" && jugador2 === "papel"){
        console.log("Jugador 1 gana")
    }
    else if (jugador1 === "papel" && jugador2 === "piedra"){
        console.log("Jugador 1 gana")
    }
    else if (jugador2 === "piedra" && jugador1 === "tijeras"){
        console.log("Jugador 2 gana")
    }
    else if (jugador2 === "tijeras" && jugador1 === "papel"){
        console.log("Jugador 2 gana")
    }
    else if (jugador2 === "papel" && jugador1 === "piedra"){
        console.log("Jugador 2 gana")
    }
    else{
        console.log("Empate")
    }
 }

let play = function (userChoice) {

    //Eleccion del usuario y muestra en HTML
    if (userChoice === "agua" || userChoice === "tierra" || userChoice === "fuego" || userChoice === "metal" || userChoice === "aire") {
        document.getElementById("jugador").innerHTML = `Elegiste el elemento ${userChoice} `;
    }

    //Eleccion de la maquina (utilizando un Math.random()) y muestra en HTML
    let machineChoice = Math.random();
    if (machineChoice < 0.20) {
        machineChoice = "agua";
    } else if (machineChoice < 0.40) {
        machineChoice = "tierra";
    } else if (machineChoice < 0.60) {
        machineChoice = "fuego";
    } else if (machineChoice < 0.80) {
        machineChoice = "metal"
    } else {
        machineChoice = "aire"
    }
    document.getElementById("maquina").innerHTML = ` La maquina eligio el elemento ${machineChoice}`

    //Comparacion de elecciones y muestra en el HTML
    let compare = function () {
        if (userChoice === machineChoice) {
            return "¡Hay empate!"
        } else if (userChoice == "agua") {
            if (machineChoice == "fuego" || machineChoice == "aire") {
                return "¡Gana el jugador!"
            } else {
                return "¡Gana la maquina!"
            }
        } else if (userChoice == "tierra") {
            if (machineChoice == "metal" || machineChoice == "agua") {
                return "¡Gana el jugador!"
            } else {
                return "¡Gana la maquina!"
            }
        } else if (userChoice == "fuego") {
            if (machineChoice == "tierra" || machineChoice == "metal") {
                return "¡Gana el jugador!"
            } else {
                return "¡Gana la maquina!"
            }
        } else if (userChoice == "aire") {
            if (machineChoice == "fuego" || machineChoice == "tierra") {
                return "¡Gana el jugador!"
            } else {
                return "¡Gana la maquina!"
            }
        } else if (userChoice == "metal") {
            if (machineChoice == "agua" || machineChoice == "aire") {
                return "¡Gana el jugador!"
            } else {
                return "¡Gana la maquina!"
            }
        } else {
            return "¡Se encontro un error! Intenta nuevamente"
        }
    }

    let ganador = compare();
    document.getElementById("resultado").innerHTML = ganador;
    document.getElementById("separador").innerHTML = "por ende...";
}
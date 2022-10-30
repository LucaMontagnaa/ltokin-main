//#region 
window.addEventListener("load", () => {
    webgazer.setGazeListener(function (data, elapsedTime) {
        if (data == null) {
            return;
        }
        var xprediction = data.x; //these x coordinates are relative to the viewport
        var yprediction = data.y; //these y coordinates are relative to the viewport
        console.log(xprediction, yprediction);
    }).begin();

    setInterval(async () => {
        let data = await webgazer.getCurrentPrediction();
        console.log(data);
    }, 1000);
});
//#endregion
//Botones, Text Areas, etc.
let onButton
let texto = document.getElementById ("textArea")
let msg = new SpeechSynthesisUtterance()

console.log(window.location.href);
let url = new URL(window.location.href)
let textoAnterior = url.searchParams.get('texto')
texto.value = textoAnterior

let btns = document.getElementsByClassName("boton1")

for(let i = 0; i < btns.length; i++) {
    console.log(btns[i])
    btns[i].addEventListener("mouseenter", handleEnter)
    btns[i].addEventListener("mouseleave", handleLeave)
}

let botonesnum = document.getElementsByClassName("numero")

for(let i = 0; i < botonesnum.length; i++) {
    console.log(botonesnum[i])
    botonesnum[i].addEventListener("mouseenter", handleEnter)
    botonesnum[i].addEventListener("mouseleave", handleLeave)
}

let space = document.getElementsByClassName("btnspace")

for (let i = 0; i < space.length; i++) {
    console.log(space[i])
    space[i].addEventListener("mouseenter", espacio)
    space[i].addEventListener("mouseleave", handleLeave)
}

let backspace = document.getElementsByClassName("btndelete")

for (let i = 0; i < backspace.length; i++) {
    console.log(backspace[i])
    backspace[i].addEventListener("mouseenter", borrar)
    backspace[i].addEventListener("mouseleave", handleLeave)
}

let borrar_todo = document.getElementsByClassName("btnborrar")

for (let i = 0; i < borrar_todo.length; i++) {
    console.log(borrar_todo[i])
    borrar_todo[i].addEventListener("mouseenter", borrar_completo)
    borrar_todo[i].addEventListener("mouseleave", handleLeave)
}

let seccionA = document.getElementsByClassName ("btnseccionA")

for (let i = 0; i < seccionA.length; i++) {
    console.log(seccionA[i])
    seccionA[i].addEventListener("mouseenter", seccion1)
    seccionA[i].addEventListener("mouseleave", handleLeave)
}

let seccionJ = document.getElementsByClassName ("btnseccionJ")

for (let i = 0; i < seccionJ.length; i++) {
    console.log(seccionJ[i])
    seccionJ[i].addEventListener("mouseenter", seccion2)
    seccionJ[i].addEventListener("mouseleave", handleLeave)
}

let seccionS = document.getElementsByClassName ("btnseccionS")

for (let i = 0; i < seccionS.length; i++) {
    console.log(seccionS[i])
    seccionS[i].addEventListener("mouseenter", seccion3)
    seccionS[i].addEventListener("mouseleave", handleLeave)
}

let seccion0 = document.getElementsByClassName ("btnseccion0")

for (let i = 0; i < seccion0.length; i++) {
    console.log(seccion0[i])
    seccion0[i].addEventListener("mouseenter", seccion4)
    seccion0[i].addEventListener("mouseleave", handleLeave)
}

let seccionSS = document.getElementsByClassName ("btnseccionSS")

for (let i = 0; i < seccionSS.length; i++) {
    console.log(seccionSS[i])
    seccionSS[i].addEventListener("mouseenter", seccion5)
    seccionSS[i].addEventListener("mouseleave", handleLeave)
}

let inicio = document.getElementsByClassName("volver")

for (let i = 0; i < inicio.length; i++) {
    console.log(inicio[i])
    inicio[i].addEventListener("mouseenter", vinicio)
    inicio[i].addEventListener("mouseleave", handleLeave)
}

//Funciones
//let txtArea = document.getElementById("textArea")



function handleLeave() {
    onButton = null;
}

function vinicio(d) {
    onButton = d.target;
    setTimeout(() => {
        if (onButton === d.target) {
            window.location.href = '/index.html'
        }
    }, 2000);
}

function handleEnter(e) {
    onButton = e.target;
    setTimeout(() => {
        if(onButton === e.target){
            texto.value = texto.value + e.target.innerHTML;
            let voices = window.speechSynthesis.getVoices()
            msg.voice = voices[10]
            msg.text = texto.value
            msg.lang = 'es'
            window.speechSynthesis.speak(msg)
        }
    }, 2000);
}



function espacio (a) {
    onButton = a.target;
    setTimeout(() => {
        if (onButton === a.target) {
            texto.value = texto.value += " ";
        }
    }, 2000);
}

function borrar (b) {
    onButton = b.target;
    setTimeout(() => {
        if (onButton === b.target) {
            texto.value = texto.value.substring(0, texto.value.length - 1)        }
    }, 2000);
}

function borrar_completo (c) {
    onButton = c.target;
    setTimeout(() => {
        if (onButton === c.target) {
            texto.value = texto.value.substring(0, texto.value) 
        }
    },2000);
}

function seccion1 (d) {
    onButton = d.target;
    setTimeout(() => {
        if (onButton === d.target) {
            window.location.href = './A-I.html?texto=' + texto.value
        }
    },2000);
}

function seccion2 (d) {
    onButton = d.target;
    setTimeout(() => {
        if (onButton === d.target) {
            window.location.href = './J-R.html?texto=' + texto.value
        }
    },2000);
}

function seccion3 (d) {
    onButton = d.target;
    setTimeout(() => {
        if (onButton === d.target) {
            window.location.href = './S-Z.html?texto=' + texto.value
        }
    },2000);
}

function seccion4 (d) {
    onButton = d.target;
    setTimeout(() => {
        if (onButton === d.target) {
            window.location.href = './0-9.html?texto=' + texto.value
        }
    },2000);
}

function seccion5 (d) {
    onButton = d.target;
    setTimeout(() => {
        if (onButton === d.target) {
            window.location.href = './signos.html?texto=' + texto.value
        }
    },2000);
}
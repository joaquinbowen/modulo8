function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function demo() {
    console.log("Inicio");
    await esperar(3000);
    console.log("finnnn")
}

demo();
console.log("fin del programa");
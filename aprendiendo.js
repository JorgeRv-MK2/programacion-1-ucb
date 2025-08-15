// Convierte un binario (string) a decimal
function binarioADecimal(binario) {
    let decimal = 0;
    for (let i = 0; i < binario.length; i++) {
        decimal = decimal * 2 + (binario[i] === '1' ? 1 : 0);
    }
    return decimal;
}

// Función principal que se ejecuta al presionar el botón
function mi_primer_algoritmo() {
    let binario = document.getElementById("inputBinario").value.trim();

    // Validación: solo 0 y 1
    if (!/^[01]+$/.test(binario)) {
        document.getElementById("resultado").innerText = "⚠️ Ingresa solo números binarios (0 o 1).";
        return;
    }

    let decimal = binarioADecimal(binario);
    document.getElementById("resultado").innerText = `El número ${binario} en decimal es: ${decimal}`;
}

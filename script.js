let display = document.getElementById('display');

// Adiciona caracteres ao visor
function appendToDisplay(value) {
    display.value += value;
}

// Limpa o visor
function clearDisplay() {
    display.value = '';
}

// Calcula a expressão no visor
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Erro';
    }
}
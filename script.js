let current = "";

function press(key) {
    current += key;
    document.getElementById("display").value = current;
}

function calculate() {
    try {
        // Use eval safely for simple calculator
        let result = eval(current);
        document.getElementById("display").value = result;
        current = result.toString();
    } catch {
        document.getElementById("display").value = "Error";
        current = "";
    }
}

function clearDisplay() {
    current = "";
    document.getElementById("display").value = "";
}

function convertTemperature() {
    const temperatureInput = parseFloat(document.getElementById("temperatureInput").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    const resultText = document.getElementById("resultText");
    
    if (fromUnit === toUnit) {
        resultText.textContent = `The temperature is the same in ${toUnit}`;
        return;
    }
    
    let result;
    
    switch (fromUnit) {
        case "°C":
            if (toUnit === "°F") {
                result = (temperatureInput * 9/5) + 32;
            } else if (toUnit === "K") {
                result = temperatureInput + 273.15;
            }
            break;
        case "°F":
            if (toUnit === "°C") {
                result = (temperatureInput - 32) * 5/9;
            } else if (toUnit === "K") {
                result = (temperatureInput - 32) * 5/9 + 273.15;
            }
            break;
        case "K":
            if (toUnit === "°C") {
                result = temperatureInput - 273.15;
            } else if (toUnit === "°F") {
                result = (temperatureInput - 273.15) * 9/5 + 32;
            }
            break;
    }
    
    resultText.textContent = `${temperatureInput} ${fromUnit.charAt(0).toUpperCase() + fromUnit.slice(1)} = ${result.toFixed(2)} ${toUnit.charAt(0).toUpperCase() + toUnit.slice(1)}`;
}

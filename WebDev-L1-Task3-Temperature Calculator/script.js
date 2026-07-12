function convertTemperature() {

    let temp = parseFloat(document.getElementById("degrees").value);
    let type = document.getElementById("type").value;
    let result = document.getElementById("result");

    if (isNaN(temp)) {
        result.innerHTML = "Please enter a valid temperature";
        return;
    }

    if (type == "C") {
        let f = (temp * 9/5) + 32;
        result.innerHTML = `${f.toFixed(2)} °F`;
    }
    else if (type == "F") {
        let c = (temp - 32) * 5/9;
        result.innerHTML = `${c.toFixed(2)} °C`;
    }
    else if (type == "K") {
        let c = temp - 273.15;
        result.innerHTML = `${c.toFixed(2)} °C`;
    }
}
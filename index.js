


lengthEl = document.getElementById("length-el")
volumeEl = document.getElementById("volume-el")
massEl = document.getElementById("mass-el")

   let metricLength = inputEl.value * 3.281
   let imperialLength = inputEl.value / 3.281


function convert(){         
    inputEl = document.getElementById("input-el")

    lengthEl.textContent = `${inputEl.value} meters = ${(inputEl.value * 3.281).toFixed(3)} feet | ${inputEl.value} feet = ${(inputEl.value / 3.281).toFixed(3)} meters`
    volumeEl.innerHTML = `${inputEl.value} liters = ${(inputEl.value * 0.264).toFixed(3)} gallons | ${inputEl.value} gallons = ${(inputEl.value / 0.264).toFixed(3)} liters`
    massEl.innerHTML = `${inputEl.value} kilos = ${(inputEl.value * 2.204).toFixed(3)} pounds | ${inputEl.value} pounds = ${(inputEl.value / 2.204).toFixed(3)} kilos`
}

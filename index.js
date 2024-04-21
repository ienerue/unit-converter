/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const input = document.getElementById("input")
const convertBtn = document.getElementById("convert-btn")
const lengthParagraph = document.getElementById("length-paragraph")
const volumeParagraph = document.getElementById("volume-paragraph")
const massParagraph = document.getElementById("mass-paragraph")

convertBtn.addEventListener("click", function() {
    lengthParagraph.innerHTML = `${input.value} m = ${(input.value * 3.281).toFixed(3)} ft | ${input.value} ft = ${(input.value / 3.281).toFixed(3)} m`
    volumeParagraph.innerHTML = `${input.value} l = ${(input.value * 0.264).toFixed(3)} gal | ${input.value} gal = ${(input.value / 0.264).toFixed(3)} l`
    massParagraph.innerHTML = `${input.value} kg = ${(input.value * 2.204).toFixed(3)} lb | ${input.value} lb = ${(input.value / 2.204).toFixed(3)} kg`
})
const button = document.querySelector("button")

button.onclick = () => {
    const result = document.querySelector("#valorConvertido")
    const real = parseFloat(document.querySelector("#brl").value)
    const dollar = 0.20
    const calc = (real * dollar).toFixed(2)

    result.innerHTML=`${calc}`
}
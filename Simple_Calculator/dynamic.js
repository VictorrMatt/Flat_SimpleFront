// each function does a different operation
function sumFunction(fnumber, snumber) { 
    let sum = fnumber + snumber
    document.getElementById("result").innerHTML = sum.toFixed(2)
}
function subFunction(fnumber, snumber) {
    let sub = fnumber - snumber
    document.getElementById("result").innerHTML = sub.toFixed(2)
}
function prodFunction(fnumber, snumber) {
    let prod = fnumber * snumber
    document.getElementById("result").innerHTML = prod.toFixed(2)
}
function divFunction(fnumber, snumber) {
    let div = fnumber / snumber
    document.getElementById("result").innerHTML = div.toFixed(2)
}

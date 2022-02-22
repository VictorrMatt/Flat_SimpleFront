// each function does a different operation
function sumFunction(fnumber, snumber) { 
    let sum = fnumber + snumber
    document.getElementById("result").innerHTML = sum
}
function subFunction(fnumber, snumber) {
    let sub = fnumber - snumber
    document.getElementById("result").innerHTML = sub
}
function prodFunction(fnumber, snumber) {
    let prod = fnumber * snumber
    document.getElementById("result").innerHTML = prod
}
function divFunction(fnumber, snumber) {
    let div = fnumber / snumber
    document.getElementById("result").innerHTML = div
}

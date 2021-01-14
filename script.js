var increment =  document.querySelector("#increase")
var decrement =  document.querySelector("#decrease")
var reset =  document.querySelector("#reset")
var op =  document.querySelector("#output")


increment.addEventListener("click",() => {
    op.value++
})

decrement.addEventListener("click",() => {
    op.value--
})

reset.addEventListener("click",() => {
    op.value = 0
})






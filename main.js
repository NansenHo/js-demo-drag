let div = document.createElement("div")
div.className = "demo"
div.style.top = "auto"
div.style.left = "auto"
// console.log(div.classList, div.className)
document.body.appendChild(div)

let move = false
let lastX
let lastY

document.body.onmousedown = function(e){
    lastX = e.clientX
    lastY = e.clientY
    move = true
}
document.body.onmousemove = function(e){
    if(move){
        let deltaX = e.clientX - lastX
        let deltaY = e.clientY - lastY
        // div.style.left 如果是 auto 等值，
        // 那 parseInt(div.style.left) 的结果就会是 NaN
        // 为了避免拿不到值，所以就加了 "|| 0"
        let nowX = parseInt(div.style.left) || 0
        let nowY = parseInt(div.style.top) || 0 
        // JS 的 .style 只能取到内联样式
        div.style.left = nowX + deltaX + "px"
        div.style.top = nowY + deltaY + "px"
        lastX = e.clientX
        lastY = e.clientY
    }
}
document.body.onmouseup = function(){
    move = false
} 
let btn = document.getElementById('togglebtn');
let bulb = document.getElementById('bulb');
btn.addEventListener('click', bulbs)
function bulbs(e){
    if (btn.textContent.includes('On')) {
        bulb.src = "img/pic_bulbon.gif"
        btn.textContent = "Turn Off"
    }
    else {
        bulb.src = "img/pic_bulboff.gif"
        btn.textContent = "Turn On"
    }
}

var chooseValue = 0
var q1 = document.getElementById('q1')
var q2 = document.getElementById('q2')
var q3 = document.getElementById('q3')
var q4 = document.getElementById('q4')
var q5 = document.getElementById('q5')
var q6 = document.getElementById('q6')

q1.onclick = function () {
    chooseValue = 1;
    sessionStorage.setItem("chooseValue", 1)
    this.style.backgroundColor = '#a7a9ad';
    q2.style.backgroundColor = '';
    q3.style.backgroundColor = '';
    q4.style.backgroundColor = '';
    q5.style.backgroundColor = '';
    q6.style.backgroundColor = '';
}
q2.onclick = function () {
    chooseValue = 2;
    sessionStorage.setItem('chooseValue', 2)
    this.style.backgroundColor = '#a7a9ad';
    q1.style.backgroundColor = '';
    q3.style.backgroundColor = '';
    q4.style.backgroundColor = '';
    q5.style.backgroundColor = '';
    q6.style.backgroundColor = '';
}
q3.onclick = function () {
    chooseValue = 3;
    sessionStorage.setItem('chooseValue', 3)
    this.style.backgroundColor = '#a7a9ad';
    q2.style.backgroundColor = '';
    q1.style.backgroundColor = '';
    q4.style.backgroundColor = '';
    q5.style.backgroundColor = '';
    q6.style.backgroundColor = '';
}
q4.onclick = function () {
    chooseValue = 4;
    sessionStorage.setItem('chooseValue', 4)
    this.style.backgroundColor = '#a7a9ad';
    q2.style.backgroundColor = '';
    q3.style.backgroundColor = '';
    q1.style.backgroundColor = '';
    q5.style.backgroundColor = '';
    q6.style.backgroundColor = '';
}
q5.onclick = function () {
    chooseValue = 5;
    sessionStorage.setItem('chooseValue', 5)
    this.style.backgroundColor = '#a7a9ad';
    q2.style.backgroundColor = '';
    q3.style.backgroundColor = '';
    q4.style.backgroundColor = '';
    q1.style.backgroundColor = '';
    q6.style.backgroundColor = '';
}
q6.onclick = function () {
    chooseValue = 6;
    sessionStorage.setItem('chooseValue', 6)
    this.style.backgroundColor = '#a7a9ad';
    q2.style.backgroundColor = '';
    q3.style.backgroundColor = '';
    q4.style.backgroundColor = '';
    q5.style.backgroundColor = '';
    q1.style.backgroundColor = '';
}
// if (suiji !== 0) {
//     chooseValue = suiji;
//     sessionStorage.setItem('chooseValue', suiji)
// }
// export { chooseValue }
document.getElementById('tijiao').onclick = function () {
    if (chooseValue !== 0) {
        window.location.href = './exam.html';
        // if (chooseValue == 1) {

        // }
    }
}

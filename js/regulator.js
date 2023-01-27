var up1x = 0;
var down1x = 0;
var up2x = 0;
var down2x = 0;
var reg_num = 1;
var ydlim = 92;
var sydlim = 920;
var srmpxlim = 800;
var rmpxlim = 80;
var lock = 0
var codesave = 0 //opcode变换时候的变量:0表示opcode0图片显示； 1表示opcode1图片显示； 4表示save按钮功能变为保存value
var saveop = 4 //保存opcode之后的变量： 0表示当前是opcode0模式；1表示当前是opcode1模式；4表示up1按钮功能变为切换opcode模式
var secfuc = 0 //左面两个上下键的第二功能
var Kp_v = Kp, Ki_v = Ki, Kd_v = Kd

var reg_value = document.getElementById('reg_value');
// reg_value.innerHTML = parseInt(reg_value)

document.getElementById('up1').onmousedown = function () {
    $(this).css('opacity', 1);
    //  up1x+=1;
    // if (codesave == 1) {


    // }
    // if (codesave == 0) {

    // }
    if (lock % 2 == 1 && secfuc % 2 == 1 && saveop == 4) {//切换opcode
        // console.log(5353)
        $('#opcode1').css('opacity', 1)
        $('#opcode0').css('opacity', 0)
        codesave = 1

    }
    if (lock % 2 == 1 && saveop == 1) {
        reg_num += 1
        if (reg_num == 16) {
            reg_num += 27;
        }
        if (reg_num >= 49) {
            reg_num = 49
        }
        $('#opcode1').css('opacity', 0)
        $('#opcode0').css('opacity', 0)
        document.getElementById('reg_num').style.left = '135px';
        document.getElementById('reg_num').innerHTML = parseInt(reg_num);
        // document.getElementById('reg_value').innerHTML = parseInt(reg_value);
        setInterval(reg_update, 500)
    }
    if (lock % 2 == 1 && saveop == 0) {
        // console.log('123', secfuc, saveop)
        reg_num += 1

        if (reg_num >= 10) {
            reg_num = 10
        }
        $('#opcode1').css('opacity', 0)
        $('#opcode0').css('opacity', 0)
        document.getElementById('reg_num').style.left = '135px';
        document.getElementById('reg_num').innerHTML = parseInt(reg_num);
        // document.getElementById('reg_value').innerHTML = parseInt(reg_value);
        setInterval(reg_update, 500)
    }
    if (lock % 2 == 0) {
        reg_num += 1;
        if (reg_num >= 10) {
            reg_num = 10;
        }
        $('#opcode1').css("opacity", 0)
        $('#opcode0').css("opacity", 0)
        document.getElementById('reg_num').style.left = '135px';
        document.getElementById('reg_num').innerHTML = parseInt(reg_num);
        // document.getElementById('reg_value').innerHTML = parseInt(reg_value);

    }

}

document.getElementById('up1').onmouseup = function () {
    $(this).css('opacity', 0);
    // up1x+=1;
}

document.getElementById('down1').onmousedown = function () {
    $(this).css('opacity', 1);

    if (reg_num <= 1) {
        reg_num = 1;
    }
    if (lock % 2 == 1 && secfuc % 2 == 1) {//切换opcode
        $('#opcode1').css('opacity', 0)
        $('#opcode0').css('opacity', 1)
        codesave = 0
    }
    if (lock % 2 == 1 && saveop == 1) {
        reg_num -= 1
        if (reg_num == 42) {
            reg_num -= 27;
        }
        if (reg_num <= 1) {
            reg_num = 1
        }
        $('#opcode1').css('opacity', 0)
        $('#opcode0').css('opacity', 0)
        document.getElementById('reg_num').style.left = '135px';
        document.getElementById('reg_num').innerHTML = parseInt(reg_num);
        // document.getElementById('reg_value').innerHTML = parseInt(reg_value);
        setInterval(reg_update, 500)

    }
    if (lock % 2 == 1 && saveop == 0) {
        reg_num -= 1

        if (reg_num <= 1) {
            reg_num = 1
        }
        $('#opcode1').css('opacity', 0)
        $('#opcode0').css('opacity', 0)
        document.getElementById('reg_num').style.left = '135px';
        document.getElementById('reg_num').innerHTML = parseInt(reg_num);
        // document.getElementById('reg_value').innerHTML = parseInt(reg_value);
        setInterval(reg_update, 500)

    }
    if (lock % 2 == 0) {
        reg_num -= 1;
        if (reg_num <= 1) {
            reg_num = 1
        }
        $('#opcode1').css("opacity", 0)
        $('#opcode0').css("opacity", 0)
        document.getElementById('reg_num').style.left = '';
        document.getElementById('reg_num').innerHTML = parseInt(reg_num);
        // document.getElementById('reg_value').innerHTML = parseInt(reg_value);

    }
}

document.getElementById('down1').onmouseup = function () {
    $(this).css('opacity', 0);
    // down1x+=1; 
}




document.getElementById('up2').onmousedown = function () {
    $(this).css('opacity', 1);
    // up2x+=1;
    if (lock % 2 == 1) {
        if (reg_num == 6) {
            rmpxlim += 1;
            if (rmpxlim != 80) {
                $('#light2_1').css('opacity', 1);
                $('#light2_4').css('opacity', 1);
            }
            if (rmpxlim == 80) {
                $('#light2_4').css('opacity', 0);
            }
            if (rmpxlim == 80 && ydlim != 92) {
                $('#light2_1').css('opacity', 1);
            }
            if (ydlim == 92 && rmpxlim == 80) {
                $('#light2_1').css('opacity', 0);
            }
            reg_value.innerHTML = rmpxlim;
        }
        if (reg_num == 7) {
            ydlim += 1;
            if (ydlim != 92) {
                $('#light2_1').css('opacity', 1);
                $('#light2_5').css('opacity', 1);
            }
            if (ydlim == 92) {
                $('#light2_5').css('opacity', 0);
            }
            if (ydlim == 92 && rmpxlim != 80) {
                $('#light2_1').css('opacity', 1);

            }
            if (ydlim == 92 && rmpxlim == 80) {
                $('#light2_1').css('opacity', 0);
            }
            reg_value.innerHTML = ydlim;
        }
    }
    if (lock % 2 == 1 && saveop == 1) {
        if (reg_num == 43) {
            Kd_v += 1
        }
        if (reg_num == 48) {
            Kp_v += 1
        }
        if (reg_num == 49) {
            Ki_v += 1
        }
    }
}

document.getElementById('up2').onmouseup = function () {
    $(this).css('opacity', 0);
    //    up2x+=1;
}



document.getElementById('down2').onmousedown = function () {
    $(this).css('opacity', 1);
    //    down2x+=1;
    if (lock % 2 == 1) {
        if (reg_num == 6) {
            rmpxlim -= 1;
            if (rmpxlim != 80) {
                $('#light2_1').css('opacity', 1);
                $('#light2_4').css('opacity', 1);
            }
            if (rmpxlim == 80) {
                $('#light2_4').css('opacity', 0);
            }
            if (rmpxlim == 80 && ydlim != 92) {
                $('#light2_1').css('opacity', 1);
            }
            if (ydlim == 92 && rmpxlim == 80) {
                $('#light2_1').css('opacity', 0);
            }
            reg_value.innerHTML = rmpxlim;
        }
        if (reg_num == 7) {
            ydlim -= 1;
            if (ydlim != 92) {
                $('#light2_1').css('opacity', 1);
                $('#light2_5').css('opacity', 1);
            }
            if (ydlim == 92) {
                $('#light2_5').css('opacity', 0);
            }
            if (ydlim == 92 && rmpxlim != 80) {
                $('#light2_1').css('opacity', 1);

            }
            if (ydlim == 92 && rmpxlim == 80) {
                $('#light2_1').css('opacity', 0);
            }
            reg_value.innerHTML = ydlim;
        }
    }
}

document.getElementById('down2').onmouseup = function () {
    $(this).css('opacity', 0);
    //    down2x+=1; 
}

document.getElementById('save').onmousedown = function () {
    $(this).css('opacity', 1)

    if (codesave == 1) {
        $('#opcode1').css("opacity", 0)
        $('#opcode0').css("opacity", 0)

        $('#reg_value').css('opacity', 1)

        document.getElementById('reg_num').innerHTML = parseInt(reg_num);
        // document.getElementById('reg_value').innerHTML = parseInt(reg_value);
        saveop = 1
        codesave = 4
    }
    else if (codesave == 0) {
        saveop = 0
        codesave = 4
        $('#opcode1').css("opacity", 0)
        $('#opcode0').css("opacity", 0)
        $('#reg_value').css('opacity', 1)
        document.getElementById('reg_num').innerHTML = parseInt(reg_num);


    }
    if (codesave == 4) {
        if (rmpxlim !== 80) {
            document.getElementById('bManualRMPLimit').style.color = '#00ff00'
        } else {
            document.getElementById('bManualRMPLimit').style.color = 'white'
        }
        if (ydlim !== 92) {
            document.getElementById('bManualFuelLimit').style.color = '#00ff00'
        } else {
            document.getElementById('bManualFuelLimit').style.color = 'white'
        }
        sydlim = ydlim;
        srmpxlim = rmpxlim;
        Kp = Kp_v
        Ki = Ki_v
        Kd = Kd_v
    }
}
document.getElementById('save').onmouseup = function () {
    $(this).css('opacity', 0)
}

//number
document.getElementById('reg_num').innerHTML = parseInt(reg_num);



//value update
function reg_update() {
    if (reg_num == 1) {
        reg_value.innerHTML = 0;
    }
    else if (reg_num == 2) {
        reg_value.innerHTML = ydx;
        // console.log('value',ydx)
    }
    else if (reg_num == 3) {
        reg_value.innerHTML = rmpx;
    }
    else if (reg_num == 4) {
        reg_value.innerHTML = 0;
    }
    else if (reg_num == 5) {
        if (value16x % 2 == 1 && value3x % 2 == 1 && value122x % 2 == 1 && value116x % 2 == 1 && value118x % 2 == 1 && valueMainx % 2 == 1) {
            reg_value.innerHTML = 27;
        }
        else {
            reg_value.innerHTML = 0;
        }

    }
    else if (reg_num == 6) {

        reg_value.innerHTML = rmpxlim;
    }
    else if (reg_num == 7) {
        reg_value.innerHTML = ydlim;
    }
    else if (reg_num == 8) {
        reg_value.innerHTML = 0;
    }
    else if (reg_num == 9) {
        reg_value.innerHTML = 0;
    }
    else if (reg_num == 10) {
        reg_value.innerHTML = 0;
    }
    else if (reg_num == 43) {
        reg_value.innerHTML = Kd_v
    }
    else if (reg_num == 48) {
        reg_value.innerHTML = Kp_v
    }
    else if (reg_num == 49) {
        reg_value.innerHTML = Ki_v
    } else {
        reg_value.innerHTML = 0
    }
    //  setTimeout(reg_update,500);

    if (act_num == 2) {
        document.getElementById('act_value').innerHTML = parseInt(yd1)
    }
    else if (act_num == 3) {
        document.getElementById('act_value').innerHTML = parseInt(yd)
    } else {
        document.getElementById('act_value').innerHTML = 0
    }
}


setInterval(reg_update, 500);

// else{
//     document.getElementById('reg_num').innerHTML = 'z' ;
//     document.getElementById('reg_value').innerHTML = 'm' ;
// }



document.getElementById('lock').onmousedown = function () {

    lock += 1
    secfuc += 1
    if (lock % 2 == 1) {
        saveop = 4
        $(this).css('opacity', 1)
        $('#opcode0').css('opacity', 1)
        document.getElementById('reg_num').innerHTML = '';
        // document.getElementById('reg_value').innerHTML = '' ; 
        // clearInterval(reg_update)
        $('#reg_value').css('opacity', 0)
    }
    if (lock % 2 == 0) {
        $(this).css('opacity', 0)
        $('#opcode0').css('opacity', 0)
        $('#opcode1').css('opacity', 0)
        $('#reg_value').css('opacity', 1)

        reg_num = 1
        setInterval(reg_update, 500)
        document.getElementById('reg_num').innerHTML = parseInt(reg_num);
        // document.getElementById('reg_value').innerHTML = parseInt(reg_value) ;



        // setInterval(reg_update,500);
        // reg_update();
    }
}

var act_num = 1, act_value = 0
document.getElementById('act_num').innerHTML = parseInt(act_num);
document.getElementById('act_value').innerHTML = parseInt(act_value);

document.getElementById('up3').onmousedown = function () {
    $(this).css('opacity', 1)
    act_num += 1
    if (act_num >= 10) {
        act_num = 10
    }
    if (act_num == 2) {
        act_value = parseInt(yd1)
    }
    if (act_num == 3) {
        act_value = parseInt(yd)
    }
    document.getElementById('act_num').innerHTML = parseInt(act_num);
    // document.getElementById('act_value').innerHTML = parseInt(act_value);

}
document.getElementById('up3').onmouseup = function () {
    $(this).css('opacity', 0)
}
document.getElementById('down3').onmousedown = function () {
    $(this).css('opacity', 1)
    act_num -= 1
    if (act_num <= 1) {
        act_num = 1
    }
    if (act_num == 2) {
        act_value = parseInt(yd1)
    }
    if (act_num == 3) {
        act_value = parseInt(yd)
    } else {
        act_value = 0
    }
    document.getElementById('act_num').innerHTML = parseInt(act_num);
    // document.getElementById('act_value').innerHTML = parseInt(act_value);

}
document.getElementById('down3').onmouseup = function () {
    $(this).css('opacity', 0)
}






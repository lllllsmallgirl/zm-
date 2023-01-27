
var socket = io()
var btn1 = document.getElementById('thandle')//驾驶台和集控室切换扳手

var btn2 = document.getElementById('btelegraph1lever')//驾驶台车钟手柄
var btn3 = document.getElementById('ttelegraph2lever')//集控车钟手柄
var eeydx = 0
var eeeydx = 0
btn1.addEventListener('click', function () {
    console.log('点了E2B切换扳手', thandlex)
    socket.emit('thandleclick', thandlex)
})
socket.on('thandleclick', function (tx) {
    if (tx % 2 == 1) {
        document.getElementById('thandle').style.transformOrigin = '31% 31%';
        document.getElementById('thandle').style.transform = 'rotate(' + 0 + 'deg)';
    }
    if (tx % 2 == 0) {
        document.getElementById('thandle').style.transformOrigin = '31% 31%';
        document.getElementById('thandle').style.transform = 'rotate(' + 90 + 'deg)';
    }
    thandlex = tx
    controlLocation()
})

socket.on('t_back', (e) => {
    console.log('出发了t_back', e)
    subTelegraph(e)
    document.getElementById('btelegraph1lever').style.top = e - 450 + 'px'
    var a = 0; //计算油门速度
    if (e >= -45 && e < -25) {
        a = 100;
    }
    if (e >= -25 && e < 5) {
        a = 90;
    }
    if (e >= 5 && e < 35) {
        a = 80;
    }
    if (e >= 35 && e < 65) {
        a = 70;
    }
    if (e >= 65 && e < 95) {
        a = 60;
    }
    if (e > 125 && e > 275) {
        a = 82 - (e - 125) * 100 / 150;
        a = -a;
    }
    brmp = a;
})

//连接成功就传递rmpx
setInterval(() => {
    socket.emit('rmpxSend', rmpx)

}, 500)

btn2.addEventListener('mouseup', function () {
    console.log('点击驾驶台滑块')
    socket.emit('blever', brmp, ydx, t, rmpx)
})
socket.on('blever', function (e1, e2, e3, e4) {
    console.log('e3=', e3)
    console.log('e1:', e1, 'e2:', e2)
    brmp = e1
    // t = e3
    subTelegraph(e3)
    document.getElementById('btelegraph1lever').style.top = e3 - 450 + 'px'
})

btn3.addEventListener('mousemove', function () {
    console.log('点击集控车钟滑块')
    socket.emit('tlever', trmp, ydx, tb)
})
socket.on('tlever', function (e1, e2, e3) {
    console.log('e3=', e3)
    console.log('e1:', e1, 'e2:', e2)
    trmp = e1
    // t = e3
    // subTelegraph(e3)
    document.getElementById('ttelegraph2lever').style.top = e3 + 'px'
    if (e3 >= -225 && e3 < -40) {
        a = parseInt(60 - (e3 + 40) * 40 / 185);
        ttelegraph2watch.innerHTML = a;
        speedLevelChange(a);
        schematicX = 1; //气动逻辑为状态1：气动逻辑完成
    };
    if (e3 >= -40 && e3 < -20) {
        ttelegraph2watch.innerHTML = 'START';
        a = 60;
        schematicX = 2; //气动逻辑为状态2：开始空气起动
        sdc2tx.drawImage(picMap, 306, 521, 123, 89, 72, 488, 155, 100); //速度车钟start位置
    };
    if (e3 >= -20 && e3 < 30) {
        ttelegraph2watch.innerHTML = 'STOP';
        schematicX = 1; //气动逻辑为状态1：气动逻辑完成
        sdc2tx.drawImage(picMap, 180, 521, 123, 89, 73, 488, 155, 100); //速度车钟stop位置
    };
    if (e3 >= 30 && e3 < 50) {
        ttelegraph2watch.innerHTML = 'START';
        sdc2tx.drawImage(picMap, 306, 521, 123, 89, 72, 488, 155, 100); //速度车钟start位置
    };
    if (e3 >= 50 && e3 < 250) {
        a = parseInt(-(e3 - 50) * 78 / 180);
        ttelegraph2watch.innerHTML = e3;
        speedLevelChange(-a);
        schematicX = 1; //气动逻辑为状态1：气动逻辑完成
    };
})
var conbtn1 = document.getElementById('conBefore')//原始工况
conbtn1.addEventListener('click', function () {
    console.log('点击原始工况')
    socket.emit('conbeforeclick', sio)
})
socket.on('conbeforeclick', function (e1) {
    console.log('e1=', e1)
    if (e1 == 1) {
        wx = 0; ydx = 0;
        console.log('wx', wx);
        impactwheelx = 0;
        console.log('imx', impactwheelx);
        value16x = 0;
        value122x = 0;
        value3x = 0;
        value116x = 0;
        value118x = 0;
        valueMainx = 0;
        condition.style.display = 'none';
        // conditionX+=1;
        btelegraph1lever.style.top = '-335px';
        z = 0;
        $('#wheelstart').css('display', 'none');
        $('#wheeloil1').css('display', 'none');
        $('#wheeloil1.5').css('display', 'none');
        $('#wheeloil2').css('display', 'none');
        $('#wheeloil3').css('display', 'none');
        $('#wheeloil4').css('display', 'none');
        btelegraph1lever.style.top = '-330px';
        ttelegraph1lever.style.top = '0px';
        ttelegraph2lever.style.top = '0px';
        ttelegraph2watch.innerHTML = 'STOP';

        lshutdownLed.style.backgroundColor = ' #800000';
        document.getElementById('lhandwheelDis').style.border = ''
        document.getElementById('lhandwheelCon').style.border = '1px solid red'


        startMove(document.getElementById('impactwheel'), 'opacity', 0);
        startMove(document.getElementById('wheelswitch'), 'opacity', 0);

        //调速器
        $('#light1_1').css('opacity', 0);
        $('#light1_2').css('opacity', 1);
        $('#light2_1').css('opacity', 0);
        $('#light2_2').css('opacity', 0);
        $('#light2_3').css('opacity', 1);
        $('#light2_4').css('opacity', 0);
        $('#light2_5').css('opacity', 0);
        rmpxlim = 80;
        ydlim = 92;


        lhandle1x = 1; //机旁页面扳手 指向LOCAL
        lhandle1.style.transformOrigin = '31% 31%';
        lhandle1.style.transform = 'rotate(' + 90 + 'deg)';
        lhandle2x = 1; //标识位 1为AHEAD 0为ASTERN
        lhandle2.style.transformOrigin = '31% 31%';
        lhandle2.style.transform = 'rotate(' + 90 + 'deg)';
        lhandle3x = 0; //标识位 0为LOCK 1为UNLOCK
        lhandle3.style.transformOrigin = '31% 31%';
        lhandle3.style.transform = 'rotate(' + 0 + 'deg)';
        thandlex = 0; //集控车钟页面扳手 指向BRIDGE
        thandle.style.transformOrigin = '31% 31%';
        thandle.style.transform = 'rotate(' + 90 + 'deg)';
        controlLocation();
        //机旁的手轮
        lwheelx1x = 5; //
        lprintPancel1(lwheelx1x);
        lwheelx2x = 0; //
        lprintPancel2(lwheelx2x);

        bStandBy.style.backgroundColor = '#01D867';
        bStandBy.innerHTML = 'FWE';
        cStandBy.style.backgroundColor = '#01D867';
        cStandBy.innerHTML = 'FWE';

        yd = 0;
        ydx = 0;
        rmp = 0;
        rmpx = 0;
        brmp = 0;
        trmp = 0;
        lrmp = 0;
        //	LED()
        // schematicX = 0;

        briled = 5;
        telled = 5;
        locled = 5;
        briLEDclear(briled);
        telLEDclear(briled, telled);
        lclearSpeedLed(briled, locled);
    }

})

var conbtn2 = document.getElementById('conReadyC')//备车完毕
conbtn2.addEventListener('click', function () {
    console.log('点击备车完毕')
    socket.emit('conReadyCclick', sio)
})
socket.on('conReadyCclick', function (e1) {
    if (e1 == 2) {
        value16x = 1;
        value122x = 1;
        value3x = 1;
        value116x = 1;
        value118x = 1;
        valueMainx = 1;
        condition.style.display = 'none';
        btelegraph1lever.style.top = '-335px';
        ttelegraph1lever.style.top = '0px';
        ttelegraph2lever.style.top = '0px';
        ttelegraph2watch.innerHTML = 'STOP';

        lshutdownLed.style.backgroundColor = ' #800000';

        //调速器
        $('#light1_1').css('opacity', 1);
        $('#light1_2').css('opacity', 0);
        $('#light2_2').css('opacity', 0);
        $('#light2_3').css('opacity', 0);


        z = 0;
        $('#wheelstart').css('display', 'none');
        $('#wheeloil1').css('display', 'none');
        $('#wheeloil1_5').css('display', 'none');
        $('#wheeloil2').css('display', 'none');
        $('#wheeloil3').css('display', 'none');
        $('#wheeloil4').css('display', 'none');

        lhandle3x = 0;
        wx = 0;
        yy = 0;
        startMove(document.getElementById('wheelswitch'), 'opacity', 0);

        impactwheelx = 0;
        startMove(document.getElementById('impactwheel'), 'opacity', 0);


        lhandle1x = 0; //机旁页面扳手 指向LOCAL
        lhandle1.style.transformOrigin = '31% 31%';
        lhandle1.style.transform = 'rotate(' + 0 + 'deg)';
        lhandle2x = 1; //标识位 1为AHEAD 0为ASTERN
        lhandle2.style.transformOrigin = '31% 31%';
        lhandle2.style.transform = 'rotate(' + 90 + 'deg)';
        lhandle3x = 0; //标识位 0为LOCK 1为UNLOCK
        lhandle3.style.transformOrigin = '31% 31%';
        lhandle3.style.transform = 'rotate(' + 0 + 'deg)';
        thandlex = 0; //集控车钟页面扳手 指向BRIDGE
        thandle.style.transformOrigin = '31% 31%';
        thandle.style.transform = 'rotate(' + 90 + 'deg)';
        controlLocation();
        //机旁的手轮
        lwheelx1x = 5; //
        lprintPancel1(lwheelx1x);
        lwheelx2x = 0; //
        lprintPancel2(lwheelx2x);

        bStandBy.style.backgroundColor = 'yellow';
        bStandBy.innerHTML = 'Stand By';
        cStandBy.style.backgroundColor = 'yellow';
        cStandBy.innerHTML = 'Stand By';

        //	LED()
        controlLocation();
        schematicX = 1;
        lwheelx1x = 5;
        lprintPancel1(lwheelx1x);

        yd = 0;
        ydx = 0;
        rmp = 0;
        rmpx = 0;
        brmp = 0;
        trmp = 0;
        lrmp = 0;
        //	LED()
        schematicX = 1;

        briled = 5;
        telled = 5;
        locled = 5;
        briLEDclear(briled);
        telLEDclear(briled, telled);
        lclearSpeedLed(briled, locled);
    }
})

var conbtn3 = document.getElementById('conOnSea')//主机运行
conbtn3.addEventListener('click', function () {
    socket.emit('conOnSeaclick', sio)
})
socket.on('conOnSeaclick', function (e1) {
    if (e1 == 3) {
        value16x = 1;
        value122x = 1;
        value3x = 1;
        value116x = 1;
        value118x = 1;
        valueMainx = 1;
        condition.style.display = 'none';
        //车钟杠杆位置
        btelegraph1lever.style.top = '-495px';
        //车令位置
        //LED()
        //briLEDclear()

        //调速器
        $('#light1_1').css('opacity', 1);
        $('#light1_2').css('opacity', 0);
        $('#light2_2').css('opacity', 1);
        $('#light2_3').css('opacity', 0);


        subTelegraph(-30);
        ttled1[0].style.background = '#00FF00';
        ttled2[0].style.background = '#00FF00';
        btled1[0].style.background = '#00FF00';
        btled2[0].style.background = '#00FF00';

        bStandBy.style.backgroundColor = '#01D867';
        bStandBy.innerHTML = 'At Sea';
        cStandBy.style.backgroundColor = '#01D867';
        cStandBy.innerHTML = 'At Sea';

        lshutdownLed.style.backgroundColor = ' #800000';

        lhandle1x = 0; //机旁页面扳手 指向remote
        lhandle1.style.transformOrigin = '31% 31%';
        lhandle1.style.transform = 'rotate(' + 0 + 'deg)';
        lhandle2x = 1; //标识位 1为AHEAD 0为ASTERN
        lhandle2.style.transformOrigin = '31% 31%';
        lhandle2.style.transform = 'rotate(' + 90 + 'deg)';
        lhandle3x = 0; //标识位 0为LOCK 1为UNLOCK
        lhandle3.style.transformOrigin = '31% 31%';
        lhandle3.style.transform = 'rotate(' + 0 + 'deg)';
        thandlex = 0; //集控车钟页面扳手 指向BRIDGE
        thandle.style.transformOrigin = '31% 31%';
        thandle.style.transform = 'rotate(' + 90 + 'deg)';
        controlLocation();
        //机旁的手轮
        lwheelx1x = 0; //
        lprintPancel1(lwheelx1x);
        lwheelx2x = 0; //
        lprintPancel2(lwheelx2x);


        //rmpx=61;
        brmp = 90;
        ydx = 90;
        schematicX = 1;
        lwheelx1x = 5;
        lprintPancel1(lwheelx1x);
    }
})

var wheelbtn1 = document.getElementById('wheeltouming')//调油手轮右侧
wheelbtn1.addEventListener('click', function () {
    console.log('机旁三维加油')
    socket.emit('wheeltoumingclick', z)
})
socket.on('wheeltoumingclick', function (e1) {
    if (e1 == 1) {
        $('#wheelstart').css('display', 'block');
        $('#wheeloil1').css('display', 'none');
        $('#wheeloil1_5').css('display', 'none');
        $('#wheeloil2').css('display', 'none');
        $('#wheeloil3').css('display', 'none');
        $('#wheeloil4').css('display', 'none');

        $('#panel_s').css('display', 'block');
        $('#panel').css('display', 'none');
        $('#panel_1').css('display', 'none');
        $('#panel_2').css('display', 'none');
        $('#panel_3').css('display', 'none');
        $('#panel_4').css('display', 'none');
        $('#panel_5').css('display', 'none');
        lrmp = 30;
        lwheelx2x = 4;
        lprintPancel2(4);

    }
    if (e1 == 2) {
        $('#wheelstart').css('display', 'none');
        $('#wheeloil1').css('display', 'block');
        $('#wheeloil1_5').css('display', 'none');
        $('#wheeloil2').css('display', 'none');
        $('#wheeloil3').css('display', 'none');
        $('#wheeloil4').css('display', 'none');

        $('#panel_s').css('display', 'none');
        $('#panel').css('display', 'none');
        $('#panel_1').css('display', 'block');
        $('#panel_2').css('display', 'none');
        $('#panel_3').css('display', 'none');
        $('#panel_4').css('display', 'none');
        $('#panel_5').css('display', 'none');
        lrmp = 50;
        lwheelx2x = 5;
        lprintPancel2(5);
    }
    if (e1 == 3) {
        $('#wheelstart').css('display', 'none');
        $('#wheeloil1').css('display', 'none');
        $('#wheeloil1_5').css('display', 'block');
        $('#wheeloil2').css('display', 'none');
        $('#wheeloil3').css('display', 'none');
        $('#wheeloil4').css('display', 'none');

        $('#panel_s').css('display', 'none');
        $('#panel').css('display', 'none');
        $('#panel_1').css('display', 'none');
        $('#panel_2').css('display', 'block');
        $('#panel_3').css('display', 'none');
        $('#panel_4').css('display', 'none');
        $('#panel_5').css('display', 'none');
        lrmp = 60;
        lwheelx2x = 7;
        lprintPancel2(7);
    }
    if (e1 == 4) {
        $('#wheelstart').css('display', 'none');
        $('#wheeloil1').css('display', 'none');
        $('#wheeloil1_5').css('display', 'none');
        $('#wheeloil2').css('display', 'block');
        $('#wheeloil3').css('display', 'none');
        $('#wheeloil4').css('display', 'none');

        $('#panel_s').css('display', 'none');
        $('#panel').css('display', 'none');
        $('#panel_1').css('display', 'none');
        $('#panel_2').css('display', 'none');
        $('#panel_3').css('display', 'block');
        $('#panel_4').css('display', 'none');
        $('#panel_5').css('display', 'none');
        lrmp = 70;
        lwheelx2x = 8;
        lprintPancel2(8);
    }
    if (e1 == 5) {
        $('#wheelstart').css('display', 'none');
        $('#wheeloil1').css('display', 'none');
        $('#wheeloil1_5').css('display', 'none');
        $('#wheeloil2').css('display', 'none');
        $('#wheeloil3').css('display', 'block');
        $('#wheeloil4').css('display', 'none');

        $('#panel_s').css('display', 'none');
        $('#panel').css('display', 'none');
        $('#panel_1').css('display', 'none');
        $('#panel_2').css('display', 'none');
        $('#panel_3').css('display', 'none');
        $('#panel_4').css('display', 'block');
        $('#panel_5').css('display', 'none');
        lrmp = 80;
        lwheelx2x = 9;
        lprintPancel2(9);
    }
    if (e1 == 6) {
        $('#wheelstart').css('display', 'none');
        $('#wheeloil1').css('display', 'none');
        $('#wheeloil1_5').css('display', 'none');
        $('#wheeloil2').css('display', 'none');
        $('#wheeloil3').css('display', 'none');
        $('#wheeloil4').css('display', 'block');

        $('#panel_s').css('display', 'none');
        $('#panel').css('display', 'none');
        $('#panel_1').css('display', 'none');
        $('#panel_2').css('display', 'none');
        $('#panel_3').css('display', 'none');
        $('#panel_4').css('display', 'none');
        $('#panel_5').css('display', 'block');
        lrmp = 90;
        lwheelx2x = 11;
        lprintPancel2(11);
    }
    if (e1 >= 6) {
        e1 = 6;
    }
})

var wheelbtn2 = document.getElementById('wheeltoumingleft')//调油手轮左侧
wheelbtn2.addEventListener('click', function () {
    console.log('机旁三维减油')
    socket.emit('wheeltoumingleftclick', z)
})
socket.on('wheeltoumingleftclick', function (e1) {
    if (e1 == 1) {
        $('#wheelstart').css('display', 'block');
        $('#wheeloil1').css('display', 'none');
        $('#wheeloil1_5').css('display', 'none');
        $('#wheeloil2').css('display', 'none');
        $('#wheeloil3').css('display', 'none');
        $('#wheeloil4').css('display', 'none');

        $('#panel_s').css('display', 'block');
        $('#panel').css('display', 'none');
        $('#panel_1').css('display', 'none');
        $('#panel_2').css('display', 'none');
        $('#panel_3').css('display', 'none');
        $('#panel_4').css('display', 'none');
        $('#panel_5').css('display', 'none');
        lrmp = 30;
        lwheelx2x = 4;
        lprintPancel2(4);
    }
    if (e1 == 2) {
        $('#wheelstart').css('display', 'none');
        $('#wheeloil1').css('display', 'block');
        $('#wheeloil1_5').css('display', 'none');
        $('#wheeloil2').css('display', 'none');
        $('#wheeloil3').css('display', 'none');
        $('#wheeloil4').css('display', 'none');

        $('#panel_s').css('display', 'none');
        $('#panel').css('display', 'none');
        $('#panel_1').css('display', 'block');
        $('#panel_2').css('display', 'none');
        $('#panel_3').css('display', 'none');
        $('#panel_4').css('display', 'none');
        $('#panel_5').css('display', 'none');
        lrmp = 50;
        lwheelx2x = 5;
        lprintPancel2(5);
    }
    if (e1 == 3) {
        $('#wheelstart').css('display', 'none');
        $('#wheeloil1').css('display', 'none');
        $('#wheeloil1_5').css('display', 'block');
        $('#wheeloil2').css('display', 'none');
        $('#wheeloil3').css('display', 'none');
        $('#wheeloil4').css('display', 'none');

        $('#panel_s').css('display', 'none');
        $('#panel').css('display', 'none');
        $('#panel_1').css('display', 'none');
        $('#panel_2').css('display', 'block');
        $('#panel_3').css('display', 'none');
        $('#panel_4').css('display', 'none');
        $('#panel_5').css('display', 'none');
        lrmp = 60;
        lwheelx2x = 7;
        lprintPancel2(7);
    }
    if (e1 == 4) {
        $('#wheelstart').css('display', 'none');
        $('#wheeloil1').css('display', 'none');
        $('#wheeloil1_5').css('display', 'none');
        $('#wheeloil2').css('display', 'block');
        $('#wheeloil3').css('display', 'none');
        $('#wheeloil4').css('display', 'none');

        $('#panel_s').css('display', 'none');
        $('#panel').css('display', 'none');
        $('#panel_1').css('display', 'none');
        $('#panel_2').css('display', 'none');
        $('#panel_3').css('display', 'block');
        $('#panel_4').css('display', 'none');
        $('#panel_5').css('display', 'none');
        lrmp = 70;
        lwheelx2x = 8;
        lprintPancel2(8);
    }
    if (e1 == 5) {
        $('#wheelstart').css('display', 'none');
        $('#wheeloil1').css('display', 'none');
        $('#wheeloil1_5').css('display', 'none');
        $('#wheeloil2').css('display', 'none');
        $('#wheeloil3').css('display', 'block');
        $('#wheeloil4').css('display', 'none');

        $('#panel_s').css('display', 'none');
        $('#panel').css('display', 'none');
        $('#panel_1').css('display', 'none');
        $('#panel_2').css('display', 'none');
        $('#panel_3').css('display', 'none');
        $('#panel_4').css('display', 'block');
        $('#panel_5').css('display', 'none');
        lrmp = 80;
        lwheelx2x = 9;
        lprintPancel2(9);
    }
    if (e1 == 6) {
        $('#wheelstart').css('display', 'none');
        $('#wheeloil1').css('display', 'none');
        $('#wheeloil1_5').css('display', 'none');
        $('#wheeloil2').css('display', 'none');
        $('#wheeloil3').css('display', 'none');
        $('#wheeloil4').css('display', 'block');

        $('#panel_s').css('display', 'none');
        $('#panel').css('display', 'none');
        $('#panel_1').css('display', 'none');
        $('#panel_2').css('display', 'none');
        $('#panel_3').css('display', 'none');
        $('#panel_4').css('display', 'none');
        $('#panel_5').css('display', 'block');
        lrmp = 90;
        lwheelx2x = 11;
        lprintPancel2(11);
    }
    if (e1 == 0) {
        $('#wheelstart').css('display', 'none');
        $('#wheeloil1').css('display', 'none');
        $('#wheeloil1.5').css('display', 'none');
        $('#wheeloil2').css('display', 'none');
        $('#wheeloil3').css('display', 'none');
        $('#wheeloil4').css('display', 'none');

        $('#panel_s').css('display', 'none');
        $('#panel').css('display', 'block');
        $('#panel_1').css('display', 'none');
        $('#panel_2').css('display', 'none');
        $('#panel_3').css('display', 'none');
        $('#panel_4').css('display', 'none');
        $('#panel_5').css('display', 'none');
    }
    if (e1 <= 0) {
        e1 = 0;
    }
})

var lstartbtn = document.getElementById('pstart')//机旁起动按钮按下
lstartbtn.addEventListener('mousedown', function () {
    console.log('机旁空气起动')
    socket.emit('pstartclick', lsio)
})
socket.on('pstartclick', function (e1) {
    if (e1 == 1) {
        startMove(lstartbtn, 'opacity', 100);
        if (value16x % 2 == 1 && value3x % 2 == 1 && value122x % 2 == 1 && value116x % 2 == 1 && valueMainx % 2 == 1 && lhandle1x % 2 == 1) {
            airstart = 2;
            //LED()
            schematicX = 1;
        }
    }
})

lstartbtn.addEventListener('mouseup', function () { //机旁起动按钮松开
    console.log('机旁空气起动')
    socket.emit('pstartup', lsio)
})
socket.on('pstartup', function (e1) {
    if (e1 == 2) {
        startMove(lstartbtn, 'opacity', 0);
        if (rmp < 15) {
            // alert("空气起动失败！");
            airstart = 1;
            yd = 0;
        }
        else {
            // alert("空气起动成功！");
            airstart = 2;
        }
    }
})

var lstopbtn = document.getElementById('pstop')//机旁stop按钮按下
lstopbtn.addEventListener('mousedown', function () {
    console.log('机旁stop')
    socket.emit('pstopmousedown', yd, ydx, rmp, rmpx, brmp, trmp, lrmp)
})
socket.on('pstopmousedown', function (e1, e2, e3, e4, e5, e6, e7) {
    yd = e1
    ydx = e2
    rmp = e3
    rmpx = e4
    brmp = e5
    trmp = e6
    lrmp = e7
})

var lbtn1 = document.getElementById('touming3')
lbtn1.addEventListener('click', function () {
    console.log('切换扳手')
    socket.emit('lbtn1click', lbtn1sio)
})
socket.on('lbtn1click', function (e1) {
    if (e1 == 1) {
        $('#pswitch4').css('display', 'block');

        document.getElementById('glemergencyControlLed').style.backgroundColor = '#FF0000';
        document.getElementById('glbridgeControlLed').style.backgroundColor = '#085A13';
        document.getElementById('glcontrolRoomControlLed').style.backgroundColor = ' #085A13';

        document.getElementById('plemergencyControlLed').style.backgroundColor = '#FF0000';
        document.getElementById('plbridgeControlLed').style.backgroundColor = '#085A13';
        document.getElementById('plcontrolRoomControlLed').style.backgroundColor = ' #085A13';

        document.getElementById('olemergencyControlLed').style.backgroundColor = '#FF0000';
        document.getElementById('olbridgeControlLed').style.backgroundColor = '#085A13';
        document.getElementById('olcontrolRoomControlLed').style.backgroundColor = ' #085A13';

        document.getElementById('tlemergencyControlLed').style.backgroundColor = '#FF0000';
        document.getElementById('tlbridgeControlLed').style.backgroundColor = '#085A13';
        document.getElementById('tlcontrolRoomControlLed').style.backgroundColor = ' #085A13';

        document.getElementById('plbcr').style.borderColor = 'white';
        document.getElementById('plecr').style.borderColor = 'white';
        document.getElementById('plloc').style.borderColor = '#FFC200';

        document.getElementById('lemergencyControlLed').style.backgroundColor = '#FF0000';
        document.getElementById('lbridgeControlLed').style.backgroundColor = '#085A13';
        // document.getElementById('lcontrolRoomControlLed').style.backgroundColor = ' #085A13';


        document.getElementById('lhandle1').style.transformOrigin = '31% 31%';
        document.getElementById('lhandle1').style.transform = 'rotate(' + 90 + 'deg)';
        // lhandle1x += 1;
        // controlLocation();

        document.getElementById('plcontrolRoomControlLed').style.backgroundColor = ' #085A13';
        document.getElementById('olcontrolRoomControlLed').style.backgroundColor = ' #085A13';
        document.getElementById('glcontrolRoomControlLed').style.backgroundColor = ' #085A13';
        document.getElementById('tlcontrolRoomControlLed').style.backgroundColor = ' #085A13';
        document.getElementById('lcontrolRoomControlLed').style.backgroundColor = ' #085A13';
        document.getElementById('lemergencyControlLed').style.backgroundColor = '#FF0000';
        document.getElementById('lbcrled').style.backgroundColor = 'white';
        document.getElementById('lecrled').style.backgroundColor = 'white';
        document.getElementById('llocled').style.backgroundColor = '#FFC200';
        document.getElementById('plbcrled').style.backgroundColor = 'white';
        document.getElementById('plecrled').style.backgroundColor = 'white';
        document.getElementById('pllocled').style.backgroundColor = '#FFC200';
        document.getElementById('plbcr').style.borderColor = 'white';
        document.getElementById('plecr').style.borderColor = 'white';
        document.getElementById('plloc').style.borderColor = '#FFC200';
        document.getElementById('lbcr').style.borderColor = 'white';
        document.getElementById('lecr').style.borderColor = 'white';
        document.getElementById('lloc').style.borderColor = '#FFC200';
        document.getElementById('tbridge').style.borderColor = 'white';
        document.getElementById('tecr').style.borderColor = 'white';
        document.getElementById('tlocal').style.borderColor = '#FFC200';
        document.getElementById('tbridgeLed').style.backgroundColor = 'white';
        document.getElementById('ttecrLed').style.backgroundColor = 'white';
        document.getElementById('tlocalLed').style.backgroundColor = '#FFC200';

        document.getElementById('bbridge').style.borderColor = 'white';
        document.getElementById('becr').style.borderColor = 'white';
        document.getElementById('blocal').style.borderColor = '#FFC200';
        document.getElementById('bbridgeLed').style.backgroundColor = 'white';
        document.getElementById('becrLed').style.backgroundColor = 'white';
        document.getElementById('blocalLed').style.backgroundColor = '#FFC200';
    }
})
var lbtn2 = document.getElementById('touming4')
lbtn2.addEventListener('click', function () {
    console.log('切换扳手2')
    socket.emit('lbtn2click', lbtn1sio)
})
socket.on('lbtn2click', function (e1) {
    controlLocation();

    if (e1 == 2) {
        $('#pswitch4').css('display', 'none');
        document.getElementById('plbcr').style.borderColor = '#FFC200';
        document.getElementById('plecr').style.borderColor = 'white';
        document.getElementById('plloc').style.borderColor = 'white';
        document.getElementById('pllocled').style.backgroundColor = 'white';
        if (thandlex % 2 == 1) {//集控室控制

            document.getElementById('glemergencyControlLed').style.backgroundColor = ' #085A13';
            document.getElementById('glbridgeControlLed').style.backgroundColor = '#085A13';
            document.getElementById('glcontrolRoomControlLed').style.backgroundColor = '#FF0000';

            document.getElementById('plemergencyControlLed').style.backgroundColor = ' #085A13';
            document.getElementById('plbridgeControlLed').style.backgroundColor = '#085A13';
            document.getElementById('plcontrolRoomControlLed').style.backgroundColor = '#FF0000';

            document.getElementById('olemergencyControlLed').style.backgroundColor = ' #085A13';
            document.getElementById('olbridgeControlLed').style.backgroundColor = '#085A13';
            document.getElementById('olcontrolRoomControlLed').style.backgroundColor = '#FF0000';

            document.getElementById('tlemergencyControlLed').style.backgroundColor = ' #085A13';
            document.getElementById('tlbridgeControlLed').style.backgroundColor = '#085A13';
            document.getElementById('tlcontrolRoomControlLed').style.backgroundColor = '#FF0000';

            document.getElementById('plbcr').style.borderColor = 'white';
            document.getElementById('plecr').style.borderColor = '#FFC200';
            document.getElementById('plloc').style.borderColor = 'white';
            document.getElementById('lbcr').style.borderColor = 'white';
            document.getElementById('lecr').style.borderColor = '#FFC200';
            document.getElementById('lloc').style.borderColor = 'white';
            document.getElementById('lbcrled').style.backgroundColor = 'white';
            document.getElementById('lecrled').style.backgroundColor = '#FFC200';
            document.getElementById('llocled').style.backgroundColor = 'white';
            document.getElementById('plbcrled').style.backgroundColor = 'white';
            document.getElementById('plecrled').style.backgroundColor = '#FFC200';
            document.getElementById('pllocled').style.backgroundColor = 'white';
            document.getElementById('tbridgeLed').style.backgroundColor = 'white';
            document.getElementById('ttecrLed').style.backgroundColor = '#FFC200';
            document.getElementById('tlocalLed').style.backgroundColor = 'white';
            document.getElementById('tbridge').style.borderColor = 'white';
            document.getElementById('tecr').style.borderColor = '#FFC200';
            document.getElementById('tlocal').style.borderColor = 'white';
            document.getElementById('bbridgeLed').style.backgroundColor = 'white';
            document.getElementById('btecrLed').style.backgroundColor = '#FFC200';
            document.getElementById('blocalLed').style.backgroundColor = 'white';
            document.getElementById('bbridge').style.borderColor = 'white';
            document.getElementById('becr').style.borderColor = '#FFC200';
            document.getElementById('blocal').style.borderColor = 'white';
        }
        document.getElementById('lhandle1').style.transformOrigin = '31% 31%';
        document.getElementById('lhandle1').style.transform = 'rotate(' + 0 + 'deg)';
        lhandle1x += 1;
    }
})

var lbtn3 = document.getElementById('wheelswitch')
lbtn3.addEventListener('click', function () {
    console.log('锁紧手柄')
    socket.emit('lbtn3click', wx)
})
socket.on('lbtn3click', function (e1) {
    if (e1 % 2 == 1) {
        startMove(lbtn3, 'opacity', 100);
        lhandle3x = e1;
        console.log('lhandle3x', lhandle3x);
        document.getElementById('lhandle3').style.transformOrigin = '31% 31%';
        document.getElementById('lhandle3').style.transform = 'rotate(' + 90 + 'deg)';
        // yy += 1; 单机需要注释掉 main.js里打开。多用户通信需要打开 并把main注释掉
    }
    if (e1 % 2 == 0) {
        startMove(lbtn3, 'opacity', 0);
        lhandle3x = e1 - 2;
        console.log('lhandle3x', lhandle3x);
        document.getElementById('lhandle3').style.transformOrigin = '31% 31%';
        document.getElementById('lhandle3').style.transform = 'rotate(' + 0 + 'deg)';
        // yy -= 1;单机需要注释掉 main.js里打开。多用户通信需要打开 并把main注释掉
    }
})

var lbtn4 = document.getElementById('impactwheel')
lbtn4.addEventListener('click', function () {
    console.log('手动/遥控切换手轮')
    socket.emit('lbtn4click', impactwheelx)
})
socket.on('lbtn4click', function (e1) {
    if (e1 % 2 == 1) {
        startMove(lbtn4, 'opacity', 100);
        document.getElementById('lhandwheelDis').style.border = '1px solid red'
        document.getElementById('lhandwheelCon').style.border = ''

        lwheelx1x = 0;
        var lw1c = document.getElementById("lwheel1canvas");
        var lw1ctx = lw1c.getContext("2d");
        lw1ctx.clearRect(0, 0, 140, 11);
        lw1ctx.beginPath();
        lw1ctx.rect(0, 0, 0, 11);
        lw1ctx.fillStyle = "red"
        lw1ctx.fill();

    }
    if (e1 % 2 == 0) {
        startMove(lbtn4, 'opacity', 0);
        document.getElementById('lhandwheelDis').style.border = ''
        document.getElementById('lhandwheelCon').style.border = '1px solid red'

        lwheelx1x = 5;
        var lw1c = document.getElementById("lwheel1canvas");
        var lw1ctx = lw1c.getContext("2d");
        lw1ctx.clearRect(0, 0, 140, 11);
        lw1ctx.beginPath();
        lw1ctx.rect(0, 0, 140, 11);
        lw1ctx.fillStyle = "red"
        lw1ctx.fill();
    }
})

let l2dbtn1 = document.getElementById('lhandle1')
l2dbtn1.addEventListener('click', function () {
    console.log('点击二维机旁切换手柄')
    socket.emit('l2dbtn1click', lhandle1x)
})
socket.on('l2dbtn1click', function (e1) {
    if (e1 % 2 == 0) {
        l2dbtn1.style.transformOrigin = '31% 31%';
        l2dbtn1.style.transform = 'rotate(' + 90 + 'deg)';
        lhandle1x += 1;
        controlLocation();
    } else {
        l2dbtn1.style.transformOrigin = '31% 31%';
        l2dbtn1.style.transform = 'rotate(' + 0 + 'deg)';
        lhandle1x += 1;
        controlLocation();
    }
})
let l2dbtn2 = document.getElementById('lwheel1Left')
l2dbtn2.addEventListener('click', function () {
    console.log('点击二维机旁压紧手轮左侧')
    socket.emit('l2dbtn2click', lwheelx1x)
})
socket.on('l2dbtn2click', function (e1) {
    lwheelx1 += 45;
    lwheel1.style.transform = 'rotate(' + lwheelx1 + 'deg)';
    // e1 -= 1;console.log('这个左侧',e1)
    if (e1 <= 0) {
        e1 = 0;
    }
    if (e1 <= 2) {
        document.getElementById('lhandwheelDis').style.border = '1px solid red'
        document.getElementById('lhandwheelCon').style.border = ''
        startMove(document.getElementById('impactwheel'), 'opacity', 100);
        impactwheelx = 1;
        console.log('imx', impactwheelx);
    } else {
        document.getElementById('lhandwheelDis').style.border = ''
        document.getElementById('lhandwheelCon').style.border = '1px solid red'
        startMove(document.getElementById('impactwheel'), 'opacity', 0);
        impactwheelx = 0;
    }

    lprintPancel1(e1);
})
let l2dbtn3 = document.getElementById('lwheel1Right')
l2dbtn3.addEventListener('click', function () {
    console.log('点击二维机旁压紧手轮右侧')
    socket.emit('l2dbtn3click', lwheelx1x)
})
socket.on('l2dbtn3click', function (e1) {
    lwheelx1 -= 45;
    lwheel1.style.transform = 'rotate(' + lwheelx1 + 'deg)';
    // e1 += 1;
    if (e1 >= 5) {
        e1 = 5;
    }
    if (e1 <= 2) {
        document.getElementById('lhandwheelDis').style.border = '1px solid red'
        // document.getElementById('lhandwheelDis').style.color='yellow'
        document.getElementById('lhandwheelCon').style.border = ''
        startMove(document.getElementById('impactwheel'), 'opacity', 1);
        impactwheelx = 1;
    } else {
        document.getElementById('lhandwheelDis').style.border = ''
        document.getElementById('lhandwheelCon').style.border = '1px solid red'
        startMove(document.getElementById('impactwheel'), 'opacity', 0);
        impactwheelx = 0;
        console.log('imx', impactwheelx);
    }
    lprintPancel1(e1);
})

let l2dbtn4 = document.getElementById('lhandle3')
l2dbtn4.addEventListener('click', function () {
    console.log('点击二维机旁锁紧手柄')
    socket.emit('l2dbtn4click', lhandle3x)
})
socket.on('l2dbtn4click', function (e1) {
    console.log('socket的')
    if (e1 % 2 == 1) {
        l2dbtn4.style.transformOrigin = '31% 31%';
        l2dbtn4.style.transform = 'rotate(' + 90 + 'deg)';
        // e1+=1
        // startMove(this, 'opacity', 0);
        console.log('lhandle3x', lhandle3x);
        wx = 1;
        yy = 1;
        console.log('wx', wx);
        startMove(document.getElementById('wheelswitch'), 'opacity', 100);
    } else {
        l2dbtn4.style.transformOrigin = '31% 31%';
        l2dbtn4.style.transform = 'rotate(' + 0 + 'deg)';
        // e1 += 1;
        console.log('lhandle3x', lhandle3x);
        wx = 0;
        console.log('wx', wx);
        startMove(document.getElementById('wheelswitch'), 'opacity', 0);
    }
})

let l2dbtn5 = document.getElementById('lwheel2Left')
l2dbtn5.addEventListener('click', function () {
    console.log('点击二维机旁油门左侧')
    socket.emit('l2dbtn5click', lwheelx2x, lhandle3x, lrmp)
})
socket.on('l2dbtn5click', function (e1, e2, e3) {
    if (e2 % 2 == 1) {


        lwheelx2 -= 45;
        lwheel2.style.transform = 'rotate(' + lwheelx2 + 'deg)';
        // e1 -= 1;
        if (e1 <= 0) {
            e1 = 0;
        }
        if (e1 < 4) {
            z = 0;
            $('#wheelstart').css('display', 'none');
            $('#wheeloil1').css('display', 'none');
            $('#wheeloil1_5').css('display', 'none');
            $('#wheeloil2').css('display', 'none');
            $('#wheeloil3').css('display', 'none');
            $('#wheeloil4').css('display', 'none');
        }
        if (e1 == 4) {
            z = 1;
            $('#wheelstart').css('display', 'block');
            $('#wheeloil1').css('display', 'none');
            $('#wheeloil1_5').css('display', 'none');
            $('#wheeloil2').css('display', 'none');
            $('#wheeloil3').css('display', 'none');
            $('#wheeloil4').css('display', 'none');
        }
        if (e1 == 5) {
            z = 2;
            $('#wheelstart').css('display', 'none');
            $('#wheeloil1').css('display', 'block');
            $('#wheeloil1_5').css('display', 'none');
            $('#wheeloil2').css('display', 'none');
            $('#wheeloil3').css('display', 'none');
            $('#wheeloil4').css('display', 'none');
        }
        if (e1 == 7) {
            z = 3;
            $('#wheelstart').css('display', 'none');
            $('#wheeloil1').css('display', 'none');
            $('#wheeloil1_5').css('display', 'block');
            $('#wheeloil2').css('display', 'none');
            $('#wheeloil3').css('display', 'none');
            $('#wheeloil4').css('display', 'none');
        }
        if (e1 == 8) {
            z = 4;
            $('#wheelstart').css('display', 'none');
            $('#wheeloil1').css('display', 'none');
            $('#wheeloil1_5').css('display', 'none');
            $('#wheeloil2').css('display', 'block');
            $('#wheeloil3').css('display', 'none');
            $('#wheeloil4').css('display', 'none');
        }
        if (e1 == 9) {
            z = 5;
            $('#wheelstart').css('display', 'none');
            $('#wheeloil1').css('display', 'none');
            $('#wheeloil1_5').css('display', 'none');
            $('#wheeloil2').css('display', 'none');
            $('#wheeloil3').css('display', 'block');
            $('#wheeloil4').css('display', 'none');
        }
        if (e1 == 11) {
            z = 6;
            $('#wheelstart').css('display', 'none');
            $('#wheeloil1').css('display', 'none');
            $('#wheeloil1_5').css('display', 'none');
            $('#wheeloil2').css('display', 'none');
            $('#wheeloil3').css('display', 'none');
            $('#wheeloil4').css('display', 'block');
        }
        lprintPancel2(e1);
        lrmp = e3;
        lrmp = parseInt(lrmp);
        // if (lrmp <= 0) {
        // 	lrmp = 0;
        // }
    }
})

let l2dbtn6 = document.getElementById('lwheel2Right')
l2dbtn6.addEventListener('click', function () {
    console.log('点击二维机旁油门右侧')
    socket.emit('l2dbtn6click', lwheelx2x, lhandle3x, lrmp)
})
socket.on('l2dbtn6click', function (e1, e2, e3) {//同时传两个参数就好了 传一个试了半天都不行
    if (e2 % 2 == 1) {


        console.log('我没病', e1, lwheelx2x)
        lwheelx2 += 45;
        lwheel2.style.transform = 'rotate(' + lwheelx2 + 'deg)';
        // e1 += 1;
        if (e1 >= 11) {
            e1 = 11;
        }
        if (e1 < 4) {
            z = 0;
            $('#wheelstart').css('display', 'none');
            $('#wheeloil1').css('display', 'none');
            $('#wheeloil1_5').css('display', 'none');
            $('#wheeloil2').css('display', 'none');
            $('#wheeloil3').css('display', 'none');
            $('#wheeloil4').css('display', 'none');
        }
        if (e1 == 4) {
            z = 1;
            $('#wheelstart').css('display', 'block');
            $('#wheeloil1').css('display', 'none');
            $('#wheeloil1_5').css('display', 'none');
            $('#wheeloil2').css('display', 'none');
            $('#wheeloil3').css('display', 'none');
            $('#wheeloil4').css('display', 'none');

            $('#panel_s').css('display', 'block');
            $('#panel').css('display', 'none');
            $('#panel_1').css('display', 'none');
            $('#panel_2').css('display', 'none');
            $('#panel_3').css('display', 'none');
            $('#panel_4').css('display', 'none');
            $('#panel_5').css('display', 'none');
        }
        if (e1 == 5) {
            z = 2;
            $('#wheelstart').css('display', 'none');
            $('#wheeloil1').css('display', 'block');
            $('#wheeloil1_5').css('display', 'none');
            $('#wheeloil2').css('display', 'none');
            $('#wheeloil3').css('display', 'none');
            $('#wheeloil4').css('display', 'none');

            $('#panel_s').css('display', 'none');
            $('#panel').css('display', 'none');
            $('#panel_1').css('display', 'block');
            $('#panel_2').css('display', 'none');
            $('#panel_3').css('display', 'none');
            $('#panel_4').css('display', 'none');
            $('#panel_5').css('display', 'none');
        }
        if (e1 == 7) {
            z = 3;
            $('#wheelstart').css('display', 'none');
            $('#wheeloil1').css('display', 'none');
            $('#wheeloil1_5').css('display', 'block');
            $('#wheeloil2').css('display', 'none');
            $('#wheeloil3').css('display', 'none');
            $('#wheeloil4').css('display', 'none');

            $('#panel_s').css('display', 'none');
            $('#panel').css('display', 'none');
            $('#panel_1').css('display', 'none');
            $('#panel_2').css('display', 'block');
            $('#panel_3').css('display', 'none');
            $('#panel_4').css('display', 'none');
            $('#panel_5').css('display', 'none');
        }
        if (e1 == 8) {
            z = 4;
            $('#wheelstart').css('display', 'none');
            $('#wheeloil1').css('display', 'none');
            $('#wheeloil1_5').css('display', 'none');
            $('#wheeloil2').css('display', 'block');
            $('#wheeloil3').css('display', 'none');
            $('#wheeloil4').css('display', 'none');

            $('#panel_s').css('display', 'none');
            $('#panel').css('display', 'none');
            $('#panel_1').css('display', 'none');
            $('#panel_2').css('display', 'none');
            $('#panel_3').css('display', 'block');
            $('#panel_4').css('display', 'none');
            $('#panel_5').css('display', 'none');
        }
        if (e1 == 9) {
            z = 5;
            $('#wheelstart').css('display', 'none');
            $('#wheeloil1').css('display', 'none');
            $('#wheeloil1_5').css('display', 'none');
            $('#wheeloil2').css('display', 'none');
            $('#wheeloil3').css('display', 'block');
            $('#wheeloil4').css('display', 'none');

            $('#panel_s').css('display', 'none');
            $('#panel').css('display', 'none');
            $('#panel_1').css('display', 'none');
            $('#panel_2').css('display', 'none');
            $('#panel_3').css('display', 'none');
            $('#panel_4').css('display', 'block');
            $('#panel_5').css('display', 'none');
        }
        if (e1 == 11) {
            z = 6;
            $('#wheelstart').css('display', 'none');
            $('#wheeloil1').css('display', 'none');
            $('#wheeloil1_5').css('display', 'none');
            $('#wheeloil2').css('display', 'none');
            $('#wheeloil3').css('display', 'none');
            $('#wheeloil4').css('display', 'block');

            $('#panel_s').css('display', 'none');
            $('#panel').css('display', 'none');
            $('#panel_1').css('display', 'none');
            $('#panel_2').css('display', 'none');
            $('#panel_3').css('display', 'none');
            $('#panel_4').css('display', 'none');
            $('#panel_5').css('display', 'block');


        }
        lprintPancel2(e1);
        lrmp = e3;
        lrmp = parseInt(lrmp);
        // if (lrmp >= 110) {
        // 	lrmp = 110;
        // }
    }
})

let l2dbtnStart = document.getElementById('lbuttonStart')
l2dbtnStart.addEventListener('mousedown', function () {
    console.log('按住二维机旁起动按钮')
    socket.emit('l2dbtnStartclick', l2dsio, lrmp)
})
socket.on('l2dbtnStartclick', function (e1, e2) {
    if (e1 == 1) {
        console.log('我按下了')
        l2dbtnStart.style.backgroundColor = "green";
        console.log('lhandle1x', lhandle1x)
        airstart = 2; console.log('good')
        // LED()
        ydx = e2
        yd = e2
        schematicX = 1;
    }



})

let l2dbtnStartup = document.getElementById('lbuttonStart')
l2dbtnStartup.addEventListener('mouseup', function () {
    console.log('松开二维机旁起动按钮')
    socket.emit('l2dbtnStartup', l2dsio)
})
socket.on('l2dbtnStartup', function (e1) {
    if (e1 == 2) {
        console.log('我松开了')
        l2dbtnStart.style.backgroundColor = "grey";
        if (rmp < 15) {
            // alert("空气起动失败！");
            airstart = 1;
            yd = 0;
        }
        else {
            // alert("空气起动成功！");
            airstart = 2;
        }
    }

})

let l2dbtnstop = document.getElementById('lbuttonStop')
l2dbtnstop.addEventListener('mousedown', function () {
    console.log('按下stop按钮')
    socket.emit('l2dbtnstopmousedown', yd, ydx, rmp, rmpx, brmp, trmp, lrmp)
})
socket.on('l2dbtnstopmousedown', function (e1, e2, e3, e4, e5, e6, e7) {
    yd = e1
    ydx = e2
    rmp = e3
    rmpx = e4
    brmp = e5
    trmp = e6
    lrmp = e7
})

let valve1 = document.getElementById('valve122Comfirm')
valve1.addEventListener('click', function () {
    console.log('点击安全阀')
    socket.emit('valve1click', value122x)
})
socket.on('valve1click', function (e1) {
    value122x = e1
})

let valve2 = document.getElementById('valveMainComfirm')
valve2.addEventListener('click', function () {
    console.log('点击主起动阀')
    socket.emit('valve2click', valueMainx)
})
socket.on('valve2click', function (e1) {
    valueMainx = e1
})

let valve3 = document.getElementById('valve118Comfirm')
valve3.addEventListener('click', function () {
    console.log('点击空气分配器控制阀')
    socket.emit('valve3click', value118x)
})
socket.on('valve3click', function (e1) {
    value118x = e1
})

let valve4 = document.getElementById('valve16Comfirm')
valve4.addEventListener('click', function () {
    console.log('点击起动空气控制阀')
    socket.emit('valve4click', value16x)
})
socket.on('valve4click', function (e1) {
    value16x = e1
})

let valve5 = document.getElementById('valve3Comfirm')
valve5.addEventListener('click', function () {
    console.log('点击进排气空气阀')
    socket.emit('valve5click', value3x)
})
socket.on('valve5click', function (e1) {
    value3x = e1
})

let valve6 = document.getElementById('valve116Comfirm')
valve6.addEventListener('click', function () {
    console.log('点击主起动阀')
    socket.emit('valve6click', value116x)
})
socket.on('valve6click', function (e1) {
    value116x = e1
})

let stecr = document.getElementById('tecr')
stecr.addEventListener('click', function () {
    console.log('集控室发出切换请求')
    socket.emit('stecrclick', ecrlocation)
})
socket.on('stecrclick', function (e1) {
    ecrlocation = e1
    stecr.style.borderColor = 'red'
    document.getElementById('becr').style.borderColor = 'red';
    document.getElementById('lecr').style.borderColor = 'red';
    document.getElementById('plecr').style.borderColor = 'red';

})

let sbecr = document.getElementById('becr')
sbecr.addEventListener('click', function () {
    console.log('驾驶台同意切换请求')
    socket.emit('sbecrclick', ecrlocation)
})
socket.on('sbecrclick', function (e1) {

    if (lhandle1x % 2 == 0 && thandlex % 2 == 0) {
        //控制位置在驾控台
        document.getElementById('becr').style.borderColor = 'green';
        document.getElementById('tecr').style.borderColor = 'green';
        document.getElementById('lecr').style.borderColor = 'green';
        ecrlocation = 0;
    }

})

let slecr = document.getElementById('lecr')
slecr.addEventListener('click', function () {
    console.log('二维机旁同意切换请求')
    socket.emit('slecrclick', ecrlocation)
})
socket.on('slecrclick', function (e1) {
    if (lhandle1x % 2 == 1) {
        //控制位置在机旁
        document.getElementById('becr').style.borderColor = 'green';
        document.getElementById('tecr').style.borderColor = 'green';
        document.getElementById('lecr').style.borderColor = 'green';
        document.getElementById('plecr').style.borderColor = 'green';

        ecrlocation = 0;
    }
})

let splecr = document.getElementById('plecr')
splecr.addEventListener('click', function () {
    console.log('三维机旁同意切换请求')
    socket.emit('splecrclick', ecrlocation)
})
socket.on('splecrclick', function (e1) {
    if (lhandle1x % 2 == 1) {
        //控制位置在机旁
        document.getElementById('becr').style.borderColor = 'green';
        document.getElementById('tecr').style.borderColor = 'green';
        document.getElementById('lecr').style.borderColor = 'green';
        document.getElementById('plecr').style.borderColor = 'green';

        ecrlocation = 0;
    }
})

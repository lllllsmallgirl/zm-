// 浏览器=》服务器=》浏览器
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: '172.27.122.210',//39.97.105.230
  user: 'root',
  password: '123456',//84670681
  database: 'data'//class219
});
connection.connect((err) => {
  if (err) {
    console.log('---:' + err);
    return;
  }
  console.log('连接成功')
});

var app = require('express')();
var http = require('http').createServer(app);
const io = require('socket.io')(http);
var path = require('path');

app.use('/', require('express').static(path.join(__dirname, '../')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'mainEngine.html')); //文件转移了 路径也要改！！！
  // res.sendFile(__dirname + '/img/ii.PNG');
  // console.log("Request for " + req.url + " received.");
});
var i = 0;
var rsValue1
io.on('connection', (socket) => {
  // i+=1;
  // console.log('用户'+i+'进入')
  console.log('a user connected');
  // socket.on('chat message', (msg) => {
  //   io.emit('chat message',msg)
  // });
  var Switch
  setInterval(function () {
    let sql = 'select * from data';
    connection.query(sql, (err, rs) => {
      if (err) {
        console.log(err.message);
      }
      rs = JSON.stringify(rs)
      rs = JSON.parse(rs)
      // for (let i = 0; i < 23; i++) {
      //     if (rs[i].Name == 'switch') {
      //         Switch = rs[i].Value
      //     }
      // }
      Switch = rs[23].Value
      // console.log(rs[23])
      // console.log(Switch);
      // console.log(rs[0])
      // console.log(rs[0].Name, rs[1].Name)

      //从数据库读取数据
      if (Switch == 0) {
        let sql = 'select * from data';
        connection.query(sql, (err, rs) => {
          if (err) {
            console.log(err.message);
          }
          rs = JSON.stringify(rs)
          rs = JSON.parse(rs)
          // console.log(rs);
          // console.log(rs[0])
          // console.log(rs[0].Name, rs[0].Value)

          rsValue1 = parseInt(rs[5].Value)
          socket.emit('t_back', rsValue1)
          // console.log(rsValue1)
        })
      }
    })
  }, 500)
  socket.on('thandleclick', (tx) => {
    var addsql = 'insert into data(ID,Name,Value) values(?,?,?)';
    var addsqlParams = ['1', 'thandlex', String(tx)];

    connection.query(addsql, addsqlParams, (err, rs) => {
      if (err) {
        console.log(err.message);
        return;
      }
      console.log('insert data', rs);
    });


    io.emit('thandleclick', tx);
  });


  //转速的测量值
  socket.on('rmpxSend', (ermpx) => {
    let modsql4 = "update data set Value=? where Name='rmpx'";
    let modsqlParams4 = [String(ermpx)];

    connection.query(modsql4, modsqlParams4, (err, rs) => {
      if (err) {
        console.log(err.message);
        return;
      }
      // console.log('modify data', rs);
    });
  })


  socket.on('blever', (e1, e2, e3, e4) => {
    console.log('e3车钟杠杆变量t', e3);
    console.log('e4实际转速rmpx', e4)
    if (Switch == 1) {
      //驾驶台车钟杠杆的位置变量
      let modsql2 = "update data set Value=? where Name='t'";
      let modsqlParams2 = [String(e3)];

      connection.query(modsql2, modsqlParams2, (err, rs) => {
        if (err) {
          console.log(err.message);
          return;
        }
        // console.log('modify data', rs);
      });

      //转速的设定值
      let modsql3 = "update data set Value=? where Name='ydx'";
      let modsqlParams3 = [String(e2)];

      connection.query(modsql3, modsqlParams3, (err, rs) => {
        if (err) {
          console.log(err.message);
          return;
        }
        // console.log('modify data', rs);
      });


    }
    io.emit('blever', e1, e2, e3, e4);
  })

  socket.on('tlever', (e1, e2, e3) => {
    console.log('e3', e3);
    io.emit('tlever', e1, e2, e3);
  })

  socket.on('conbeforeclick', (e1) => {
    // console.log('sio',e1);
    io.emit('conbeforeclick', e1);
  })

  socket.on('conReadyCclick', (e1) => {
    // console.log('sio',e1);
    io.emit('conReadyCclick', e1);
  })

  socket.on('conOnSeaclick', (e1) => {
    // console.log('sio',e1);
    io.emit('conOnSeaclick', e1);
  })

  socket.on('wheeltoumingclick', (e1) => {

    io.emit('wheeltoumingclick', e1);
  })

  socket.on('wheeltoumingleftclick', (e1) => {

    io.emit('wheeltoumingleftclick', e1);
  })

  socket.on('pstartclick', (e1) => {

    io.emit('pstartclick', e1);
  })

  socket.on('pstopmousedown', (e1, e2, e3, e4, e5, e6, e7) => {

    io.emit('pstopmousedown', e1, e2, e3, e4, e5, e6, e7);
  })

  socket.on('pstartup', (e1) => {

    io.emit('pstartup', e1);
  })

  socket.on('lbtn1click', (e1) => {

    io.emit('lbtn1click', e1);
  })

  socket.on('lbtn2click', (e1) => {

    io.emit('lbtn2click', e1);
  })

  socket.on('lbtn3click', (e1) => {

    io.emit('lbtn3click', e1);
  })

  socket.on('lbtn4click', (e1) => {

    io.emit('lbtn4click', e1);
  })

  socket.on('l2dbtn1click', (e1) => {

    io.emit('l2dbtn1click', e1);
  })

  socket.on('l2dbtn2click', (e1) => {

    io.emit('l2dbtn2click', e1);
  })

  socket.on('l2dbtn3click', (e1) => {

    io.emit('l2dbtn3click', e1);
  })

  socket.on('l2dbtn4click', (e1) => {

    io.emit('l2dbtn4click', e1);
  })

  socket.on('l2dbtn5click', (e1, e2, e3) => {

    io.emit('l2dbtn5click', e1, e2, e3);
  })

  socket.on('l2dbtn6click', (e1, e2, e3) => {

    io.emit('l2dbtn6click', e1, e2, e3);
  })

  socket.on('l2dbtnStartclick', (e1, e2) => {

    io.emit('l2dbtnStartclick', e1, e2);
  })

  socket.on('l2dbtnStartup', (e1) => {

    io.emit('l2dbtnStartup', e1);
  })

  socket.on('l2dbtnstopmousedown', (e1, e2, e3, e4, e5, e6, e7) => {

    io.emit('l2dbtnstopmousedown', e1, e2, e3, e4, e5, e6, e7);
  })

  socket.on('valve1click', (e1) => {

    io.emit('valve1click', e1);
  })

  socket.on('valve2click', (e1) => {

    io.emit('valve2click', e1);
  })

  socket.on('valve3click', (e1) => {

    io.emit('valve3click', e1);
  })

  socket.on('valve4click', (e1) => {

    io.emit('valve4click', e1);
  })

  socket.on('valve5click', (e1) => {

    io.emit('valve5click', e1);
  })

  socket.on('valve6click', (e1) => {

    io.emit('valve6click', e1);
  })

  socket.on('stecrclick', (e1) => {

    io.emit('stecrclick', e1);
  })

  socket.on('sbecrclick', (e1) => {

    io.emit('sbecrclick', e1);
  })

  socket.on('slecrclick', (e1) => {

    io.emit('slecrclick', e1);
  })

  socket.on('splecrclick', (e1) => {

    io.emit('splecrclick', e1);
  })
});




http.listen(3000, () => {
  console.log('listening on *:3000');
});
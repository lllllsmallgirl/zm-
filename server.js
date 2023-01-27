var mysql = require('mysql');
const queryString = require('querystring');
const path = require("path");
const fs = require('fs');

// var app = require('express')();
// var http = require('http').createServer(app);
var connection = mysql.createConnection({
    host: '39.97.105.230',
    user: 'root',
    password: '84670681',
    database: 'class219'
});
connection.connect((err) => {
    if (err) {
        console.log('---:' + err);
        return;
    }
    console.log('连接成功')
});

//创建sever网站服务器对象
let server = require('http').createServer();
//为服务器对象绑定请求事件,当客户端有请求时触发
server.on('request', function (request, response) {

    // console.log(123, request.url);
    let postParams = '';  //定义空字符串用于接收post参数
    //绑定data触发事件
    request.on('data', function (params) {
        postParams = postParams + params;     //拼接post参数
    });
    //绑定data触发事件
    request.on('end', function () {
        // 把postParams字符串处理为对象,用querystring模块中的parse()方法
        // console.log(queryString.parse(postParams));
        //获取具体数值，如用户名。 注意：此处的user_name必须和前端HTML代码中的name="user_name"一致的。
        let username = queryString.parse(postParams).account;
        let userpwd = queryString.parse(postParams).password;

        let sql = 'select * from test1 where Name=?'
        connection.query(sql, [username], (err, rs) => {
            if (err) {
                throw error
            } else {
                rs = JSON.stringify(rs)
                rs = JSON.parse(rs)
                console.log(rs);
                if (rs.length > 0) {
                    let pwd = rs[0].password
                    console.log(pwd);
                    if (pwd === userpwd) {
                        console.log('success!!!');
                        // response.end('hello zmm')
                        const static = path.join(__dirname, '/select.asp');
                        // 异步读取本地文件
                        //获取文件的类型，使用mime模块的getType()方法
                        //读取文件
                        fs.readFile(static, function (err, result) {
                            if (!err) {
                                response.end(result);
                            }

                        });
                    }
                }

            }
        })
    })
})


server.listen(3030, () => {
    console.log('listening on port 3030');
})
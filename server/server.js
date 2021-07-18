let express = require('express');

let app =express();

 

//设置跨域访问
app.all('*', function (req, res, next) {

  res.header('Access-Control-Allow-Origin', 'https://blog.csdn.net');

  res.header('Access-Control-Allow-Credentials', true);

  res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With')

  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');

  res.header('Content-Type', 'application/json;charset=utf-8');

  next()

});

 

let data = {

    name: 'test',
    time: new Date().getTime(),

};


// let api = '/api/user';
let api = '';


app.get(api, (req, res) => {

    res.send(data);

});

 

//配置服务端口
var server = app.listen(8000, () => {
    console.log( `localhost:8000${api}`);
});
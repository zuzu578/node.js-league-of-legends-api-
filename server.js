
const express = require('express');
const app = express();
const server = app.listen(3000,() =>{
    console.log("server start");
});

app.set('views',__dirname + '/views');
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile)

app.get('/',function(req,res){
    res.render('index.html');
})
/*
db connection
var mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit:10,
    host:'106.247.228.98',
    user:'root',
    passowrd:'somyoung',
    database:'nime'
});


app.get('/db',function(req,res){
    pool.getConnection(function (err , connection){
      // dbconnection Pool 시에 ,  callback 함수는 먼저 오류를 확인해야 하기때문에 , 연결개체가 반환되지않았기 때문
       if(err) throw err;

        connection.query('select * from food.mvc_board',function(error,results,fields){
            res.send(JSON.stringify(results));
            console.log('result',results);
            connection.release();
            if(error)throw error;
        })
    })

})
*/

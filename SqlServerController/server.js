
const express = require('express');
const app = express();
const server = app.listen(3000,() =>{
    console.log("server start");
});

app.set('views',__dirname + '/views');
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile)

const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123qwe',
  database : 'sys' // db scheme
});

connection.connect();
/**
 * Mysql Database 에 connection 합니다.
 * test
 */
app.get('/dbConnection',(req,res)=>{

    connection.query('select t1.user_seq,t1.userName,t2.tempColumn from temp t1 inner join temp2 t2 on t1.user_seq = t2.seq_id', 
    (error, data, fields) => {
    if (error) throw error;
    //console.log(data);
    res.json(data)
    connection.end();
    
    });

    

})






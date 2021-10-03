const bodyParser = require('body-parser'); // body-parser => get parameter 
const express = require('express');
const request = require('request');
const app = express();
const server = app.listen(3004,() =>{
    console.log("server start");
});
app.set('views',__dirname + '/views');
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile)
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());


app.get('/',function(req,res){
    res.render('home.html');
});



app.get('/result',function(req,res){
    //request get parameter
    // 받아온 parameter 를 리터럴화 
    var u_name = {
        u_name:req.param('u_name')
    };  
    console.log('u_name => ' , u_name);
    var url = 'https://kr.api.riotgames.com/lol/platform/v3/champion-rotations';
    var apiKey = 'RGAPI-360ab637-0712-4ea1-8397-92f24543f52c';
    
    var queryParams = '?' + encodeURIComponent('api_key') + '='+apiKey /* Service Key*/
    console.log('queryParams = > ' , queryParams);

request({
    url: url + queryParams,
    method: 'GET'
}, function (error, response, body) {
    console.log('Status', response.statusCode);
    console.log('Headers', JSON.stringify(response.headers));
    console.log('Reponse received', body);
});
    res.render('index.html',{u_name:req.param('u_name')});
})

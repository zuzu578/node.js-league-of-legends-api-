        //const { default: axios } = require('axios');
        const bodyParser = require('body-parser'); // body-parser => get parameter 
        const express = require('express');
        const request = require('request');

        const axios = require('axios'); // axios 사용 
        const { initParams } = require('request');

        
        const app = express();
        const server = app.listen(3004,() =>{
            console.log("server start");
        });
        app.set('views',__dirname + '/views');
        app.set('view engine','ejs');
        app.engine('html',require('ejs').renderFile)
        app.use(bodyParser.urlencoded({extended : false}));
        app.use(bodyParser.json());

        const apiKey = 'RGAPI-f18a9a01-8515-4428-9ec4-cdabb8cb6fd9'; // 해당 api key 는 유효시간이 있으므로 , 갱신해주어야합니다.

        /*
        메인 페이지로 이동합니다.
        */
        app.get('/',function(req,res){
            res.render('home.html');
        });

        /**
         * 결과 페이지로 이동합니다.
         */
        app.get('/summonerResult',function(req,res){
            const summonerName = {
                summonerName:req.param('summonerName')
            };  
            console.log('summonerName=>' , summonerName);
            res.render('summonerResult.html',{summonerName:req.param('summonerName')});
        });


        /**
         * 검색한 소환사의 정보를 가져옵니다.
         * return : json 
         * params : summonerName
         * /lol/summoner/v4/summoners/by-name/{summonerName}
         */
        app.get('/getDataListBysummonerName',function(req,res){
        
            const summonerName = req.param('summonerName')
            console.log('summonerName => ' , summonerName);
            const url = 'https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/'
            +encodeURIComponent(summonerName); // encoding! 
            const queryParams ='?' + encodeURIComponent('api_key') + '='+apiKey 
            console.log('소환사 정보 params = > ' , queryParams);
            console.log('url + queryParams => ' , url + queryParams);
            var url2 = url + queryParams;
            request({
                url: url + queryParams,
                
                method: 'GET'
            }, function (error, response, body) {
                console.log('Status', response.statusCode);
                console.log('Headers', JSON.stringify(response.headers));
                console.log('Reponse received', body);
                res.send(body);
            });
        });
        /**
         * 해당 소환사의 puuid를 이용하여 match id list 를 가져옵니다.
         * return : json
         * params : puuid
         * /lol/match/v5/matches/by-puuid/{puuid}/ids
         */
        app.get('/getMatchIdListByPuuId',function(req,res){
            const puuid = req.param('puuid');
            let start = req.param('start')// 불러올 데이터 start page 
            let count = req.param('count')// 불러올 데이터 갯수 count 
            // start , count 가 undefined 인경우 (default 일경우)
            if(start == undefined || start == ""){
                start = 0;
            }
            if(count == undefined || count ==""){
                count = 10;
            }
            console.log('puuid => ' , puuid);
            const url = 'https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/'+encodeURIComponent(puuid)+'/ids?start='+encodeURIComponent(start)+'&count='+encodeURIComponent(count); // encoding! 
            const queryParams ='&' + encodeURIComponent('api_key') + '='+apiKey 
            console.log('소환사 정보 params = > ' , queryParams);
            console.log('url + queryParams => ' , url + queryParams);
            var url2 = url + queryParams;
            request({
                url: url + queryParams,
                
                method: 'GET'
            }, function (error, response, body) {
                console.log('Status', response.statusCode);
                console.log('Headers', JSON.stringify(response.headers));
                console.log('Reponse received', body);
                res.send(body);
            });

        });
        /**
         * 해당 소환사의 match id list 를 가지고 매치정보를 보여줍니다. 
         * return : json 
         * params : matchIds 
         */
        app.get('/getMatchListByMatchIds',function(req,res){
            const matchIds = req.param('matchIds');
            console.log('matchIds => ' , matchIds);
            const url = 'https://asia.api.riotgames.com/lol/match/v5/matches/'+encodeURIComponent(matchIds); // encoding! 
            const queryParams ='?' + encodeURIComponent('api_key') + '='+apiKey 
            console.log('소환사 정보 params = > ' , queryParams);
            console.log('url + queryParams => ' , url + queryParams);
            var url2 = url + queryParams;
            request({
                url: url + queryParams,
                
                method: 'GET'
            }, function (error, response, body) {
                console.log('Status', response.statusCode);
               // console.log('Headers', JSON.stringify(response.headers));
                console.log('Reponse received', body);
                res.send(body);
            });


        });
        /**
         * 해당소환사의 encrypted summoner id 를 통해 소환사의 랭크 정보를 보여줍니다.
         * return : json 
         * params : id
         */
         app.get('/getSummonerRankById',function(req,res){
            const id = req.param('id');
            console.log('id => ' , id);
            const url = 'https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/'+encodeURIComponent(id); // encoding! 
            const queryParams ='?' + encodeURIComponent('api_key') + '='+apiKey 
            console.log('소환사 정보 params = > ' , queryParams);
            console.log('url + queryParams => ' , url + queryParams);
            var url2 = url + queryParams;
            request({
                url: url + queryParams,
                
                method: 'GET'
            }, function (error, response, body) {
                console.log('Status', response.statusCode);
               // console.log('Headers', JSON.stringify(response.headers));
                console.log('Reponse received', body);
                res.send(body);
            });


        });

        /**
         * @test axios 사용해보기
         */
        app.get('/testAxios',async(req , res) => {
        let data = '';
        
        /**/ 
        //방법 1) 
          try{
            await axios.get('https://kr.api.riotgames.com/lol/platform/v3/champion-rotations',{
                params:{
                    api_key:apiKey,
                }
            })
            .then((res)=>{
                data = res.data;
            })
          } catch(error){
              console.log("error occured!");
              console.log(error);
          } 
      
          res.send(data);
         
        })

        
























//test code 
        /*
        app.get('/result',function(req,res){
            //request get parameter
            // 받아온 parameter 를 리터럴화 : https://stackoverflow.com/questions/61380886/cannot-create-property-locals-on-string
            const u_name = {
                u_name:req.param('u_name')
            };  
            console.log('u_name => ' , u_name);
            const url = 'https://kr.api.riotgames.com/lol/platform/v3/champion-rotations';
        
            
            const queryParams = '?' + encodeURIComponent('api_key') + '='+apiKey 
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
        */

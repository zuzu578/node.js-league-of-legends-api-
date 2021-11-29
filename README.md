# node js 로 다시만들어보는 league of legends API 전적검색 
# 만든 계기 
node js 학습을 위해 
기존에 spring 으로 만들었던 lol api 검색기능 을 node js 로 구현해보았습니다.
# node
<img width="747" alt="스크린샷 2021-10-04 오후 6 37 48" src="https://user-images.githubusercontent.com/69393030/135828723-2e32dd1d-420a-4a29-9059-5995e9794427.png">

<img width="994" alt="스크린샷 2021-10-04 오후 6 36 07" src="https://user-images.githubusercontent.com/69393030/135828461-d82be334-2a8e-4e2e-a329-bf50d849b677.png">

# vue cdn / client 
<img width="566" alt="스크린샷 2021-10-04 오후 6 37 20" src="https://user-images.githubusercontent.com/69393030/135828646-f8313dbb-7bf4-4a50-a00c-1b4089087447.png">
<img width="747" alt="스크린샷 2021-10-04 오후 6 37 33" src="https://user-images.githubusercontent.com/69393030/135828681-f0b47ba9-99c2-4c76-b46d-8ad346b2ff88.png">

# result
<img width="747" alt="스크린샷 2021-10-04 오후 6 38 09" src="https://user-images.githubusercontent.com/69393030/135828775-b36bdf1b-b056-4a12-8c3c-de3df8c9c271.png">


# node js 에서 axios 비동기 통신 사용하기 

<img width="1111" alt="스크린샷 2021-11-22 오후 10 12 09" src="https://user-images.githubusercontent.com/69393030/142867651-4453f2a4-e381-44e4-bb4a-12f3ff382e99.png">a
1) 방법1: function 앞에 async 를 쓰게 되면 promise 객체를 return 하게 됩니다. 때문에 promise 객체를 변수에 담아 최종적으로 body 에 send 해주고싶으면 async await 를 사용해주면 됩니다.
 <img width="808" alt="스크린샷 2021-11-23 오후 9 56 00" src="https://user-images.githubusercontent.com/69393030/143027836-d86fcdd8-b77b-47cb-9165-124e2ee788d1.png">
2) 방법2: 
3) const transaction = await axios.get('https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/'+encodeURIComponent(summonerName)+'',{
               params:{
                   api_key:apiKey,
               }
              
           })
 이런 방식으로도 통신을 할수있습니다. 


# 주의사항  res.send() is not a function
-참조
https://stackoverflow.com/questions/44176021/node-js-res-send-is-not-a-function

<img width="808" alt="스크린샷 2021-11-23 오후 9 57 39" src="https://user-images.githubusercontent.com/69393030/143028092-2dcedc67-d2b1-4ed0-99c1-aee054c3d4d7.png">

app.get('exampleUrl',(req,res) => {

}) 

이렇게하면 동작을 하지만 반대로 하게 되면(res,req) res.send() is not a function 오류가 발생한다.



# multer 를 이용한 File upload 구현
참조 
https://wayhome25.github.io/nodejs/2017/02/21/nodejs-15-file-upload/

<img width="448" alt="스크린샷 2021-11-28 오후 7 26 34" src="https://user-images.githubusercontent.com/69393030/143764144-8754d340-ccb5-4117-885c-81d1cbb26231.png">
upload 는 파일이 실제로 첨부될 , 파일이 올라가질 경로입니다.
<img width="471" alt="스크린샷 2021-11-28 오후 7 27 12" src="https://user-images.githubusercontent.com/69393030/143764161-fbf14fbc-d2e5-4dde-a014-5f7b0c6debde.png">
node 서버가 처음으로 시작될때 , 해당 파일 경로가 없는경우 , root 경로에 file 을 만들어줍니다.( 만들어진 파일은 첨부한 파일이 들어가게될 빈 파일 )

# fileUpload Api 

<img width="588" alt="스크린샷 2021-11-28 오후 7 28 32" src="https://user-images.githubusercontent.com/69393030/143764196-9dce0ce2-c404-48af-8615-2a3e009d8bba.png">

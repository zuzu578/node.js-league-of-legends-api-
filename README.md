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
2) 방법2: 

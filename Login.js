/* session\login\app.js */
const app = require('express')();
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const bodyParser = require('body-parser');
const { render } = require('ejs');
app.set('view engine', 'ejs');
app.set('views', 'views');
app.engine('html',require('ejs').renderFile)
app.use(bodyParser.urlencoded({ extended: false }));


/**
 * session 사용
 */
// session options 
 var options = {
    store: new FileStore,
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true,
    name: 'my.connect.sid'
  };

  app.use(session(options));

/**
 *  root 경로 진입시 , 세션값 체크 
 */
app.get('/', (req, res) => {     
    //console.log(req.session);
    // 세션값이 있는경우 
    if(req.session.uid) {
        console.log('로그인 되었습니다.')
        res.render('test/home.html', { id: req.session.user_id });
    }else{
      // 세션값이 없는경우 
      console.log('로그인 되지않음');
      res.render('test/login.html');

    }    
});
/**
 * login api method 
 */
app.post('/doLogin',(req , res)=>{
    // request parameters userId , userPassowrd 
    let userId = req.param('id');
    let userPassword = req.param('password');
    // 세션아이디 값을 저장 
    req.session.uid = userId;
    req.session.isLogined = true;

    // 세션 저장후 , 리다이렉트 
    req.session.save(function(){
        res.redirect('/');
    });
    

})
app.get('/doLogOut',(req , res)=>{
    req.session.destroy(function(){ 
        try{
            res.clearCookie(options.name);
            //req.session.destory;
            req.session;
            res.redirect('/');
            console.log('logout!');

        }catch(error){
            console.log('error! ', error);
        }      
     });
})

app.get('/logginedUserOnly',(req,res)=>{

    if(req.session.uid){

        res.render('test/loggingUserOnlyTest.html');

    }else{

        console.log('로그인 하지않은 유저는 접근 권한이 없습니다.');
        res.redirect('/');
    }

})



app.listen(3000, () => {
  console.log('listening 3000port');
});
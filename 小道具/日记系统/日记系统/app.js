var express = require('express');
var bodyParser = require('body-parser');
var db = require('./db/db');
var diaryModel = require('./models/diaryModel');

var app = express();

app.use(express.static(__dirname + '/public'));
//设置模板引擎
app.set('view engine','ejs');
app.set('views', __dirname + '/views');
//请求体内容
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());




//数据库连接成功的回调
db(function () {
    app.get('/biaoge.html',function (req,res) {
        res.render('biaoge')
    })
//表单
    app.post('/biaoge.html', function(req, res){
        //将数据存入数据库
        // console.log(req.body)
        diaryModel.create(req.body, function(err, data){
            console.log(data);
            if(err){
                res.send('error');
            }else{
                res.setHeader('content-type', 'text/html;charset=utf-8');
                res.send(`    <h2 style="position: fixed;top: 100px;left: 50%;transform: translateX(-50%)">提交成功了!!!</h2>
                            <script>setTimeout(function(){   location.href = '/chaxun.html'; },2000)</script>`)
            }
        })
    });

    // 查询
    app.get('/chaxun.html',function (req, res) {
        diaryModel.find(function (err,data) {
            if(err){
                console.log(err);
            }else {
                res.render('chaxun',{data:data})
            }
        })
    })

//修改
    app.get('/data/:id/xiugai',function (req,res) {
        diaryModel.findById(req.params.id, function(err,data){
           if(err){
               res.send('error');
           }else{
               res.render('xiugai',{data:data})
           }
        });
    })
    //更新
    app.post('/data/:id/xiugai', function(req, res){
        diaryModel.updateOne({_id: req.params.id}, req.body, function(err, data){
           if(err){
               console.log(err);
               res.send('error')
           }else{
               diaryModel.find(function (err,data) {
                   if(err){
                       console.log(err);
                   }else {
                       res.render('chaxun',{data:data})
                   }
               })
           }
        });
    });

    //点击内容查看内容,

//删除
    app.get('/data/:id/delete', function(req,res){
        diaryModel.deleteOne({_id:req.params.id}, function(err){
            if(err){
                res.send('删除失败!!');
            }else{
                res.redirect('/chaxun.html');
            }
        });
    });

    app.listen(8888,function () {
        console.log('8888端口监听中...')
    })

},function () {

})


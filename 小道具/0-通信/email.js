const AliyunEmail = require('aliyun-email')

const aliyunEmail = new AliyunEmail('LTAI4FeZEyt6k4Go9MsJ3p8Y','3OEVedJBepDXXizdF5VY02CyAoeWdU');

aliyunEmail.singleSendMail({
       AccountName: 'admin@xiaohigh.com',
       ReplyToAddress: true,
       AddressType: 1,
       ToAddress: '2395469379@qq.com',
       FromAlias: 'xx',
       Subject: '注册成功',
       HtmlBody: '<h3>恭喜您注册成功 点击以下链接完成注册 <a href="http://www.xiaohigh.com?sign=jalksdjfklasjdflkaslkda&code=123141">点击</a></h3>'
}).then((err,res)=> {
    console.log(err);
    console.log(res);
});


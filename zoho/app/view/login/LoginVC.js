Ext.define('Zoho.view.main.login.LoginVC', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login-vc',
    onLoginClick:function(btn){
        var email = 'vickyraj@gamil.com';
        var password = 'vickyraj';
        var txtEmail = btn.up('login').lookupReference('email').value;
        var txtPwd = btn.up('login').lookupReference('password').value;
        console.log(txtEmail , txtPwd);
        
        if(txtEmail == email && txtPwd == password){
           console.log( btn.up('login').up('app-main').setActiveItem('tabs'));
           alert('success');
        }else{
            alert('Please fill valid user and password');
        }
    }
    }
);
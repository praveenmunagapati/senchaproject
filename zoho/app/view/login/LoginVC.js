Ext.define('Zoho.view.main.login.LoginVC', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login-vc',
    onLoginClick:function(btn){
        var email = 'vickyraj@gmail.com';
        var password = 'vickyraj';
        var txtEmail = btn.up('login').lookupReference('email').value;
        var txtPwd = btn.up('login').lookupReference('password').value;
        if (txtEmail == email && txtPwd == password) {
            var store = btn.up('login').up('app-main').down('contacts').down('allcontacts').getViewModel().getStore('Contacts');
            
            // If store data is empty then set active tab addcontact otherwise allcontact
            btn.up('login').up('app-main').setActiveItem('tabs');          
            if (store.data.length == 0) {
                btn.up('login').up('app-main').down('contacts').setActiveItem('addcontact');
                
                var activeItem = btn.up('login').up('app-main').down('contacts').getLayout().getActiveItem().itemId;
                this.redirectTo(activeItem);
            } else {
                btn.up('login').up('app-main').down('contacts').setActiveItem('allcontacts');

                var activeItem = btn.up('login').up('app-main').down('contacts').getLayout().getActiveItem().itemId;
                this.redirectTo(activeItem);
            }
        } else {
            alert('Please fill valid user and password');
        }
    }
}
);
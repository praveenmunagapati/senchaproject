Ext.define('Zoho.view.main.login.Login', {
    extend: 'Ext.container.Container',
    requires: [
        'Zoho.view.main.login.LoginVC'
    ],
    controller:'login-vc',
    xtype: 'login',

    cls: 'login-main-container',

    layout: 'center',

    items: [{
        xtype: 'container',
        width: 350,
        padding: 35,
        layout: 'vbox',
        cls: 'login-header',
        items: [{
            xtype: 'container',
            html: '<h2 class="head">CRM CONTACTS</h2><p class="welcome-text">Welcome back! Please login to your account.</p>',
            cls: 'login-heading'
        }, {
            xtype: 'form',
            cls: 'login-form',
            fieldDefaults: {
                labelAlign: 'top',
                msgTarget: 'side',
                width: 280
            },
            items: [
                {
                    xtype: 'textfield',
                    fieldLabel: 'Email Address',
                    cls: 'label-cls',
                    vtype: 'email',
                    emptyText: 'Email',
                    reference:'email'
                }, {
                    xtype: 'textfield',
                    fieldLabel: 'Password',
                    cls: 'label-cls',                    
                    reference:'password',
                    emptyText: 'Password'                    
                }, {
                    xtype: 'checkbox',
                    boxLabel: 'Remember me',
                    cls: 'remember-me',
                    labelAlign: 'left'
                }, {
                    xtype: 'container',
                    layout: 'center',
                    width: 280,
                    items: [{
                        xtype: 'button',
                        text: 'Login',
                        cls: 'login-button',
                        listeners:{
                            click:'onLoginClick'
                        }
                    }]  
                }
            ]
        }]
    }]


});
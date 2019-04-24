/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Zoho.view.main.Main', {
    extend: 'Ext.container.Container',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'Zoho.view.main.MainController',
        'Zoho.view.main.MainModel',
        'Zoho.view.main.List',

        'Contacts.view.contacts.Contacts',
        'Zoho.view.main.login.Login'
    ],


    controller: 'main',
    viewModel: 'main',

    layout: 'card',

    activeItem: 'login',

    items: [{
        xtype: 'login',
        itemId: 'login'
    }, {
        itemId: 'tabs',
        ui: 'navigation',
        xtype: 'tabpanel',
        tabBarHeaderPosition: 1,
        titleRotation: 0,
        tabRotation: 0,

        header: {
            layout: {
                align: 'stretchmax',
            },
            title: {
                // bind: {
                //     text: '{name}'
                // },
                flex: 0
            },
            iconCls: 'fa-th-list'
        },

        tabBar: {
            flex: 1,
            layout: {
                align: 'stretch',
                overflowHandler: 'none'
            }
        },

        responsiveConfig: {
            tall: {
                headerPosition: 'top'
            },
            wide: {
                headerPosition: 'top'
            }
        },

        defaults: {
            // bodyPadding: 20,
            tabConfig: {
                plugins: 'responsive',
                responsiveConfig: {
                    wide: {
                        iconAlign: 'left',
                        textAlign: 'left'
                    },
                    tall: {
                        iconAlign: 'top',
                        textAlign: 'center',
                        width: 120
                    }
                }
            }
        },

        items: [
            {
                xtype: 'contacts',
                title: 'Contacts'
            }]
    }],


});

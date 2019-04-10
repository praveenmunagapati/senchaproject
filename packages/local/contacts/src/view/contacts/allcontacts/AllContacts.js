Ext.define('Contacts.view.contacts.allcontacts.AllContacts', {
    extend: 'Ext.container.Container',

    requires: [
        'Contacts.view.contacts.allcontacts.Grid'
    ],

    // controller: 'addcontact-vc',

    xtype: 'allcontacts',


    layout: 'fit',

    margin: '0 100px',

    defaults: {
        margin: '10px 0'
    },

    items: [
        {
            xtype: 'container',
            items: [{
                xtype: 'container',
                layout: 'hbox',
                items: [{
                    html: '<div class="headbar">Contacts</div>'
                }, {
                    xtype: 'tbfill'
                }, {
                    cls: 'addcontact-button',
                    xtype: 'button',
                    text: '+ Add Button',
                }]
            }, {
                xtype: 'container',
                layout: 'hbox',
                padding: '10 0 0 0',
                height: 70,
                items: [{
                    xtype: 'textfield',
                    width: 300
                },{
                    xtype: 'button',
                    text: 'Delete',
                    margin: '0 10'
                },{
                    xtype: 'tbfill'
                },{
                    xtype: 'button',
                    text: 'Export',
                    margin: '0 10'
                },{
                    xtype: 'button',
                    text: 'Add Columns',
                    margin: '0 10'
                },{
                    xtype: 'button',
                    text: 'Filters'
                }]
            }, {
                xtype: 'gridview'
            }]
        }]
});
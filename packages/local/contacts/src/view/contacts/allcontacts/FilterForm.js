Ext.define('Contacts.view.contacts.allcontacts.FilterForm',{
    extend:'Ext.form.Panel',
    xtype:'filterform',
    requires:[
        'Contacts.view.contacts.allcontacts.AllContactsVC'
    ],
    controller:'allcontacts-vc',
    items:[{
        xtype: 'checkboxgroup',
        defaults: {
            width: 120
        },
        columns: 1,
        items: [{
            boxLabel: 'First Name',
            inputValue: 'fname'
        },
        {
            xtype:'textfield',
            name:'firstname',
            // reference:'firstname'
        }
        , {
            boxLabel: 'Company Name',
            inputValue: 'Company'
        },
        {
            xtype:'textfield',
            name:'company'
        }],
    }, {
        xtype: 'container',
        layout: 'hbox',
        defaults: {
            xtype: 'button'
        },
        items: [
            {
                text: 'Clear'
            }, {
                text: 'Apply',
                listeners: {
                    click:'onclick'
            }
        }
        ]
    }]
})